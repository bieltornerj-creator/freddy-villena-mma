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

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #2d1015 50%, #1a1a1a 100%)' }}>
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 80% 50%, rgba(230, 57, 70, 0.2) 0%, transparent 50%)' }} />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-70" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-black text-white">
            FREDDY VILLENA
            <br />
            <span className="text-red-500">ICE BOY</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg md:text-2xl text-white max-w-2xl mx-auto font-semibold">
            Luchador Amateur de MMA • Entrenador Personal • Record 15-6 • Racha 6 Victorias
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <button
              onClick={handleScrollToTop}
              className="px-8 py-4 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-all hover:scale-105"
            >
              Inicio
            </button>
            <Link
              href="/entrenamientos"
              className="px-8 py-4 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-all hover:scale-105"
            >
              Reservar Clase
            </Link>
            <Link
              href="/tienda"
              className="px-8 py-4 border-2 border-red-500 text-red-500 font-bold rounded-lg hover:bg-red-500/10 transition-all"
            >
              Ir a Tienda
            </Link>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="pt-12 animate-bounce"
          >
            <svg className="w-6 h-6 text-red-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
