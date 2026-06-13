// Servidor Express: sirve el frontend estático y hace de proxy a la API de Anthropic.
// Jarvis es el asistente de "digitalbiel" y consulta el estado del negocio en
// ClickUp (contenido de Instagram/LinkedIn, propuestas, etc.) mediante herramientas.
//
// Descubre las listas del workspace automáticamente: no hay que configurar IDs.
//
// Claves (solo en el servidor, nunca en el cliente):
//   ANTHROPIC_API_KEY  → obligatoria
//   CLICKUP_API_TOKEN  → opcional; si falta, Jarvis funciona como asistente general

require('dotenv').config();

const path = require('path');
const express = require('express');
const Anthropic = require('@anthropic-ai/sdk');

const PORT = process.env.PORT || 3000;
const CLICKUP_TOKEN = process.env.CLICKUP_API_TOKEN || '';
const hasClickUp = Boolean(CLICKUP_TOKEN);

if (!process.env.ANTHROPIC_API_KEY) {
  console.error(
    '\n⚠️  Falta ANTHROPIC_API_KEY. Copia .env.example a .env y añade tu clave.\n'
  );
}
if (!hasClickUp) {
  console.warn(
    '\nℹ️  Sin CLICKUP_API_TOKEN: Jarvis responderá como asistente general,\n' +
      '   sin acceso a los datos del negocio.\n'
  );
}

const anthropic = new Anthropic();

// ---------- Cliente ClickUp ----------
async function clickupGet(pathStr) {
  const res = await fetch('https://api.clickup.com/api/v2' + pathStr, {
    headers: { Authorization: CLICKUP_TOKEN },
  });
  if (!res.ok) throw new Error('ClickUp ' + res.status + ' en ' + pathStr);
  return res.json();
}

// Descubre todas las listas del workspace (cacheado 10 min).
// Las listas suelen llamarse "List"; la etiqueta útil es el nombre del espacio.
let catalogCache = { lists: [], at: 0 };

async function getCatalog() {
  if (!hasClickUp) return { lists: [] };
  if (catalogCache.lists.length && Date.now() - catalogCache.at < 600000) {
    return catalogCache;
  }

  const lists = [];
  const { teams = [] } = await clickupGet('/team');

  for (const team of teams) {
    const { spaces = [] } = await clickupGet(`/team/${team.id}/space?archived=false`);
    for (const space of spaces) {
      const label = (name) =>
        !name || name.toLowerCase() === 'list' ? space.name : `${space.name} – ${name}`;

      // Listas sueltas del espacio.
      try {
        const fl = await clickupGet(`/space/${space.id}/list?archived=false`);
        (fl.lists || []).forEach((l) =>
          lists.push({ id: l.id, label: label(l.name), space: space.name })
        );
      } catch (_) {}

      // Listas dentro de carpetas.
      try {
        const fd = await clickupGet(`/space/${space.id}/folder?archived=false`);
        (fd.folders || []).forEach((folder) =>
          (folder.lists || []).forEach((l) =>
            lists.push({ id: l.id, label: label(l.name), space: space.name })
          )
        );
      } catch (_) {}
    }
  }

  catalogCache = { lists, at: Date.now() };
  return catalogCache;
}

// Encuentra una lista por nombre aproximado (ignora mayúsculas/acentos).
function normalize(s) {
  return (s || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '');
}
function resolveList(catalog, query) {
  const q = normalize(query);
  return (
    catalog.lists.find((l) => normalize(l.label) === q) ||
    catalog.lists.find((l) => normalize(l.label).includes(q) || q.includes(normalize(l.space))) ||
    null
  );
}

// Trae tareas de una lista con filtros opcionales.
async function clickupTasks(listId, opts = {}) {
  const params = new URLSearchParams();
  params.set('archived', 'false');
  params.set('subtasks', 'true');
  if (opts.includeClosed) params.set('include_closed', 'true');
  if (Array.isArray(opts.statuses)) {
    opts.statuses.forEach((s) => params.append('statuses[]', s));
  }
  if (opts.dueFrom) params.set('due_date_gt', String(Date.parse(opts.dueFrom) - 1));
  if (opts.dueTo) params.set('due_date_lt', String(Date.parse(opts.dueTo) + 86400000));

  const data = await clickupGet(`/list/${listId}/task?${params.toString()}`);
  return (data.tasks || []).map((t) => ({
    nombre: t.name,
    estado: t.status && t.status.status,
    vence: t.due_date ? new Date(Number(t.due_date)).toISOString().slice(0, 10) : null,
  }));
}

// ---------- Herramientas de Jarvis ----------
const TOOLS = [
  {
    name: 'listar_tareas',
    description:
      'Consulta tareas o contenido del negocio digitalbiel en ClickUp. ' +
      'Úsalo para qué contenido hay, qué está pendiente, qué toca publicar o ' +
      'cómo van las propuestas. No inventes datos: consúltalos siempre aquí.',
    input_schema: {
      type: 'object',
      properties: {
        lista: {
          type: 'string',
          description:
            'Nombre de la lista a consultar (p. ej. "Calendario Instagram", ' +
            '"Contenido LinkedIn", "Propuestas"). Ver listas disponibles en el contexto.',
        },
        estado: {
          type: 'string',
          description:
            'Filtra por estado exacto de ClickUp, p. ej. "to do", "in progress", "complete". Opcional.',
        },
        desde: { type: 'string', description: 'Fecha mínima de vencimiento YYYY-MM-DD. Opcional.' },
        hasta: { type: 'string', description: 'Fecha máxima de vencimiento YYYY-MM-DD. Opcional.' },
        incluir_completadas: {
          type: 'boolean',
          description: 'Si es true, incluye también las tareas completadas.',
        },
      },
      required: ['lista'],
    },
  },
  {
    name: 'resumen_negocio',
    description:
      'Resumen del estado del negocio: tareas pendientes y completadas en cada ' +
      'lista. Úsalo cuando pregunten en general "¿cómo va el negocio?".',
    input_schema: { type: 'object', properties: {} },
  },
];

