'use client'

import { motion } from 'framer-motion'

export default function Highlights() {
  const videos = [
    {
      id: 1,
      title: 'KO en Primera Ronda',
      embed: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
    {
      id: 2,
      title: 'Sumisión Épica',
      embed: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
    {
      id: 3,
      title: 'Mejores Momentos 2024',
      embed: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
    {
      id: 4,
      title: 'Entrenamiento en Gimnasio',
      embed: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
  ]

  return (
    <section id="highlights" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-ice text-center mb-4">HIGHLIGHTS</h2>
          <div className="w-20 h-1 bg-ice mx-auto mb-12" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video, idx) => (
            <motion.div
              key={video.id}
              className="relative bg-gray-900 rounded-lg overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="aspect-video bg-black relative">
                <iframe
                  src={video.embed}
                  title={video.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-4 border-t-2 border-ice">
                <h3 className="text-lg font-bold text-light group-hover:text-ice transition-colors">
                  {video.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
