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
      const targetDate = new Date('2026-04-18T10:00:00').getTime()
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setCountdown({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const CountdownBox = ({ value, label }) => (
    <motion.div
      className="flex flex-col items-center"
      whileHover={{ scale: 1.05 }}
    >
      <div className="w-20 h-20 md:w-28 md:h-28 bg-gradient-to-br from-ice to-cyan-600 rounded-lg flex items-center justify-center mb-2 shadow-lg shadow-ice/50">
        <span className="text-3xl md:text-5xl font-bold text-dark">{String(value).padStart(2, '0')}</span>
      </div>
      <span className="text-sm md:text-base text-ice font-semibold uppercase">{label}</span>
    </motion.div>
  )

  return (
    <section id="proxima-pelea" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">PRÓXIMO COMBATE</h2>
          <div className="section-divider" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Countdown */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <CountdownBox value={countdown.days} label="Días" />
              <CountdownBox value={countdown.hours} label="Horas" />
              <CountdownBox value={countdown.minutes} label="Minutos" />
              <CountdownBox value={countdown.seconds} label="Segundos" />
            </div>
          </motion.div>

          {/* Fight Details */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="border-l-4 border-ice pl-6">
              <h3 className="text-2xl font-bold text-light mb-2">Fecha</h3>
              <p className="text-xl text-ice">18 de Abril de 2026</p>
              <p className="text-sm text-gray-400">10:00 am - 17:00 pm</p>
            </div>

            <div className="border-l-4 border-ice pl-6">
              <h3 className="text-2xl font-bold text-light mb-2">Evento</h3>
              <p className="text-xl text-ice">Campeonato de Cataluña 2026</p>
            </div>

            <div className="border-l-4 border-ice pl-6">
              <h3 className="text-2xl font-bold text-light mb-2">Ubicación</h3>
              <p className="text-xl text-ice">Pabellón Olímpico La Mina</p>
              <p className="text-sm text-gray-400">Carrer d'Aristides Maillol, 1</p>
              <p className="text-sm text-gray-400">08930 Sant Adrià de Besòs, Barcelona</p>
            </div>

            <div className="border-l-4 border-ice pl-6">
              <h3 className="text-2xl font-bold text-light mb-2">Racha</h3>
              <p className="text-xl text-ice">6 Victorias Seguidas 🔥</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
