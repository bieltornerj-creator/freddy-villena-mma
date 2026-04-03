'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { supabase } from '@/lib/supabase'

export default function Booking() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    edad: '',
    arte_marcial: 'MMA',
    fecha: '',
    hora: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const { data, error: supabaseError } = await supabase
        .from('reservas')
        .insert([
          {
            nombre: formData.nombre,
            email: formData.email,
            telefono: formData.telefono,
            edad: parseInt(formData.edad),
            arte_marcial: formData.arte_marcial,
            fecha: formData.fecha,
            hora: formData.hora,
            estado: 'pendiente',
          },
        ])

      if (supabaseError) {
        throw supabaseError
      }

      setSubmitted(true)
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        edad: '',
        arte_marcial: 'MMA',
        fecha: '',
        hora: '',
      })
      setTimeout(() => setSubmitted(false), 4000)
    } catch (err) {
      setError(err.message || 'Error al guardar la reserva')
      console.error('Error:', err)
    } finally {
      setLoading(false)
    }
  }

  const getTomorrowDate = () => {
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    return tomorrow.toISOString().split('T')[0]
  }

  return (
    <section id="reservas" className="section-container bg-black">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">RESERVA TU CLASE</h2>
          <div className="section-divider" />
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6 bg-gray-900 p-8 rounded-lg border border-ice/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Nombre */}
          <div>
            <label className="block text-sm font-semibold text-ice mb-2">Nombre Completo *</label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
              placeholder="Tu nombre"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-ice mb-2">Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="tu@email.com"
            />
          </div>

          {/* Teléfono */}
          <div>
            <label className="block text-sm font-semibold text-ice mb-2">Teléfono *</label>
            <input
              type="tel"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              required
              placeholder="671478050"
            />
          </div>

          {/* Edad */}
          <div>
            <label className="block text-sm font-semibold text-ice mb-2">Edad *</label>
            <input
              type="number"
              name="edad"
              value={formData.edad}
              onChange={handleChange}
              required
              min="16"
              max="100"
              placeholder="25"
            />
          </div>

          {/* Arte Marcial */}
          <div>
            <label className="block text-sm font-semibold text-ice mb-2">Arte Marcial *</label>
            <select
              name="arte_marcial"
              value={formData.arte_marcial}
              onChange={handleChange}
              required
            >
              <option value="MMA">MMA</option>
              <option value="Boxeo">Boxeo</option>
              <option value="Jiu Jitsu">Jiu Jitsu</option>
            </select>
          </div>

          {/* Fecha */}
          <div>
            <label className="block text-sm font-semibold text-ice mb-2">Fecha Deseada *</label>
            <input
              type="date"
              name="fecha"
              value={formData.fecha}
              onChange={handleChange}
              required
              min={getTomorrowDate()}
            />
          </div>

          {/* Hora */}
          <div>
            <label className="block text-sm font-semibold text-ice mb-2">Hora Preferida *</label>
            <input
              type="time"
              name="hora"
              value={formData.hora}
              onChange={handleChange}
              required
            />
          </div>

          {/* Error Message */}
          {error && (
            <motion.div
              className="p-4 bg-red-900/20 border border-red-500 rounded-lg text-red-400 text-center"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              ❌ {error}
            </motion.div>
          )}

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-ice text-dark font-bold text-lg rounded-lg hover:bg-cyan-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            whileHover={{ scale: loading ? 1 : 1.02 }}
            whileTap={{ scale: loading ? 1 : 0.98 }}
          >
            {loading ? 'Guardando...' : 'Reservar Clase'}
          </motion.button>

          {/* Success Message */}
          {submitted && (
            <motion.div
              className="p-4 bg-green-900/20 border border-green-500 rounded-lg text-green-400 text-center"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              ✓ ¡Reserva guardada! Te contactaré pronto para confirmar.
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
