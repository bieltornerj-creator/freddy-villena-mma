'use client'

import { motion } from 'framer-motion'

export default function Contact() {
  const email = 'management@freddyvillena.com'
  const phoneMain = '691313151'
  const phoneSupport = '671478050'

  return (
    <section id="contact" className="section-container bg-black">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">CONTACTO</h2>
          <div className="section-divider" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto mt-12"
        >
          <div className="grid md:grid-cols-2 gap-12">
            {/* Column 1 */}
            <div className="space-y-8">
              {/* Email */}
              <div>
                <p className="text-gray-500 text-xs font-bold uppercase mb-2">Email</p>
                <a
                  href={`mailto:${email}`}
                  className="text-gray-300 hover:text-red-500 transition-colors"
                >
                  {email}
                </a>
              </div>

              {/* Teléfono Principal */}
              <div>
                <p className="text-gray-500 text-xs font-bold uppercase mb-2">Teléfono Principal</p>
                <div className="flex gap-3 items-center flex-wrap">
                  <a
                    href={`tel:${phoneMain}`}
                    className="text-gray-300 hover:text-red-500 transition-colors"
                  >
                    +34 {phoneMain}
                  </a>
                  <a
                    href={`https://wa.me/34${phoneMain}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Column 2 */}
            <div className="space-y-8">
              {/* Ubicación */}
              <div>
                <p className="text-gray-500 text-xs font-bold uppercase mb-2">Ubicación</p>
                <p className="text-gray-300">Rubí, Barcelona, España</p>
              </div>

              {/* Teléfono de Apoyo */}
              <div>
                <p className="text-gray-500 text-xs font-bold uppercase mb-2">Teléfono de Apoyo</p>
                <a
                  href={`tel:${phoneSupport}`}
                  className="text-gray-300 hover:text-red-500 transition-colors"
                >
                  +34 {phoneSupport}
                </a>
              </div>

              {/* Social Media */}
              <div>
                <p className="text-gray-500 text-xs font-bold uppercase mb-2">Síguenos</p>
                <div className="flex gap-4">
                  <a
                    href="https://www.instagram.com/Freddy_ice_boy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-red-500 transition-colors"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://www.tiktok.com/@Freddy.villena85"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-red-500 transition-colors"
                  >
                    TikTok
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
