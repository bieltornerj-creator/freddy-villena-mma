'use client'

import { motion } from 'framer-motion'

export default function About() {
  const stats = [
    { label: 'Edad', value: '22 años' },
    { label: 'Peso', value: '68-70 kg' },
    { label: 'Altura', value: '1.71 m' },
    { label: 'Record', value: '15-6' },
    { label: 'Racha', value: '6 Victorias' },
    { label: 'Gimnasio', value: 'BCN TEAM' },
  ]

  return (
    <section id="about" className="section-container bg-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">SOBRE MÍ</h2>
          <div className="section-divider" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mt-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-lg overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?w=600&h=600&fit=crop"
              alt="Freddy Villena"
              className="w-full h-full object-cover rounded-lg"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-3xl font-bold text-cyan-400 mb-4">FREDDY VILLENA</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Luchador amateur de MMA con pasión por el deporte. Entrenar no es solo mi profesión, es mi vida.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Desde BCN TEAM BARCELONA, me dedico a ayudar a otros a alcanzar su máximo potencial en el octágono y en la vida.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-cyan-400/20">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="p-4 bg-black rounded-lg border border-cyan-400/20"
                >
                  <p className="text-gray-400 text-sm mb-1">{stat.label}</p>
                  <p className="text-xl font-bold text-cyan-400">{stat.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
