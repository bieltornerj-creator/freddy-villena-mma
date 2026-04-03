'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Trainer() {
  const services = [
    {
      id: 1,
      name: 'Clases Individuales',
      price: '€50',
      duration: '/hora',
      description: 'Entrenamiento personalizado 1 a 1 adaptado a tus objetivos',
      features: ['Técnica personalizada', 'Plan de entrenamiento', 'Asesoramiento profesional', 'Correcciones en vivo'],
      icon: '💪',
    },
    {
      id: 2,
      name: 'Clases Grupales',
      price: '€25',
      duration: '/sesión',
      description: 'Entrenamiento en grupo (máximo 4 personas)',
      features: ['Ambiente motivador', 'Técnica de grupo', 'Camaradería', 'Mejor precio'],
      icon: '👥',
      maxPeople: 4,
    },
  ]

  return (
    <section id="entrenador" className="section-container bg-gradient-to-b from-black to-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">ENTRENADOR</h2>
          <p className="text-center text-gray-400 text-lg mb-4">Clases profesionales de MMA</p>
          <div className="section-divider" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              className="card-dark"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="p-8">
                <div className="text-5xl mb-4">{service.icon}</div>

                <h3 className="text-3xl font-bold text-ice mb-2">{service.name}</h3>

                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-bold text-light">{service.price}</span>
                  <span className="text-gray-400">{service.duration}</span>
                </div>

                <p className="text-gray-400 mb-6">{service.description}</p>

                {service.maxPeople && (
                  <p className="text-sm text-ice mb-6 font-semibold">Máximo {service.maxPeople} personas</p>
                )}

                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="text-light flex items-center gap-2">
                      <span className="text-ice">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href="#reservas"
                  className="inline-block w-full py-3 bg-ice text-dark font-bold rounded-lg hover:bg-cyan-400 transition-colors text-center"
                >
                  Reservar Clase
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 p-8 bg-gray-900 rounded-lg border border-ice/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-ice mb-4">📍 Dónde nos encontramos</h3>
          <p className="text-light mb-2">
            <span className="text-ice font-bold">BCN TEAM BARCELONA</span>
          </p>
          <p className="text-gray-400">Rubí / Barcelona, España</p>
          <p className="text-gray-400 mt-4 text-sm">Contacta para conocer los horarios disponibles y agendar tu clase</p>
        </motion.div>
      </div>
    </section>
  )
}
