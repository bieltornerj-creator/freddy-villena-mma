'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden mt-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?w=1200&q=80)',
          filter: 'brightness(0.3)',
        }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-6xl md:text-8xl font-bold text-light mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          FREDDY VILLENA
        </motion.h1>

        <motion.div
          className="text-3xl md:text-5xl text-ice font-bold mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          ICE BOY
        </motion.div>

        <motion.p
          className="text-xl md:text-2xl text-light mb-8 font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          El Cazador de Sueños
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <Link
            href="#shop"
            className="inline-block px-8 py-4 bg-ice text-dark font-bold text-lg rounded-lg hover:bg-cyan-400 transition-colors hover:shadow-lg hover:shadow-ice/50"
          >
            Ir a Tienda
          </Link>
        </motion.div>
      </motion.div>

      {/* Animated Border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-ice to-transparent" />
    </section>
  )
}
