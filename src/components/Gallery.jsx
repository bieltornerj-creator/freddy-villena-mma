'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Gallery() {
  const images = [
    { id: 1, src: 'https://assets.cdn.filesafe.space/MyFJ6lhweMtzOUvBPwI3/media/69cfaa73fcf3f9acd761dc08.jpeg', alt: 'Freddy Villena' },
    { id: 2, src: 'https://images.unsplash.com/photo-1599812674872-30d1d313aae3?w=400&h=400&fit=crop', alt: 'Entrenamiento MMA 2' },
    { id: 3, src: 'https://images.unsplash.com/photo-1552281065-5fdde644a74b?w=400&h=400&fit=crop', alt: 'Entrenamiento MMA 3' },
    { id: 4, src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=400&fit=crop', alt: 'Entrenamiento MMA 4' },
    { id: 5, src: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=400&fit=crop', alt: 'Entrenamiento MMA 5' },
    { id: 6, src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=400&fit=crop', alt: 'Entrenamiento MMA 6' },
    { id: 7, src: 'https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?w=400&h=400&fit=crop', alt: 'Entrenamiento MMA 7' },
    { id: 8, src: 'https://images.unsplash.com/photo-1599812674872-30d1d313aae3?w=400&h=400&fit=crop', alt: 'Entrenamiento MMA 8' },
  ]

  const [hoveredId, setHoveredId] = useState(null)

  return (
    <section id="galeria" className="section-container bg-black">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">GALERÍA</h2>
          <div className="section-divider" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
        >
          {images.map((image, idx) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              onMouseEnter={() => setHoveredId(image.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="relative group overflow-hidden aspect-square cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <div className="text-white">
                  <p className="font-bold">Foto {image.id}</p>
                  <p className="text-sm text-gray-400">Click para ver</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