async function runTool(name, input, catalog) {
  if (name === 'listar_tareas') {
    const cfg = resolveList(catalog, input.lista || '');
    if (!cfg) {
      return {
        error: 'No encontré esa lista.',
        listas_disponibles: catalog.lists.map((l) => l.label),
      };
    }
    const tareas = await clickupTasks(cfg.id, {
      statuses: input.estado ? [input.estado] : undefined,
      dueFrom: input.desde,
      dueTo: input.hasta,
      includeClosed: input.incluir_completadas,
    });
    return { lista: cfg.label, total: tareas.length, tareas: tareas.slice(0, 40) };
  }

  if (name === 'resumen_negocio') {
    const out = {};
    for (const cfg of catalog.lists) {
      try {
        const all = await clickupTasks(cfg.id, { includeClosed: true });
        out[cfg.label] = {
          pendientes: all.filter((t) => t.estado !== 'complete').length,
          completadas: all.filter((t) => t.estado === 'complete').length,
          total: all.length,
        };
      } catch (_) {
        out[cfg.label] = { error: 'no disponible' };
      }
    }
    return out;
  }

  return { error: 'Herramienta desconocida.' };
}

function buildSystemPrompt(catalog) {
  const hoy = new Date().toISOString().slice(0, 10);
  let prompt =
    'Eres Jarvis, el asistente personal de Biel para su agencia de marketing ' +
    'digital "digitalbiel". Respondes conciso, directo y útil. Siempre en ' +
    'español de España. Máximo 2-3 frases. La fecha de hoy es ' + hoy + '.';

  if (hasClickUp && catalog.lists.length) {
    const nombres = catalog.lists.map((l) => l.label).join(', ');
    prompt +=
      ' Tienes herramientas para consultar el estado del negocio en ClickUp. ' +
      'Listas disponibles: ' + nombres + '. ' +
      'Cuando pregunten por el negocio, el contenido pendiente, qué toca ' +
      'publicar o las propuestas, usa las herramientas para dar datos reales; ' +
      'nunca los inventes.';
  } else {
    prompt +=
      ' No tienes acceso a los datos del negocio en esta sesión, así que no ' +
      'inventes cifras ni estados; si te preguntan por datos concretos, dilo.';
  }
  return prompt;
}

// ---------- App ----------
const app = express();
app.use(express.json({ limit: '64kb' }));
app.use(express.static(path.join(__dirname, 'public')));

app.post('/api/chat', async (req, res) => {
  const message = req.body && req.body.message;
  if (typeof message !== 'string' || message.trim().length === 0) {
    return res.status(400).json({ error: 'Falta el campo "message".' });
  }

  // Descubre el catálogo de listas (cacheado). Si falla, sigue sin él.
  let catalog = { lists: [] };
  if (hasClickUp) {
    try {
      catalog = await getCatalog();
    } catch (err) {
      console.error('No se pudo leer el catálogo de ClickUp:', err && err.message);
    }
  }

  const messages = [{ role: 'user', content: message }];

  try {
    for (let step = 0; step < 5; step++) {
      const response = await anthropic.messages.create({
        model: 'claude-sonnet-4-6',
        max_tokens: 500,
        thinking: { type: 'disabled' }, // baja latencia para voz
        output_config: { effort: 'low' },
        system: buildSystemPrompt(catalog),
        tools: hasClickUp ? TOOLS : undefined,
        messages,
      });

      if (response.stop_reason === 'tool_use') {
        messages.push({ role: 'assistant', content: response.content });
        const results = [];
        for (const block of response.content) {
          if (block.type === 'tool_use') {
            let result;
            try {
              result = await runTool(block.name, block.input, catalog);
            } catch (err) {
              result = { error: 'No se pudo consultar ClickUp.' };
              console.error('Error en herramienta', block.name, err && err.message);
            }
            results.push({
              type: 'tool_result',
              tool_use_id: block.id,
              content: JSON.stringify(result),
            });
          }
        }
        messages.push({ role: 'user', content: results });
        continue;
      }

      const reply = response.content
        .filter((b) => b.type === 'text')
        .map((b) => b.text)
        .join('')
        .trim();
      return res.json({ reply });
    }

    res.json({ reply: 'Lo siento, no he podido completar la consulta.' });
  } catch (err) {
    const status = err && err.status ? err.status : 500;
    console.error('Error en /api/chat:', err && err.message);
    res.status(status).json({ error: 'No se pudo obtener respuesta de Jarvis.' });
  }
});

app.listen(PORT, () => {
  console.log(`\n🤖 Jarvis (digitalbiel) escuchando en http://localhost:${PORT}`);
  console.log(`   ClickUp: ${hasClickUp ? 'conectado (listas automáticas)' : 'no configurado'}\n`);
});
