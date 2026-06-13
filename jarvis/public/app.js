/* ============================================================
   Jarvis — lógica del cliente
   Flujo: escucha pasiva → palmada → reconocimiento → API → voz → pasiva
   ============================================================ */

(() => {
  'use strict';

  // ---------- Referencias al DOM ----------
  const app = document.querySelector('.app');
  const statusEl = document.getElementById('status');
  const transcriptEl = document.getElementById('transcript');
  const replyEl = document.getElementById('reply');
  const errorEl = document.getElementById('error');
  const startBtn = document.getElementById('start');
  const sensitivity = document.getElementById('sensitivity');
  const sensitivityValue = document.getElementById('sensitivity-value');

  // ---------- Estado de la app ----------
  const STATE = {
    IDLE: 'idle', // esperando palmada
    LISTENING: 'listening', // transcribiendo al usuario
    PROCESSING: 'processing', // esperando a la API
    SPEAKING: 'speaking', // leyendo la respuesta
  };

  const STATUS_TEXT = {
    [STATE.IDLE]: 'Esperando palmada…',
    [STATE.LISTENING]: 'Escuchando…',
    [STATE.PROCESSING]: 'Pensando…',
    [STATE.SPEAKING]: 'Hablando…',
  };

  let currentState = STATE.IDLE;

  function setState(state) {
    currentState = state;
    app.dataset.state = state;
    statusEl.textContent = STATUS_TEXT[state];
  }

  function showError(message) {
    errorEl.textContent = message || '';
  }

  // ---------- Detección de palmada (Web Audio API) ----------
  let audioCtx = null;
  let analyser = null;
  let micSource = null;
  let timeData = null;
  let rafId = null;

  // Umbral configurable de energía RMS (sensibilidad).
  let threshold = parseFloat(sensitivity.value);
  // Cooldown entre activaciones para evitar falsos positivos.
  const COOLDOWN_MS = 1500;
  let lastClapAt = 0;
  // Para distinguir un pico seco de ruido sostenido.
  let aboveSince = 0;
  const MAX_PEAK_MS = 300; // la palmada dura < 300ms
  let prevRms = 0;

  sensitivity.addEventListener('input', () => {
    threshold = parseFloat(sensitivity.value);
    sensitivityValue.textContent = threshold.toFixed(2);
  });
  sensitivityValue.textContent = threshold.toFixed(2);

  // Calcula la energía RMS del buffer de tiempo.
  function computeRms(buffer) {
    let sum = 0;
    for (let i = 0; i < buffer.length; i++) {
      const v = buffer[i];
      sum += v * v;
    }
    return Math.sqrt(sum / buffer.length);
  }

  // Bucle de análisis: corre siempre que escuchamos pasivamente.
  function detectLoop() {
    rafId = requestAnimationFrame(detectLoop);

    // Solo detectamos palmadas en modo pasivo.
    if (currentState !== STATE.IDLE) {
      prevRms = 0;
      aboveSince = 0;
      return;
    }

    analyser.getFloatTimeDomainData(timeData);
    const rms = computeRms(timeData);
    const now = performance.now();

    if (rms > threshold) {
      // Inicio de un pico de energía.
      if (aboveSince === 0) aboveSince = now;

      const peakDuration = now - aboveSince;
      const cooledDown = now - lastClapAt > COOLDOWN_MS;

      // Palmada = pico corto y seco (no ruido continuo), tras el cooldown.
      if (peakDuration < MAX_PEAK_MS && cooledDown) {
        lastClapAt = now;
        aboveSince = 0;
        onClap();
      }
    } else {
      // La energía cayó: si llevaba demasiado tiempo arriba era ruido sostenido.
      aboveSince = 0;
    }

    prevRms = rms;
  }

  // ---------- Reconocimiento de voz (Web Speech API) ----------
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  let recognition = null;
  let finalTranscript = '';

  function buildRecognition() {
    const rec = new SpeechRecognition();
    rec.lang = 'es-ES';
    rec.interimResults = true; // transcripción en tiempo real
    rec.continuous = false; // se detiene cuando el usuario calla
    rec.maxAlternatives = 1;

    rec.onresult = (event) => {
      let interim = '';
      finalTranscript = '';
      for (let i = 0; i < event.results.length; i++) {
        const text = event.results[i][0].transcript;
        if (event.results[i].isFinal) finalTranscript += text;
        else interim += text;
      }
      transcriptEl.textContent = (finalTranscript || interim).trim();
    };

    rec.onerror = (event) => {
      if (event.error === 'no-speech') {
        // No dijo nada: volvemos a escucha pasiva sin molestar.
        setState(STATE.IDLE);
        return;
      }
      if (event.error === 'not-allowed') {
        showError('Permiso de micrófono denegado para el reconocimiento.');
      } else {
        showError('Error de reconocimiento de voz: ' + event.error);
      }
      setState(STATE.IDLE);
    };

    rec.onend = () => {
      // Si seguimos escuchando y hay texto, lo enviamos.
      if (currentState === STATE.LISTENING) {
        const text = finalTranscript.trim();
        if (text) {
          sendToJarvis(text);
        } else {
          setState(STATE.IDLE);
        }
      }
    };

    return rec;
  }

  // Se dispara al detectar una palmada.
  function onClap() {
    if (!recognition) return;
    showError('');
    transcriptEl.textContent = '';
    replyEl.textContent = '';
    finalTranscript = '';
    setState(STATE.LISTENING);
    try {
      recognition.start();
    } catch (_) {
      // start() lanza si ya estaba activo; lo ignoramos.
    }
  }

  // ---------- Llamada al servidor (proxy a Anthropic) ----------
  async function sendToJarvis(message) {
    setState(STATE.PROCESSING);
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message }),
      });

      if (!res.ok) throw new Error('HTTP ' + res.status);

      const data = await res.json();
      const reply = (data.reply || '').trim();

      if (!reply) {
        showError('Jarvis no devolvió respuesta.');
        setState(STATE.IDLE);
        return;
      }

      replyEl.textContent = reply;
      speak(reply);
    } catch (err) {
      showError('No se pudo contactar con Jarvis. Inténtalo de nuevo.');
      setState(STATE.IDLE);
    }
  }

  // ---------- Síntesis de voz (speechSynthesis, voz española) ----------
  let spanishVoice = null;

  function pickSpanishVoice() {
    const voices = window.speechSynthesis.getVoices();
    // Filtra por idioma "es" (es-ES, es-MX, etc.); prioriza es-ES.
    spanishVoice =
      voices.find((v) => v.lang && v.lang.toLowerCase().startsWith('es-es')) ||
      voices.find((v) => v.lang && v.lang.toLowerCase().startsWith('es')) ||
      null;
  }

  function speak(text) {
    if (!('speechSynthesis' in window)) {
      // Sin TTS: mostramos el texto y volvemos a pasiva.
      setState(STATE.IDLE);
      return;
    }

    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = 'es-ES';
    if (spanishVoice) utter.voice = spanishVoice;
    utter.rate = 1.0;
    utter.pitch = 1.0;

    utter.onstart = () => setState(STATE.SPEAKING);
    utter.onend = () => setState(STATE.IDLE);
    utter.onerror = () => setState(STATE.IDLE);

    setState(STATE.SPEAKING);
    window.speechSynthesis.speak(utter);
  }

  // ---------- Arranque ----------
  async function start() {
    showError('');

    // Comprobaciones de soporte.
    if (!SpeechRecognition) {
      showError(
        'Tu navegador no soporta reconocimiento de voz. Usa Chrome.'
      );
      return;
    }
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      showError('Tu navegador no permite acceso al micrófono.');
      return;
    }

    let stream;
    try {
      stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    } catch (err) {
      showError(
        'Permiso de micrófono denegado. Actívalo para usar Jarvis.'
      );
      return;
    }

    // Configura el análisis de audio para detectar palmadas.
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === 'suspended') await audioCtx.resume();

    micSource = audioCtx.createMediaStreamSource(stream);
    analyser = audioCtx.createAnalyser();
    analyser.fftSize = 1024;
    timeData = new Float32Array(analyser.fftSize);
    micSource.connect(analyser);

    // Prepara el reconocimiento de voz.
    recognition = buildRecognition();

    // Prepara la voz española (las voces pueden cargar de forma asíncrona).
    pickSpanishVoice();
    if ('speechSynthesis' in window) {
      window.speechSynthesis.onvoiceschanged = pickSpanishVoice;
    }

    app.dataset.running = 'true';
    setState(STATE.IDLE);
    detectLoop();
  }

  startBtn.addEventListener('click', start);

  // Mensaje inicial.
  setState(STATE.IDLE);
  statusEl.textContent = 'Pulsa "Activar micrófono" para empezar.';
})();
