'use client'

import { motion } from 'framer-motion'

export default function Fights() {
  const videos = [
    {
      id: 1,
      title: 'AFL 37 - Vs Juan Carlos Postigo',
      embed: 'https://www.youtube.com/embed/1MWijGtpM1k',
      date: '20 Dic 2024',
      resultado: 'VICTORIA',
    },
    {
      id: 2,
      title: 'WOW 28 - Vs David Santana',
      embed: 'https://www.youtube.com/embed/vVTl4JTu1AE',
      date: '15 Nov 2024',
      resultado: 'VICTORIA',
    },
  ]

  return (
    <section id="peleas" className="section-container bg-gradient-to-b from-gray-900 to-black">
      <div className="container-custom">
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
              className="card-dark overflow-hidden"
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
                <div className="absolute top-4 right-4 bg-green-500 text-dark px-4 py-2 rounded-lg font-bold text-sm">
                  {video.resultado}
                </div>
              </div>
              <div className="p-6 border-t-2 border-ice">
                <h3 className="text-lg font-bold text-light mb-2 hover:text-ice transition-colors">
                  {video.title}
                </h3>
                <p className="text-sm text-gray-400">{video.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
