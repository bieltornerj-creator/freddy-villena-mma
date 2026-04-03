'use client'

import { motion } from 'framer-motion'

export default function Gallery() {
  const images = [
    {
      id: 1,
      url: 'https://assets.cdn.filesafe.space/MyFJ6lhweMtzOUvBPwI3/media/69cfaa8c31ee04b3700c451d.jpeg',
      alt: 'Freddy en el octágono',
    },
    {
      id: 2,
      url: 'https://assets.cdn.filesafe.space/MyFJ6lhweMtzOUvBPwI3/media/69cfaa734cde4bbc2a75d818.jpeg',
      alt: 'Combate épico',
    },
    {
      id: 3,
      url: 'https://assets.cdn.filesafe.space/MyFJ6lhweMtzOUvBPwI3/media/69cfaa73799acb29acdae1a7.jpeg',
      alt: 'Freddy en acción',
    },
    {
      id: 4,
      url: 'https://assets.cdn.filesafe.space/MyFJ6lhweMtzOUvBPwI3/media/69cfaa73799acb29acdae193.jpeg',
      alt: 'Preparación',
    },
    {
      id: 5,
      url: 'https://assets.cdn.filesafe.space/MyFJ6lhweMtzOUvBPwI3/media/69cfaa73fcf3f9acd761dc08.jpeg',
      alt: 'Entrenamiento',
    },
    {
      id: 6,
      url: 'https://assets.cdn.filesafe.space/MyFJ6lhweMtzOUvBPwI3/media/69cfaa7331ee04b3700c4298.jpeg',
      alt: 'ICE BOY',
    },
    {
      id: 7,
      url: 'https://assets.cdn.filesafe.space/MyFJ6lhweMtzOUvBPwI3/media/69cfaa73c905d18811afca18.jpeg',
      alt: 'Lucha',
    },
    {
      id: 8,
      url: 'https://assets.cdn.filesafe.space/MyFJ6lhweMtzOUvBPwI3/media/69cfaa73a7dcb4cff054f48c.jpeg',
      alt: 'Combate',
    },
  ]

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-ice text-center mb-4">GALERÍA</h2>
          <div className="w-20 h-1 bg-ice mx-auto mb-12" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((image, idx) => (
            <motion.div
              key={image.id}
              className="relative overflow-hidden rounded-lg h-64 group cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:brightness-75 transition-all duration-300"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                <p className="text-light font-semibold p-4 text-sm">{image.alt}</p>
              </div>

              <div className="absolute top-4 right-4 w-8 h-8 bg-ice rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-dark font-bold">+</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
