'use client'

import { motion } from 'framer-motion'

export default function About() {
  const stats = [
    { label: 'Edad', value: '22' },
    { label: 'Peso', value: '68-70 kg' },
    { label: 'Altura', value: '1.71 m' },
    { label: 'Record', value: '15-6' },
    { label: 'Racha', value: '6V' },
    { label: 'Gimnasio', value: 'BCN TEAM' },
  ]

  return (
    <section id="about" className="section-container bg-gradient-to-b from-black to-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">SOBRE FREDDY</h2>
          <div className="section-divider" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="aspect-square bg-gradient-to-br from-ice to-cyan-600 rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://assets.cdn.filesafe.space/MyFJ6lhweMtzOUvBPwI3/media/69cfaa73799acb29acdae1a7.jpeg"
                alt="Freddy Villena ICE BOY"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-ice rounded-lg blur-3xl opacity-20" />
          </motion.div>

          {/* Bio */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg text-light leading-relaxed">
              Freddy Villena, conocido como <span className="text-ice font-bold">ICE BOY</span>, es un luchador amateur de MMA
              y entrenador profesional con una pasión incomparable por el deporte. Con un récord de <span className="text-ice font-bold">15-6</span> y
              actualmente en una racha de <span className="text-ice font-bold">6 victorias seguidas</span>.
            </p>

            <p className="text-lg text-light leading-relaxed">
              Su apodo "ICE BOY" viene de su capacidad para mantener la calma bajo presión en el octágono, combinado con
              su ofensiva versátil y técnica impecable. Es el cazador de sueños, persiguiendo constantemente la excelencia
              y el campeonato en la categoría amateur.
            </p>

            <p className="text-lg text-light leading-relaxed">
              Entrena en <span className="text-ice font-bold">BCN TEAM BARCELONA</span>, en Rubí/Barcelona, donde perfecciona su arte
              día a día junto a un equipo de élite. También ofrece entrenamiento profesional a otros atletas.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  className="p-4 bg-gray-900 rounded-lg border border-ice/20 hover:border-ice hover:bg-gray-900/80 transition-all"
                  whileHover={{ scale: 1.05 }}
                >
                  <p className="text-sm text-gray-400 mb-1">{stat.label}</p>
                  <p className="text-2xl font-bold text-ice">{stat.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
