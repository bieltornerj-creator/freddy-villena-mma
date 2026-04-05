'use client'

import { motion } from 'framer-motion'

export default function Contact() {
  const email = 'management@freddyvillena.com'
  const phoneMain = '691313151'
  const phoneSupport = '671478050'

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-black mb-4">CONTACTO</h2>
          <p className="text-gray-600 text-lg">Ponte en contacto directo conmigo</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          {/* Email */}
          <div className="pb-8 border-b border-gray-200">
            <p className="text-sm font-bold text-gray-600 uppercase mb-3">Email</p>
            <a
              href={`mailto:${email}`}
              className="text-2xl text-gray-900 hover:text-red-600 transition-colors font-semibold"
            >
              {email}
            </a>
          </div>

          {/* Phone */}
          <div className="pb-8 border-b border-gray-200">
            <p className="text-sm font-bold text-gray-600 uppercase mb-3">Teléfono</p>
            <div className="space-y-4">
              <a
                href={`tel:${phoneMain}`}
                className="block text-2xl text-gray-900 hover:text-red-600 transition-colors font-semibold"
              >
                +34 {phoneMain}
              </a>
              <a
                href={`https://wa.me/34${phoneMain}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-red-600 text-white text-sm font-bold rounded hover:bg-red-700 transition-colors"
              >
                Enviar WhatsApp
              </a>
            </div>
          </div>

          {/* Support */}
          <div className="pb-8 border-b border-gray-200">
            <p className="text-sm font-bold text-gray-600 uppercase mb-3">Soporte</p>
            <a
              href={`tel:${phoneSupport}`}
              className="text-2xl text-gray-900 hover:text-red-600 transition-colors font-semibold"
            >
              +34 {phoneSupport}
            </a>
          </div>

          {/* Location */}
          <div className="pb-8 border-b border-gray-200">
            <p className="text-sm font-bold text-gray-600 uppercase mb-3">Ubicación</p>
            <p className="text-2xl text-gray-900 font-semibold">Rubí, Barcelona, España</p>
          </div>

          {/* Social */}
          <div>
            <p className="text-sm font-bold text-gray-600 uppercase mb-4">Sígueme</p>
            <div className="flex gap-6">
              <a
                href="https://www.instagram.com/Freddy_ice_boy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 hover:text-red-600 transition-colors font-semibold"
              >
                Instagram
              </a>
              <a
                href="https://www.tiktok.com/@Freddy.villena85"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 hover:text-red-600 transition-colors font-semibold"
              >
                TikTok
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
