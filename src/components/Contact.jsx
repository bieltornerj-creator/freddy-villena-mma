'use client'

import { motion } from 'framer-motion'

export default function Contact() {
  const email = 'management@freddyvillena.com'
  const phoneMain = '691313151'
  const phoneSupport = '671478050'

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-black text-black mb-2">CONTACTO</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-8 md:gap-12"
        >
          {/* Left Column */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xs font-bold text-gray-700 uppercase mb-1">Email</h3>
              <a
                href={`mailto:${email}`}
                className="text-gray-900 hover:text-red-600 transition-colors"
              >
                {email}
              </a>
            </div>

            <div>
              <h3 className="text-xs font-bold text-gray-700 uppercase mb-1">Teléfono Principal</h3>
              <a
                href={`tel:${phoneMain}`}
                className="block text-gray-900 hover:text-red-600 transition-colors mb-2"
              >
                +34 {phoneMain}
              </a>
              <a
                href={`https://wa.me/34${phoneMain}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 hover:text-red-700 transition-colors text-sm font-semibold"
              >
                WhatsApp
              </a>
            </div>

            <div>
              <h3 className="text-xs font-bold text-gray-700 uppercase mb-1">Ubicación</h3>
              <p className="text-gray-900">Rubí, Barcelona, España</p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xs font-bold text-gray-700 uppercase mb-1">Teléfono de Soporte</h3>
              <a
                href={`tel:${phoneSupport}`}
                className="text-gray-900 hover:text-red-600 transition-colors"
              >
                +34 {phoneSupport}
              </a>
            </div>

            <div>
              <h3 className="text-xs font-bold text-gray-700 uppercase mb-1">Instagram</h3>
              <a
                href="https://www.instagram.com/Freddy_ice_boy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 hover:text-red-600 transition-colors"
              >
                Instagram
              </a>
            </div>

            <div>
              <h3 className="text-xs font-bold text-gray-700 uppercase mb-1">TikTok</h3>
              <a
                href="https://www.tiktok.com/@Freddy.villena85"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 hover:text-red-600 transition-colors"
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
