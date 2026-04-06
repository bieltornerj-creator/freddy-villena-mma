'use client'

import { motion } from 'framer-motion'

export default function About() {
  const stats = [
    { label: 'Record', value: '15-6' },
    { label: 'Racha', value: '6V' },
  ]

  return (
    <section id="about" className="section-container bg-white py-8">
      <div className="container-custom max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">SOBRE MÍ</h2>
          <div className="section-divider" />
        </motion.div>

        <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto space-y-4"
          >
            <div>
              <h3 className="text-2xl font-bold text-red-600 mb-3">FREDDY VILLENA</h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                Luchador amateur de MMA apasionado por el deporte. Entrenador personal dedicado a ayudar a otros a alcanzar su máximo potencial.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-4">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="text-center"
                >
                  <p className="text-3xl font-black text-red-600 mb-1">{stat.value}</p>
                  <p className="text-gray-700 text-xs uppercase">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
