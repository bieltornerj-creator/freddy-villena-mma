'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  const socialLinks = [
    { name: 'Instagram', url: 'https://instagram.com', icon: '📱' },
    { name: 'YouTube', url: 'https://youtube.com', icon: '🎥' },
    { name: 'TikTok', url: 'https://tiktok.com', icon: '✨' },
    { name: 'Twitter', url: 'https://twitter.com', icon: '𝕏' },
  ]

  return (
    <footer className="bg-gradient-to-t from-gray-900 to-black py-12 px-4 sm:px-6 lg:px-8 border-t border-ice/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-ice mb-2">ICE BOY</h3>
            <p className="text-gray-400">Freddy Villena - El Cazador de Sueños</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-ice font-bold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#record" className="hover:text-ice transition-colors">
                  Récord
                </a>
              </li>
              <li>
                <a href="#next-fight" className="hover:text-ice transition-colors">
                  Próximo Combate
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-ice transition-colors">
                  Sobre Mí
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-ice transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-ice font-bold mb-4">Sígueme</h4>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center text-lg hover:bg-ice hover:text-dark transition-colors"
                  title={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-ice/20 my-8" />

        {/* Bottom */}
        <motion.div
          className="text-center text-gray-500 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p>&copy; 2024 Freddy Villena - ICE BOY. Todos los derechos reservados.</p>
          <p className="mt-2">Designed & Built for Champions</p>
        </motion.div>
      </div>
    </footer>
  )
}
