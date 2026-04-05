'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { supabase } from '@/lib/supabase'

const getTomorrowDate = () => {
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  return tomorrow.toISOString().split('T')[0]
}

export default function Booking() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    edad: '',
    arte_marcial: 'MMA',
    fecha: getTomorrowDate(),
    hora: '10:00',
  })

  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setMessage('')

    try {
      const { error: supabaseError } = await supabase.from('reservas').insert([formData])

      if (supabaseError) throw supabaseError

      setMessage('¡Reserva confirmada! Te contactaremos pronto.')
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        edad: '',
        arte_marcial: 'MMA',
        fecha: getTomorrowDate(),
        hora: '10:00',
      })
    } catch (err) {
      setError('Error al guardar la reserva. Intenta de nuevo.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="reservas" className="section-container bg-black">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">RESERVAR CLASE</h2>
          <div className="section-divider" />
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto mt-8 card-dark space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-300 font-semibold mb-2">Nombre</label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label className="block text-gray-300 font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="tu@email.com"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-300 font-semibold mb-2">Teléfono</label>
              <input
                type="tel"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                required
                placeholder="691313151"
              />
            </div>
            <div>
              <label className="block text-gray-300 font-semibold mb-2">Edad</label>
              <input
                type="number"
                name="edad"
                value={formData.edad}
                onChange={handleChange}
                required
                min="16"
                placeholder="18"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block text-gray-300 font-semibold mb-2">Arte Marcial</label>
              <select name="arte_marcial" value={formData.arte_marcial} onChange={handleChange}>
                <option>MMA</option>
                <option>Boxeo</option>
                <option>Jiu Jitsu</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-300 font-semibold mb-2">Fecha</label>
              <input type="date" name="fecha" value={formData.fecha} onChange={handleChange} required />
            </div>
            <div>
              <label className="block text-gray-300 font-semibold mb-2">Hora</label>
              <input type="time" name="hora" value={formData.hora} onChange={handleChange} required />
            </div>
          </div>

          {error && <div className="p-3 bg-red-500/20 text-red-400 rounded">{error}</div>}
          {message && <div className="p-3 bg-green-500/20 text-green-400 rounded">{message}</div>}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-red-600 text-white font-bold hover:bg-red-700 transition-colors disabled:opacity-50"
          >
            {loading ? 'Guardando...' : 'Confirmar Reserva'}
          </button>

          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-500 mb-4 text-sm">¿Tienes dudas? Contacta directamente:</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="tel:691313151" className="flex-1 py-2 px-4 bg-red-600 text-white hover:bg-red-700 text-center font-semibold transition text-sm">
                Llamar
              </a>
              <a href="https://wa.me/34691313151" target="_blank" rel="noopener noreferrer" className="flex-1 py-2 px-4 bg-red-600 text-white hover:bg-red-700 text-center font-semibold transition text-sm">
                WhatsApp
              </a>
              <a href="mailto:management@freddyvillena.com" className="flex-1 py-2 px-4 bg-gray-800 text-gray-300 hover:bg-gray-700 text-center font-semibold transition text-sm">
                Email
              </a>
            </div>
          </div>
        </motion.form>
      </div>
    </section>
  )
}
