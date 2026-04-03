'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'individual',
    date: '',
    time: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Enviar por email usando mailto
    const subject = 'Nueva Reserva de Clase - Freddy Villena'
    const body = `
Nombre: ${formData.name}
Email: ${formData.email}
Teléfono: ${formData.phone}
Servicio: ${formData.service === 'individual' ? 'Clase Individual (€50/hora)' : 'Clase Grupal (€25/sesión)'}
Fecha: ${formData.date}
Hora: ${formData.time}
    `
    window.location.href = `mailto:management@freddyvillena.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    setSubmitted(true)
    setFormData({ name: '', email: '', phone: '', service: 'individual', date: '', time: '' })
    setTimeout(() => setSubmitted(false), 3000)
  }

  const getTomorrowDate = () => {
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    return tomorrow.toISOString().split('T')[0]
  }

  return (
    <section id="reservas" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-ice text-center mb-4">RESERVA TU CLASE</h2>
          <div className="w-20 h-1 bg-ice mx-auto mb-12" />
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6 bg-gray-900 p-8 rounded-lg border border-ice/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Name */}
          <div>
            <label className="block text-sm font-semibold text-ice mb-2">Nombre Completo</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-light placeholder-gray-500 focus:outline-none focus:border-ice transition-colors"
              placeholder="Tu nombre"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-ice mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-light placeholder-gray-500 focus:outline-none focus:border-ice transition-colors"
              placeholder="tu@email.com"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-semibold text-ice mb-2">Teléfono</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-light placeholder-gray-500 focus:outline-none focus:border-ice transition-colors"
              placeholder="671478050"
            />
          </div>

          {/* Service */}
          <div>
            <label className="block text-sm font-semibold text-ice mb-2">Tipo de Clase</label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-light focus:outline-none focus:border-ice transition-colors"
            >
              <option value="individual">Clase Individual - €50/hora</option>
              <option value="grupal">Clase Grupal - €25/sesión (máx 4 personas)</option>
            </select>
          </div>

          {/* Date */}
          <div>
            <label className="block text-sm font-semibold text-ice mb-2">Fecha Deseada</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              min={getTomorrowDate()}
              className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-light focus:outline-none focus:border-ice transition-colors"
            />
          </div>

          {/* Time */}
          <div>
            <label className="block text-sm font-semibold text-ice mb-2">Hora Preferida</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-light focus:outline-none focus:border-ice transition-colors"
            />
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            className="w-full py-4 bg-ice text-dark font-bold text-lg rounded-lg hover:bg-cyan-400 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Enviar Reserva
          </motion.button>

          {/* Success Message */}
          {submitted && (
            <motion.div
              className="p-4 bg-green-900/20 border border-green-500 rounded-lg text-green-400 text-center"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              ✓ ¡Reserva enviada! Te contactaré pronto para confirmar.
            </motion.div>
          )}
        </motion.form>

        <motion.div
          className="mt-8 p-6 bg-gray-900 rounded-lg border border-ice/20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="text-gray-400 mb-4">¿Prefieres contactar directamente?</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="tel:671478050"
              className="px-6 py-2 bg-green-600 hover:bg-green-700 text-light rounded-lg transition-colors font-semibold"
            >
              📞 Llamar
            </a>
            <a
              href="https://wa.me/34671478050"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-green-500 hover:bg-green-600 text-light rounded-lg transition-colors font-semibold"
            >
              💬 WhatsApp
            </a>
            <a
              href="mailto:management@freddyvillena.com"
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-light rounded-lg transition-colors font-semibold"
            >
              📧 Email
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
