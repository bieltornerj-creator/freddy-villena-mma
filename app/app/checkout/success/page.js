'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useEffect } from 'react'

export default function SuccessPage() {
  useEffect(() => {
    // Confetti animation (opcional, puedes quitarlo)
    document.body.style.background = 'linear-gradient(135deg, #000 0%, #1a1a1a 100%)'
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 flex items-center justify-center px-4 pt-20">
      <motion.div
        className="text-center max-w-2xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Success Icon */}
        <motion.div
          className="mb-8"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
        >
          <div className="w-24 h-24 mx-auto bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg shadow-green-500/50">
            <span className="text-5xl">✓</span>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-light mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          ¡Gracias por tu compra!
        </motion.h1>

        {/* Message */}
        <motion.p
          className="text-xl text-gray-400 mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Tu pedido ha sido procesado exitosamente. Pronto recibirás un email de confirmación con los detalles de tu compra y seguimiento del envío.
        </motion.p>

        {/* Details Box */}
        <motion.div
          className="bg-gradient-to-b from-gray-900 to-gray-800 rounded-lg border border-ice/20 p-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="space-y-4">
            <div>
              <p className="text-gray-500 text-sm">Número de Pedido</p>
              <p className="text-ice text-lg font-bold">#{Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Producto</p>
              <p className="text-light">Camiseta Manga corta PERSONALIZADA Full Print 360º</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Estado</p>
              <p className="text-green-400 font-semibold">✓ Pago Confirmado</p>
            </div>
          </div>
        </motion.div>

        {/* Info Box */}
        <motion.div
          className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <p className="text-light mb-2">📧 Revisa tu email</p>
          <p className="text-gray-400 text-sm">
            Te hemos enviado un email con la confirmación del pedido y el número de seguimiento. Si no lo ves en los próximos minutos, revisa tu carpeta de spam.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <Link
            href="/"
            className="px-8 py-4 bg-ice text-dark font-bold rounded-lg hover:bg-cyan-400 transition-colors inline-block"
          >
            Volver al Inicio
          </Link>
          <Link
            href="/#tienda"
            className="px-8 py-4 bg-gray-800 text-light font-bold rounded-lg hover:bg-gray-700 transition-colors inline-block border border-gray-700"
          >
            Seguir Comprando
          </Link>
        </motion.div>

        {/* Footer Message */}
        <motion.p
          className="text-gray-500 text-sm mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          ¿Preguntas? Contacta a{' '}
          <a href="mailto:management@freddyvillena.com" className="text-ice hover:underline">
            management@freddyvillena.com
          </a>
        </motion.p>
      </motion.div>
    </div>
  )
}
