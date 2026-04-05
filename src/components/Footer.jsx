'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Footer() {
  const socialLinks = [
    { name: 'Instagram', url: 'https://www.instagram.com/Freddy_ice_boy', icon: '📷' },
    { name: 'TikTok', url: 'https://www.tiktok.com/@Freddy.villena85', icon: '🎵' },
    { name: 'WhatsApp', url: 'https://wa.me/34691313151', icon: '💬' },
    { name: 'Email', url: 'mailto:management@freddyvillena.com', icon: '✉️' },
  ]

  const links = [
    { name: 'Entrenador', href: '#entrenador' },
    { name: 'Reservas', href: '#reservas' },
    { name: 'Tienda', href: '#tienda' },
    { name: 'Sobre Mí', href: '#about' },
  ]

  return (
    <footer className="bg-black/95 py-4 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
      <div className="container-custom">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Copyright */}
          <div className="text-xs text-gray-500">
            &copy; 2026 Freddy Villena - ICE BOY
          </div>

          {/* Quick Links */}
          <div className="flex gap-4 text-xs text-gray-400">
            {links.map((link) => (
              <Link key={link.name} href={link.href} className="hover:text-red-500 transition-colors">
                {link.name}
              </Link>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-red-500 transition-colors text-sm"
                title={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
