'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Footer() {
  const socialLinks = [
    { name: 'Instagram', url: 'https://www.instagram.com/Freddy_ice_boy', icon: '📷' },
    { name: 'TikTok', url: 'https://www.tiktok.com/@Freddy.villena85', icon: '🎵' },
    { name: 'WhatsApp', url: 'https://wa.me/34671478050', icon: '💬' },
    { name: 'Email', url: 'mailto:management@freddyvillena.com', icon: '📧' },
  ]

  const links = [
    { name: 'Entrenador', href: '#entrenador' },
    { name: 'Reservas', href: '#reservas' },
    { name: 'Tienda', href: '#tienda' },
    { name: 'Sobre Mí', href: '#about' },
  ]

  return (
    <footer className="bg-gradient-to-t from-gray-900 to-black py-12 px-4 sm:px-6 lg:px-8 border-t border-ice/20">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-ice mb-2">❄️ ICE BOY</h3>
            <p className="text-gray-400">Freddy Villena</p>
            <p className="text-sm text-gray-500">Luchador Amateur MMA | Entrenador Profesional</p>
            <p className="text-sm text-gray-500">Record: 15-6 | Racha: 6 Victorias</p>
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
              {links.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover-ice">
                    {link.name}
                  </Link>
                </li>
              ))}
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
