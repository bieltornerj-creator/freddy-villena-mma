'use client'

import { motion } from 'framer-motion'

export default function About() {
  const stats = [
    { label: 'Edad', value: '28' },
    { label: 'Peso', value: '77 kg' },
    { label: 'Altura', value: '1.78 m' },
    { label: 'Estilo', value: 'Striking' },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-ice text-center mb-4">SOBRE FREDDY</h2>
          <div className="w-20 h-1 bg-ice mx-auto mb-12" />
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
            <div className="aspect-square bg-gradient-to-br from-ice to-cyan-600 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?w=500&q=80"
                alt="Freddy Villena"
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
              Freddy Villena, conocido mundialmente como <span className="text-ice font-bold">ICE BOY</span>, es un
              luchador profesional de MMA con una pasión incomparable por el deporte. Con más de 10 años de experiencia
              en competiciones internacionales, ha demostrado ser un atleta versátil y determined.
            </p>

            <p className="text-lg text-light leading-relaxed">
              Su apodo "ICE BOY" viene de su capacidad para mantener la calma bajo presión en el octágono, combinado con
              su ofensiva letal y técnica impecable. Es el cazador de sueños, persiguiendo constantemente la excelencia
              y el campeonato.
            </p>

            <p className="text-lg text-light leading-relaxed">
              Entrena en <span className="text-ice font-bold">Barcelona Fighters Gym</span>, donde perfecciona su arte
              día a día junto a un equipo de élite.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  className="p-4 bg-gray-900 rounded-lg border border-ice/20"
                  whileHover={{ borderColor: '#00d4ff', backgroundColor: 'rgba(0, 212, 255, 0.05)' }}
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
