'use client'

import { motion } from 'framer-motion'

export default function Fights() {
  const fights = [
    {
      title: 'AFL 37',
      opponent: 'Mike Arena',
      result: 'DERROTA',
      date: '2024',
      videoId: '1MWijGtpM1k',
    },
    {
      title: 'WOW 28',
      opponent: 'David Santana',
      result: 'VICTORIA',
      date: '2024',
      videoId: 'vVTl4JTu1AE',
    },
  ]

  return (
    <section id="peleas" className="section-container bg-black">
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

        <div className="grid md:grid-cols-2 gap-4 mt-8">
          {fights.map((fight, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="card-dark overflow-hidden hover:border-red-600 transition-all"
            >
              <div className="relative">
                {fight.image ? (
                  <img
                    src={fight.image}
                    alt={fight.title}
                    className="w-full h-48 object-cover"
                  />
                ) : (
                  <iframe
                    width="100%"
                    height="300"
                    src={`https://www.youtube.com/embed/${fight.videoId}`}
                    title={fight.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                )}
                <div className={`absolute top-4 right-4 px-4 py-2 font-bold text-sm ${
                  fight.result === 'VICTORIA'
                    ? 'bg-green-500 text-black'
                    : 'bg-red-500 text-white'
                }`}>
                  {fight.result}
                </div>
              </div>

              <div className="pt-4">
                <h3 className="text-xl font-bold text-red-600 mb-2">{fight.title}</h3>
                <p className="text-gray-500 mb-2">vs <span className="text-white font-bold">{fight.opponent}</span></p>
                <p className="text-sm text-gray-600">{fight.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
