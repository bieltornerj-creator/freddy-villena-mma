'use client'

import { motion } from 'framer-motion'

export default function Contact() {
  const email = 'management@freddyvillena.com'
  const phone1 = '671478050'
  const phone2 = '691313151'
  const instagram = 'https://www.instagram.com/Freddy_ice_boy'
  const tiktok = 'https://www.tiktok.com/@Freddy.villena85'

  return (
    <section id="contact" className="section-container bg-gray-900">
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

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          {/* Contact Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Email */}
            <div className="card-dark hover:border-cyan-400 transition-all">
              <h3 className="text-xl font-bold text-cyan-400 mb-3">📧 Email</h3>
              <a
                href={`mailto:${email}`}
                className="text-light hover:text-cyan-400 transition-colors break-all font-semibold"
              >
                {email}
              </a>
            </div>

            {/* Phones */}
            <div className="card-dark hover:border-cyan-400 transition-all">
              <h3 className="text-xl font-bold text-cyan-400 mb-3">📱 Teléfono</h3>
              <div className="space-y-2">
                <a href={`tel:${phone1}`} className="block text-light hover:text-cyan-400 transition-colors font-semibold">
                  {phone1}
                </a>
                <a href={`tel:${phone2}`} className="block text-light hover:text-cyan-400 transition-colors font-semibold">
                  {phone2}
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="card-dark hover:border-cyan-400 transition-all">
              <h3 className="text-xl font-bold text-cyan-400 mb-3">📍 Ubicación</h3>
              <p className="text-light font-semibold">Rubí / Barcelona, España</p>
              <p className="text-sm text-gray-400 mt-2">BCN TEAM BARCELONA</p>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Instagram */}
            <a
              href={instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="card-dark bg-gradient-to-br from-pink-600/10 to-purple-600/10 hover:border-cyan-400 hover:scale-105 transition-all block"
            >
              <h3 className="text-2xl font-bold text-cyan-400 mb-2">📷 Instagram</h3>
              <p className="text-light font-semibold">@Freddy_ice_boy</p>
              <p className="text-sm text-gray-400 mt-2">Sígueme para contenido diario</p>
            </a>

            {/* TikTok */}
            <a
              href={tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="card-dark bg-gradient-to-br from-gray-800 to-gray-900 hover:border-cyan-400 hover:scale-105 transition-all block"
            >
              <h3 className="text-2xl font-bold text-cyan-400 mb-2">🎵 TikTok</h3>
              <p className="text-light font-semibold">@Freddy.villena85</p>
              <p className="text-sm text-gray-400 mt-2">Entrenamientos y highlights</p>
            </a>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/34${phone1}`}
              target="_blank"
              rel="noopener noreferrer"
              className="card-dark bg-gradient-to-br from-green-600/10 to-emerald-600/10 hover:border-cyan-400 hover:scale-105 transition-all block"
            >
              <h3 className="text-2xl font-bold text-cyan-400 mb-2">💬 WhatsApp</h3>
              <p className="text-light font-semibold">{phone1}</p>
              <p className="text-sm text-gray-400 mt-2">Envía mensaje directo</p>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
