'use client'

import { motion } from 'framer-motion'

export default function Sponsors() {
  const sponsors = [
    {
      id: 1,
      name: 'Sponsor 1',
      logo: 'https://via.placeholder.com/150x80?text=Sponsor+1',
    },
    {
      id: 2,
      name: 'Sponsor 2',
      logo: 'https://via.placeholder.com/150x80?text=Sponsor+2',
    },
    {
      id: 3,
      name: 'Sponsor 3',
      logo: 'https://via.placeholder.com/150x80?text=Sponsor+3',
    },
    {
      id: 4,
      name: 'Sponsor 4',
      logo: 'https://via.placeholder.com/150x80?text=Sponsor+4',
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-ice text-center mb-4">SPONSORS</h2>
          <div className="w-20 h-1 bg-ice mx-auto mb-12" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center">
          {sponsors.map((sponsor, idx) => (
            <motion.div
              key={sponsor.id}
              className="flex items-center justify-center p-6 bg-gray-900 rounded-lg border border-ice/20 hover:border-ice transition-colors cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <img src={sponsor.logo} alt={sponsor.name} className="max-w-full h-16 object-contain" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
