'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://assets.cdn.filesafe.space/MyFJ6lhweMtzOUvBPwI3/media/69cfaa8c31ee04b3700c451d.jpeg)',
          filter: 'brightness(0.35)',
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/80" />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-6xl md:text-8xl font-bold text-light mb-4 leading-tight"
          variants={itemVariants}
        >
          FREDDY VILLENA
        </motion.h1>

        <motion.div
          className="text-3xl md:text-5xl text-ice font-bold mb-6"
          variants={itemVariants}
        >
          ICE BOY
        </motion.div>

        <motion.p
          className="text-xl md:text-2xl text-light mb-8 font-light"
          variants={itemVariants}
        >
          El Cazador de Sueños
        </motion.p>

        <motion.div
          className="flex gap-4 justify-center flex-wrap"
          variants={itemVariants}
        >
          <Link
            href="#reservas"
            className="btn-ice"
          >
            Reservar Clase
          </Link>
          <Link
            href="#tienda"
            className="px-8 py-4 border-2 border-ice text-ice font-bold text-lg rounded-lg hover:bg-ice hover:text-dark transition-colors"
          >
            Ir a Tienda
          </Link>
        </motion.div>
      </motion.div>

      {/* Animated Border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-ice to-transparent" />

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="text-ice text-xl">⬇️</div>
      </motion.div>
    </section>
  )
}
