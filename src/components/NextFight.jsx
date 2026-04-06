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

  return (
    <section className="bg-white py-12 relative overflow-hidden" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1599812674872-30d1d313aae3?w=1200&h=800&fit=crop)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-black mb-2">PRÓXIMA PELEA</h1>
          <h2 className="text-xl md:text-2xl font-bold text-red-500 mb-2">
            Campeonato de Cataluña 2026
          </h2>
          <p className="text-sm md:text-base text-gray-300">
            📍 Pabellón Olímpico La Mina - Barcelona
          </p>
        </motion.div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6 bg-black/30 backdrop-blur rounded-lg p-6 border border-red-600/30"
        >
          <div className="flex justify-center items-center gap-3 md:gap-4 flex-wrap">
            <div className="text-center min-w-fit">
              <div className="text-3xl md:text-4xl font-black text-red-500 leading-none">{String(countdown.days).padStart(2, '0')}</div>
              <div className="text-xs text-gray-300 mt-1 uppercase font-semibold">D</div>
            </div>
            <div className="text-2xl text-red-500 font-black">:</div>
            <div className="text-center min-w-fit">
              <div className="text-3xl md:text-4xl font-black text-red-500 leading-none">{String(countdown.hours).padStart(2, '0')}</div>
              <div className="text-xs text-gray-300 mt-1 uppercase font-semibold">H</div>
            </div>
            <div className="text-2xl text-red-500 font-black">:</div>
            <div className="text-center min-w-fit">
              <div className="text-3xl md:text-4xl font-black text-red-500 leading-none">{String(countdown.minutes).padStart(2, '0')}</div>
              <div className="text-xs text-gray-300 mt-1 uppercase font-semibold">M</div>
            </div>
            <div className="text-2xl text-red-500 font-black">:</div>
            <div className="text-center min-w-fit">
              <div className="text-3xl md:text-4xl font-black text-red-500 leading-none">{String(countdown.seconds).padStart(2, '0')}</div>
              <div className="text-xs text-gray-300 mt-1 uppercase font-semibold">S</div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.a
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          href="https://twtmma.com/events/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-red-600 text-white font-bold rounded hover:bg-red-700 transition-colors"
        >
          COMPRAR ENTRADAS
        </motion.a>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 grid grid-cols-3 gap-3 md:gap-4"
        >
          <div className="bg-black/40 backdrop-blur rounded p-3 md:p-4 border border-gray-600/30">
            <p className="text-gray-400 text-xs uppercase mb-1">Racha</p>
            <p className="text-2xl md:text-3xl font-black text-red-500">6</p>
            <p className="text-gray-300 text-xs">Victorias</p>
          </div>
          <div className="bg-black/40 backdrop-blur rounded p-3 md:p-4 border border-gray-600/30">
            <p className="text-gray-400 text-xs uppercase mb-1">Record</p>
            <p className="text-2xl md:text-3xl font-black text-red-500">15-6</p>
            <p className="text-gray-300 text-xs">G-P</p>
          </div>
          <div className="bg-black/40 backdrop-blur rounded p-3 md:p-4 border border-gray-600/30">
            <p className="text-gray-400 text-xs uppercase mb-1">Estado</p>
            <p className="text-2xl md:text-3xl font-black text-red-500">LISTO</p>
            <p className="text-gray-300 text-xs">Pelear</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
