'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { name: 'Entrenador', href: '#entrenador' },
    { name: 'Reservas', href: '#reservas' },
    { name: 'Próxima Pelea', href: '#next-fight' },
    { name: 'Highlights', href: '#highlights' },
    { name: 'Sobre Mí', href: '#about' },
    { name: 'Galería', href: '#gallery' },
    { name: 'Contacto', href: '#contact' },
  ]

  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md border-b border-ice/20 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="#" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-ice">ICE BOY</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-light hover:text-ice transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-ice"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block text-sm font-semibold text-light hover:text-ice transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
