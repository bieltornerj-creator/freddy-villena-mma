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
          <div className="grid md:grid-cols-3 gap-6">
            {/* Email Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-red-50 to-white rounded-lg p-6 border border-red-200"
            >
              <p className="text-3xl mb-3">📧</p>
              <p className="text-gray-700 text-xs font-bold uppercase mb-3">Email</p>
              <a
                href={`mailto:${email}`}
                className="text-red-600 font-semibold hover:text-red-700 transition-colors break-all"
              >
                {email}
              </a>
            </motion.div>

            {/* Phone Main Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-red-50 to-white rounded-lg p-6 border border-red-200"
            >
              <p className="text-3xl mb-3">📱</p>
              <p className="text-gray-700 text-xs font-bold uppercase mb-3">Teléfono Principal</p>
              <div className="space-y-2">
                <a
                  href={`tel:${phoneMain}`}
                  className="block text-red-600 font-semibold hover:text-red-700 transition-colors"
                >
                  +34 {phoneMain}
                </a>
                <a
                  href={`https://wa.me/34${phoneMain}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-3 py-1 bg-red-600 text-white text-xs font-bold rounded hover:bg-red-700 transition-colors"
                >
                  WhatsApp
                </a>
              </div>
            </motion.div>

            {/* Location Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-red-50 to-white rounded-lg p-6 border border-red-200"
            >
              <p className="text-3xl mb-3">📍</p>
              <p className="text-gray-700 text-xs font-bold uppercase mb-3">Ubicación</p>
              <p className="text-red-600 font-semibold">Rubí, Barcelona, España</p>
            </motion.div>

            {/* Support Phone Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-red-50 to-white rounded-lg p-6 border border-red-200"
            >
              <p className="text-3xl mb-3">☎️</p>
              <p className="text-gray-700 text-xs font-bold uppercase mb-3">Soporte</p>
              <a
                href={`tel:${phoneSupport}`}
                className="text-red-600 font-semibold hover:text-red-700 transition-colors"
              >
                +34 {phoneSupport}
              </a>
            </motion.div>

            {/* Instagram Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-red-50 to-white rounded-lg p-6 border border-red-200"
            >
              <p className="text-3xl mb-3">📸</p>
              <p className="text-gray-700 text-xs font-bold uppercase mb-3">Instagram</p>
              <a
                href="https://www.instagram.com/Freddy_ice_boy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 font-semibold hover:text-red-700 transition-colors"
              >
                @Freddy_ice_boy
              </a>
            </motion.div>

            {/* TikTok Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-red-50 to-white rounded-lg p-6 border border-red-200"
            >
              <p className="text-3xl mb-3">🎵</p>
              <p className="text-gray-700 text-xs font-bold uppercase mb-3">TikTok</p>
              <a
                href="https://www.tiktok.com/@Freddy.villena85"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 font-semibold hover:text-red-700 transition-colors"
              >
                @Freddy.villena85
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
