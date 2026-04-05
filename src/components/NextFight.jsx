'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function NextFight() {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      const target = new Date('2026-04-18T10:00:00').getTime()
      const now = new Date().getTime()
      const distance = target - now

      setCountdown({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const CountdownItem = ({ value, label }) => (
    <div className="text-center">
      <div className="text-5xl md:text-6xl font-black text-red-600 leading-none">{String(value).padStart(2, '0')}</div>
      <div className="text-xs text-gray-600 mt-1 uppercase font-semibold">{label}</div>
    </div>
  )

  return (
    <section id="proxima-pelea" className="section-container bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">PRÓXIMA PELEA</h2>
          <div className="section-divider" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12 bg-gray-50 rounded-lg p-8 max-w-3xl mx-auto text-center border border-gray-200"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-red-600 mb-4">
            Campeonato de Cataluña 2026
          </h3>
          <p className="text-gray-700 mb-4">
            📍 Pabellón Olímpico La Mina - Barcelona
          </p>

          <a
            href="https://twtmma.com/events/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mb-8 px-6 py-2 bg-red-600 text-white font-bold hover:bg-red-700 transition-colors"
          >
            Comprar Entradas
          </a>

          <div className="flex justify-center items-center gap-4 md:gap-6 mb-12 flex-wrap">
            <CountdownItem value={countdown.days} label="Días" />
            <div className="text-4xl md:text-5xl text-red-600 font-black">:</div>
            <CountdownItem value={countdown.hours} label="Horas" />
            <div className="text-4xl md:text-5xl text-red-600 font-black">:</div>
            <CountdownItem value={countdown.minutes} label="Minutos" />
            <div className="text-4xl md:text-5xl text-red-600 font-black">:</div>
            <CountdownItem value={countdown.seconds} label="Segundos" />
          </div>

          <div className="border-t border-gray-200 pt-8">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <p className="text-gray-700 text-sm mb-2">RACHA</p>
                <p className="text-4xl font-black text-red-600">6</p>
                <p className="text-gray-600 text-xs">Victorias</p>
              </div>
              <div>
                <p className="text-gray-700 text-sm mb-2">RECORD</p>
                <p className="text-4xl font-black text-red-600">15-6</p>
                <p className="text-gray-600 text-xs">Ganadas-Perdidas</p>
              </div>
              <div>
                <p className="text-gray-700 text-sm mb-2">ESTADO</p>
                <p className="text-4xl font-black text-red-600">LISTO</p>
                <p className="text-gray-600 text-xs">Para Pelear</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
