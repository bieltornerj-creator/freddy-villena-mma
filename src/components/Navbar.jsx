'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Entrenador', href: '#entrenador' },
    { name: 'Reservas', href: '#reservas' },
    { name: 'Próxima Pelea', href: '#proxima-pelea' },
    { name: 'Peleas', href: '#peleas' },
    { name: 'Tienda', href: '#tienda' },
    { name: 'Sobre Mí', href: '#about' },
    { name: 'Galería', href: '#galeria' },
    { name: 'Contacto', href: '#contact' },
  ]

  return (
    <nav className="fixed top-0 w-full bg-black/95 backdrop-blur border-b border-cyan-400/20 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-cyan-400 hover:text-cyan-300 transition">
            ❄️ ICE BOY
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white hover:text-cyan-400 transition-colors font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-cyan-400 hover:text-cyan-300"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-gray-900 border-t border-cyan-400/20"
            >
              <div className="flex flex-col gap-4 p-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-white hover:text-cyan-400 transition-colors font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
