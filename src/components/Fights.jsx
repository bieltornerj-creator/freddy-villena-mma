'use client'

import { motion } from 'framer-motion'

export default function Fights() {
  const videos = [
    {
      id: 1,
      title: 'AFL 37 - Vs Juan Carlos Postigo',
      embed: 'https://www.youtube.com/embed/1MWijGtpM1k',
    },
    {
      id: 2,
      title: 'WOW 28 - Vs David Santana',
      embed: 'https://www.youtube.com/embed/vVTl4JTu1AE',
    },
  ]

  return (
    <section id="peleas" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">ÚLTIMAS PELEAS</h2>
          <div className="section-divider" />
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          {videos.map((video, idx) => (
            <motion.div
              key={video.id}
              className="card-dark"
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
                <h3 className="text-lg font-bold text-light hover:text-ice transition-colors">
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
