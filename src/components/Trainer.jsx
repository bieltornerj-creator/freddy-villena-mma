'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Trainer() {
  const services = [
    {
      title: 'Entrenamiento Individual',
      price: '€50/hora',
      features: [
        'Sesión 1-a-1 personalizada',
        'Plan adaptado a tu nivel',
        'Técnica y acondicionamiento',
        'Horario flexible',
      ],
    },
    {
      title: 'Entrenamiento Grupal',
      price: '€25/sesión',
      features: [
        'Grupos pequeños (4-8 personas)',
        'Ambiente dinámico',
        'MMA, Boxeo, Jiu Jitsu',
        'Comunidad motivadora',
      ],
    },
  ]

  return (
    <section id="entrenador" className="section-container bg-black">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">ENTRENADOR</h2>
          <div className="section-divider" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="card-dark hover:border-cyan-400 transition-all hover:scale-105"
            >
              <h3 className="text-2xl font-bold text-cyan-400 mb-2">{service.title}</h3>
              <p className="text-3xl font-black text-white mb-6">{service.price}</p>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <span className="text-cyan-400 font-bold mt-1">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="#reservas"
                className="block text-center py-3 bg-cyan-400 text-black font-bold rounded-lg hover:bg-cyan-300 transition-colors"
              >
                Reservar Ahora
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12 p-6 bg-gray-900 rounded-lg border border-cyan-400/20 text-center"
        >
          <p className="text-gray-300 mb-4">
            📍 <span className="font-bold">BCN TEAM BARCELONA</span> - Rubí / Barcelona
          </p>
          <a
            href="tel:671478050"
            className="inline-block px-6 py-2 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition-colors"
          >
            Llamar: 671478050
          </a>
        </motion.div>
      </div>
    </section>
  )
}
