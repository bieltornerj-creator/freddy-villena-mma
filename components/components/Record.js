'use client'

import { motion } from 'framer-motion'

export default function Record() {
  const fights = [
    {
      id: 1,
      rival: 'Juan Carlos Postigo',
      evento: 'AFL 37',
      resultado: 'Victoria',
      método: 'Decisión',
      round: '3',
      fecha: '2024-12-20',
      video: 'https://youtu.be/1MWijGtpM1k',
    },
    {
      id: 2,
      rival: 'David Santana',
      evento: 'WOW 28',
      resultado: 'Victoria',
      método: 'Decisión',
      round: '3',
      fecha: '2024-11-15',
      video: 'https://youtu.be/vVTl4JTu1AE',
    },
    {
      id: 3,
      rival: 'Por definir',
      evento: 'Evento amateur',
      resultado: 'Victoria',
      método: 'Decisión',
      round: '3',
      fecha: '2024-10-20',
    },
  ]

  const resultadoColor = (resultado) => {
    return resultado === 'Victoria' ? 'text-green-400' : 'text-red-400'
  }

  return (
    <section id="record" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-ice text-center mb-4">RÉCORD</h2>
          <div className="w-20 h-1 bg-ice mx-auto mb-12" />
        </motion.div>

        <motion.div
          className="overflow-x-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-ice">
                <th className="text-left py-4 px-4 text-ice font-bold">Rival</th>
                <th className="text-left py-4 px-4 text-ice font-bold">Evento</th>
                <th className="text-center py-4 px-4 text-ice font-bold">Resultado</th>
                <th className="text-left py-4 px-4 text-ice font-bold">Método</th>
                <th className="text-center py-4 px-4 text-ice font-bold">Round</th>
                <th className="text-left py-4 px-4 text-ice font-bold">Fecha</th>
              </tr>
            </thead>
            <tbody>
              {fights.map((fight, idx) => (
                <motion.tr
                  key={fight.id}
                  className="border-b border-gray-800 hover:bg-gray-800/30 transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <td className="py-4 px-4 text-light">{fight.rival}</td>
                  <td className="py-4 px-4 text-light">{fight.evento}</td>
                  <td className={`py-4 px-4 text-center font-bold ${resultadoColor(fight.resultado)}`}>
                    {fight.resultado}
                  </td>
                  <td className="py-4 px-4 text-light">{fight.método}</td>
                  <td className="py-4 px-4 text-center text-light">{fight.round}</td>
                  <td className="py-4 px-4 text-light">{fight.fecha}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  )
}
