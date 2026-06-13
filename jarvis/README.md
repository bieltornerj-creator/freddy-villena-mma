# Jarvis — asistente de voz

Web app de asistente de voz tipo Jarvis. Node.js + Express sirviendo un frontend
vanilla (HTML + CSS + JS, sin frameworks ni build tools). El servidor hace de
proxy a la API de Anthropic para no exponer nunca la clave en el navegador.

## Cómo funciona

1. Abres la app en el navegador y das permiso de micrófono.
2. Escucha pasivamente con la Web Audio API (`AnalyserNode`). Al detectar una
   **palmada** (pico de energía RMS corto y seco, con cooldown de 1.5s) se activa.
3. Transcribe lo que dices con la Web Speech API (`SpeechRecognition`), en tiempo real.
4. Al callar, envía el texto a `POST /api/chat`, que hace proxy a Anthropic
   (`claude-sonnet-4-6`, máx. 500 tokens).
5. Muestra la respuesta y la lee en voz alta con `speechSynthesis` (voz española).
   Luego vuelve a escucha pasiva.

### Estados del orbe

- **Pasivo** (azul tenue) — esperando palmada
- **Escuchando** (púrpura) — transcribiendo
- **Procesando** (naranja) — esperando a la API
- **Hablando** (verde) — leyendo la respuesta

El slider inferior ajusta la sensibilidad de detección de palmada.

## Uso

```bash
cd jarvis
npm install
cp .env.example .env      # añade tu ANTHROPIC_API_KEY
npm start                 # http://localhost:3000
```

Ábrelo en **Chrome** (de escritorio o móvil): es el navegador con mejor soporte
para la Web Speech API. Requiere `localhost` o HTTPS para acceder al micrófono.

## Notas

- La `ANTHROPIC_API_KEY` solo vive en `server.js` / `.env`; nunca llega al cliente.
- El `.env` está en `.gitignore`: no lo subas al repo.
