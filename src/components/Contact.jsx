'use client'

import { motion } from 'framer-motion'

export default function Contact() {
  const email = 'management@freddyvillena.com'
  const phoneMain = '691313151'
  const phoneSupport = '671478050'

  return (
    <section id="contact" className="section-container bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title text-black">CONTACTO</h2>
          <div className="section-divider bg-red-600" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto mt-12"
        >
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Email */}
              <motion.div
                whileHover={{ x: 5 }}
                className="border-l-4 border-red-600 pl-6 py-2"
              >
                <p className="text-gray-600 text-xs font-bold uppercase tracking-wide mb-2">Email</p>
                <a
                  href={`mailto:${email}`}
                  className="text-gray-900 font-semibold text-lg hover:text-red-600 transition-colors break-all"
                >
                  {email}
                </a>
              </motion.div>

              {/* Phone Principal */}
              <motion.div
                whileHover={{ x: 5 }}
                className="border-l-4 border-red-600 pl-6 py-2"
              >
                <p className="text-gray-600 text-xs font-bold uppercase tracking-wide mb-2">Teléfono Principal</p>
                <div className="space-y-3">
                  <a
                    href={`tel:${phoneMain}`}
                    className="block text-gray-900 font-semibold text-lg hover:text-red-600 transition-colors"
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
              </motion.div>

              {/* Location */}
              <motion.div
                whileHover={{ x: 5 }}
                className="border-l-4 border-red-600 pl-6 py-2"
              >
                <p className="text-gray-600 text-xs font-bold uppercase tracking-wide mb-2">Ubicación</p>
                <p className="text-gray-900 font-semibold text-lg">Rubí, Barcelona, España</p>
              </motion.div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Support Phone */}
              <motion.div
                whileHover={{ x: 5 }}
                className="border-l-4 border-red-600 pl-6 py-2"
              >
                <p className="text-gray-600 text-xs font-bold uppercase tracking-wide mb-2">Teléfono de Soporte</p>
                <a
                  href={`tel:${phoneSupport}`}
                  className="text-gray-900 font-semibold text-lg hover:text-red-600 transition-colors"
                >
                  +34 {phoneSupport}
                </a>
              </motion.div>

              {/* Social Networks */}
              <motion.div
                whileHover={{ x: 5 }}
                className="border-l-4 border-red-600 pl-6 py-2"
              >
                <p className="text-gray-600 text-xs font-bold uppercase tracking-wide mb-4">Redes Sociales</p>
                <div className="space-y-3">
                  <a
                    href="https://www.instagram.com/Freddy_ice_boy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-gray-900 font-semibold hover:text-red-600 transition-colors"
                  >
                    Instagram: @Freddy_ice_boy
                  </a>
                  <a
                    href="https://www.tiktok.com/@Freddy.villena85"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-gray-900 font-semibold hover:text-red-600 transition-colors"
                  >
                    TikTok: @Freddy.villena85
                  </a>
                </div>
              </motion.div>

              {/* Hours */}
              <motion.div
                whileHover={{ x: 5 }}
                className="border-l-4 border-red-600 pl-6 py-2"
              >
                <p className="text-gray-600 text-xs font-bold uppercase tracking-wide mb-2">Horario de Atención</p>
                <p className="text-gray-900 font-semibold">Lunes a Viernes: 9:00 - 20:00</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
