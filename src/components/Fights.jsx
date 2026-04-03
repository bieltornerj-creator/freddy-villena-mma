'use client'

import { motion } from 'framer-motion'

export default function Fights() {
  const fights = [
    {
      title: 'AFL 37',
      opponent: 'Juan Carlos Postigo',
      result: 'VICTORIA',
      date: '2024',
      videoId: 'dQw4w9WgXcQ',
    },
    {
      title: 'WOW 28',
      opponent: 'David Santana',
      result: 'VICTORIA',
      date: '2024',
      videoId: 'dQw4w9WgXcQ',
    },
  ]

  return (
    <section id="peleas" className="section-container bg-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">PELEAS</h2>
          <div className="section-divider" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {fights.map((fight, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="card-dark overflow-hidden hover:border-cyan-400 transition-all"
            >
              <div className="relative">
                <iframe
                  width="100%"
                  height="300"
                  src={`https://www.youtube.com/embed/${fight.videoId}`}
                  title={fight.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                />
                <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full font-bold text-sm">
                  {fight.result}
                </div>
              </div>

              <div className="pt-4">
                <h3 className="text-xl font-bold text-cyan-400 mb-2">{fight.title}</h3>
                <p className="text-gray-400 mb-2">vs <span className="text-white font-bold">{fight.opponent}</span></p>
                <p className="text-sm text-gray-500">{fight.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
