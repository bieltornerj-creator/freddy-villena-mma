// Servidor Express: sirve el frontend estático y hace de proxy a la API de Anthropic.
// La ANTHROPIC_API_KEY vive solo aquí (en el .env del servidor), nunca en el cliente.

require('dotenv').config();

const path = require('path');
const express = require('express');
const Anthropic = require('@anthropic-ai/sdk');

const PORT = process.env.PORT || 3000;

if (!process.env.ANTHROPIC_API_KEY) {
  console.error(
    '\n⚠️  Falta ANTHROPIC_API_KEY. Copia .env.example a .env y añade tu clave.\n'
  );
}

// El SDK lee ANTHROPIC_API_KEY del entorno automáticamente.
const anthropic = new Anthropic();

const SYSTEM_PROMPT =
  'Eres Jarvis, un asistente personal inteligente. Responde conciso, ' +
  'directo y útil. Siempre en español de España. Máximo 2-3 frases.';

const app = express();
app.use(express.json({ limit: '64kb' }));

// Sirve la carpeta public/ como estática.
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint de chat: recibe { message: string } y devuelve { reply: string }.
app.post('/api/chat', async (req, res) => {
  const message = req.body && req.body.message;

  if (typeof message !== 'string' || message.trim().length === 0) {
    return res.status(400).json({ error: 'Falta el campo "message".' });
  }

  try {
    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 500,
      // Sin pensamiento extendido: prioriza latencia baja para voz.
      thinking: { type: 'disabled' },
      output_config: { effort: 'low' },
      system: SYSTEM_PROMPT,
      messages: [{ role: 'user', content: message }],
    });

    const reply = response.content
      .filter((block) => block.type === 'text')
      .map((block) => block.text)
      .join('')
      .trim();

    res.json({ reply });
  } catch (err) {
    const status = err && err.status ? err.status : 500;
    console.error('Error llamando a la API de Anthropic:', err && err.message);
    res
      .status(status)
      .json({ error: 'No se pudo obtener respuesta de Jarvis.' });
  }
});

app.listen(PORT, () => {
  console.log(`\n🤖 Jarvis escuchando en http://localhost:${PORT}\n`);
});
