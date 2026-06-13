// Servidor Express: sirve el frontend estático y hace de proxy a la API de Anthropic.
// Jarvis es el asistente de "digitalbiel" y puede consultar el estado del negocio
// en ClickUp (contenido de Instagram/LinkedIn, propuestas) mediante herramientas.
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

// El SDK lee ANTHROPIC_API_KEY del entorno automáticamente.
const anthropic = new Anthropic();

// ---------- Configuración de ClickUp (listas del workspace de digitalbiel) ----------
// IDs estables del workspace. Si cambias de listas, actualiza aquí.
const CLICKUP_LISTS = {
  instagram: { id: '901218310310', label: 'Calendario Instagram' },
  linkedin: { id: '901212496817', label: 'Contenido LinkedIn' },
  propuestas: { id: '901206559667', label: 'Propuestas' },
  anuncios: { id: '901206551329', label: 'Anuncios y plantillas' },
};

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
  if (opts.dueTo) {
    // Incluye todo el día "hasta".
    params.set('due_date_lt', String(Date.parse(opts.dueTo) + 86400000));
  }

  const url = `https://api.clickup.com/api/v2/list/${listId}/task?${params.toString()}`;
  const res = await fetch(url, { headers: { Authorization: CLICKUP_TOKEN } });
  if (!res.ok) throw new Error('ClickUp respondió ' + res.status);

  const data = await res.json();
  return (data.tasks || []).map((t) => ({
    nombre: t.name,
    estado: t.status && t.status.status,
    vence: t.due_date
      ? new Date(Number(t.due_date)).toISOString().slice(0, 10)
      : null,
  }));
}

// ---------- Herramientas que puede usar Jarvis ----------
const TOOLS = [
  {
    name: 'listar_tareas',
    description:
      'Consulta tareas o contenido del negocio digitalbiel en ClickUp. ' +
      'Úsalo para preguntas sobre qué contenido hay, qué está pendiente, ' +
      'qué toca publicar o cómo van las propuestas. No inventes datos: ' +
      'consúltalos siempre con esta herramienta.',
    input_schema: {
      type: 'object',
      properties: {
        lista: {
          type: 'string',
          enum: ['instagram', 'linkedin', 'propuestas', 'anuncios'],
          description: 'Qué lista consultar.',
        },
        estado: {
          type: 'string',
          description:
            'Filtra por estado exacto de ClickUp, p. ej. "to do", ' +
            '"in progress" o "complete". Opcional.',
        },
        desde: {
          type: 'string',
          description: 'Fecha mínima de vencimiento, formato YYYY-MM-DD. Opcional.',
        },
        hasta: {
          type: 'string',
          description: 'Fecha máxima de vencimiento, formato YYYY-MM-DD. Opcional.',
        },
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
      'Devuelve un resumen del estado del negocio: cuántas tareas pendientes ' +
      'y completadas hay en Instagram, LinkedIn y Propuestas. Úsalo cuando ' +
      'pregunten en general "¿cómo va el negocio?".',
    input_schema: { type: 'object', properties: {} },
  },
];

// Ejecuta una herramienta y devuelve un objeto serializable.
async function runTool(name, input) {
  if (name === 'listar_tareas') {
    const cfg = CLICKUP_LISTS[input.lista];
    if (!cfg) return { error: 'Lista desconocida.' };
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
    for (const key of ['instagram', 'linkedin', 'propuestas']) {
      const cfg = CLICKUP_LISTS[key];
      const all = await clickupTasks(cfg.id, { includeClosed: true });
      out[cfg.label] = {
        pendientes: all.filter((t) => t.estado !== 'complete').length,
        completadas: all.filter((t) => t.estado === 'complete').length,
        total: all.length,
      };
    }
    return out;
  }

  return { error: 'Herramienta desconocida.' };
}

function buildSystemPrompt() {
  const hoy = new Date().toISOString().slice(0, 10);
  let prompt =
    'Eres Jarvis, el asistente personal de Biel para su agencia de marketing ' +
    'digital "digitalbiel". Responde conciso, directo y útil. Siempre en ' +
    'español de España. Máximo 2-3 frases. La fecha de hoy es ' + hoy + '.';
  if (hasClickUp) {
    prompt +=
      ' Tienes herramientas para consultar el estado del negocio en ClickUp ' +
      '(contenido de Instagram y LinkedIn, y propuestas). Cuando te pregunten ' +
      'por el negocio, el contenido pendiente, qué toca publicar o las ' +
      'propuestas, usa las herramientas para dar datos reales; nunca los inventes.';
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

  const messages = [{ role: 'user', content: message }];

  try {
    // Bucle de uso de herramientas (máx. 4 iteraciones para acotar latencia).
    for (let step = 0; step < 5; step++) {
      const response = await anthropic.messages.create({
        model: 'claude-sonnet-4-6',
        max_tokens: 500,
        thinking: { type: 'disabled' }, // baja latencia para voz
        output_config: { effort: 'low' },
        system: buildSystemPrompt(),
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
              result = await runTool(block.name, block.input);
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
        continue; // vuelve a preguntar al modelo con los resultados
      }

      // Respuesta final.
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
  console.log(`   ClickUp: ${hasClickUp ? 'conectado' : 'no configurado'}\n`);
});
