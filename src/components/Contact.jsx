'use client'

import { motion } from 'framer-motion'

export default function Contact() {
  const email = 'management@freddyvillena.com'
  const phoneMain = '691313151'
  const phoneSupport = '671478050'

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">CONTACTO</h2>
          <p className="text-gray-600 text-lg">Ponte en contacto conmigo para reservas, entrenamientos o cualquier consulta.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          <div>
            <h3 className="text-sm font-bold text-gray-700 uppercase mb-2">Email</h3>
            <a
              href={`mailto:${email}`}
              className="text-lg text-gray-900 hover:text-red-600 transition-colors"
            >
              {email}
            </a>
          </div>

          <div>
            <h3 className="text-sm font-bold text-gray-700 uppercase mb-2">Teléfono Principal</h3>
            <div className="space-y-2">
              <a
                href={`tel:${phoneMain}`}
                className="block text-lg text-gray-900 hover:text-red-600 transition-colors"
              >
                +34 {phoneMain}
              </a>
              <a
                href={`https://wa.me/34${phoneMain}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-red-600 hover:text-red-700 transition-colors font-semibold"
              >
                WhatsApp
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-gray-700 uppercase mb-2">Teléfono de Soporte</h3>
            <a
              href={`tel:${phoneSupport}`}
              className="text-lg text-gray-900 hover:text-red-600 transition-colors"
            >
              +34 {phoneSupport}
            </a>
          </div>

          <div>
            <h3 className="text-sm font-bold text-gray-700 uppercase mb-2">Ubicación</h3>
            <p className="text-lg text-gray-900">Rubí, Barcelona, España</p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-gray-700 uppercase mb-2">Redes Sociales</h3>
            <div className="space-y-2">
              <a
                href="https://www.instagram.com/Freddy_ice_boy"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-900 hover:text-red-600 transition-colors"
              >
                Instagram: @Freddy_ice_boy
              </a>
              <a
                href="https://www.tiktok.com/@Freddy.villena85"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-900 hover:text-red-600 transition-colors"
              >
                TikTok: @Freddy.villena85
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
