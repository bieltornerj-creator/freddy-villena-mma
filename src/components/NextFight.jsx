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

  const CountdownBox = ({ value, label }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center"
    >
      <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-lg flex items-center justify-center border-2 border-cyan-400/50 mb-2">
        <span className="text-3xl md:text-5xl font-black text-cyan-400">{String(value).padStart(2, '0')}</span>
      </div>
      <span className="text-sm md:text-base font-bold text-gray-400 uppercase">{label}</span>
    </motion.div>
  )

  return (
    <section id="proxima-pelea" className="section-container bg-black">
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
          className="mt-12 card-dark max-w-3xl mx-auto text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-4">
            Campeonato de Cataluña 🏆
          </h3>
          <p className="text-gray-400 mb-8">
            📍 Pabellón Olímpico La Mina - Barcelona
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <CountdownBox value={countdown.days} label="Días" />
            <CountdownBox value={countdown.hours} label="Horas" />
            <CountdownBox value={countdown.minutes} label="Minutos" />
            <CountdownBox value={countdown.seconds} label="Segundos" />
          </div>

          <div className="border-t border-cyan-400/20 pt-8">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <p className="text-gray-400 text-sm mb-2">RACHA</p>
                <p className="text-4xl font-black text-cyan-400">6</p>
                <p className="text-gray-500 text-xs">Victorias</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-2">RECORD</p>
                <p className="text-4xl font-black text-cyan-400">15-6</p>
                <p className="text-gray-500 text-xs">Ganadas-Perdidas</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-2">ESTADO</p>
                <p className="text-4xl font-black text-cyan-400">LISTO</p>
                <p className="text-gray-500 text-xs">Para Pelear</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
