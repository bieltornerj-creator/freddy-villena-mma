'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <section className="pt-16 min-h-screen bg-gradient-to-b from-black via-gray-900 to-black flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400 rounded-full mix-blend-screen filter blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl animate-pulse" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-black text-white">
            FREDDY VILLENA
            <br />
            <span className="text-cyan-400">ICE BOY</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto">
            Luchador Amateur de MMA • Entrenador Profesional • Record 15-6 • Racha 6 Victorias
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <Link
              href="#reservas"
              className="px-8 py-4 bg-cyan-400 text-black font-bold rounded-lg hover:bg-cyan-300 transition-all hover:scale-105"
            >
              Reservar Clase
            </Link>
            <Link
              href="#tienda"
              className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-lg hover:bg-cyan-400/10 transition-all"
            >
              Ir a Tienda
            </Link>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="pt-12 animate-bounce"
          >
            <svg className="w-6 h-6 text-cyan-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
