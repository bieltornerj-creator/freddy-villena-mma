'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'

export default function Admin() {
  const [reservas, setReservas] = useState([])
  const [loading, setLoading] = useState(true)
  const [password, setPassword] = useState('')
  const [authenticated, setAuthenticated] = useState(false)

  const ADMIN_PASSWORD = 'ice2024'

  useEffect(() => {
    if (authenticated) {
      loadReservas()
    }
  }, [authenticated])

  const loadReservas = async () => {
    try {
      const { data, error } = await supabase
        .from('reservas')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error
      setReservas(data || [])
    } catch (error) {
      console.error('Error loading reservas:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleLogin = (e) => {
    e.preventDefault()
    if (password === ADMIN_PASSWORD) {
      setAuthenticated(true)
      setPassword('')
    } else {
      alert('Contraseña incorrecta')
    }
  }

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-dark flex items-center justify-center p-4">
        <div className="bg-gray-900 p-8 rounded-lg border border-ice/20 max-w-md w-full">
          <h1 className="text-3xl font-bold text-ice mb-6 text-center">Admin Panel</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-light mb-2">Contraseña</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 bg-black border border-ice/20 rounded-lg text-light"
                placeholder="Ingresa la contraseña"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-ice text-dark font-bold rounded-lg hover:bg-cyan-400 transition-colors"
            >
              Iniciar Sesión
            </button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-dark p-8">
      <div className="container-custom">
        <h1 className="text-4xl font-bold text-ice mb-8">Admin Panel</h1>

        <div className="bg-gray-900 rounded-lg border border-ice/20 overflow-hidden">
          <div className="p-6 border-b border-ice/20">
            <h2 className="text-2xl font-bold text-light">Reservas ({reservas.length})</h2>
          </div>

          {loading ? (
            <div className="p-6 text-center text-gray-400">Cargando...</div>
          ) : reservas.length === 0 ? (
            <div className="p-6 text-center text-gray-400">No hay reservas aún</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-800">
                  <tr>
                    <th className="px-6 py-3 text-left text-ice font-bold">Nombre</th>
                    <th className="px-6 py-3 text-left text-ice font-bold">Email</th>
                    <th className="px-6 py-3 text-left text-ice font-bold">Teléfono</th>
                    <th className="px-6 py-3 text-left text-ice font-bold">Edad</th>
                    <th className="px-6 py-3 text-left text-ice font-bold">Arte Marcial</th>
                    <th className="px-6 py-3 text-left text-ice font-bold">Fecha</th>
                    <th className="px-6 py-3 text-left text-ice font-bold">Hora</th>
                    <th className="px-6 py-3 text-left text-ice font-bold">Estado</th>
                  </tr>
                </thead>
                <tbody>
                  {reservas.map((reserva) => (
                    <tr key={reserva.id} className="border-t border-gray-800 hover:bg-gray-800/50">
                      <td className="px-6 py-3 text-light">{reserva.nombre}</td>
                      <td className="px-6 py-3 text-light">{reserva.email}</td>
                      <td className="px-6 py-3 text-light">{reserva.telefono}</td>
                      <td className="px-6 py-3 text-light">{reserva.edad}</td>
                      <td className="px-6 py-3 text-ice font-bold">{reserva.arte_marcial}</td>
                      <td className="px-6 py-3 text-light">{reserva.fecha}</td>
                      <td className="px-6 py-3 text-light">{reserva.hora}</td>
                      <td className="px-6 py-3">
                        <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                          reserva.estado === 'confirmada'
                            ? 'bg-green-500/20 text-green-400'
                            : 'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {reserva.estado}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <button
          onClick={() => setAuthenticated(false)}
          className="mt-8 px-6 py-2 bg-red-600 hover:bg-red-700 text-light rounded-lg transition-colors"
        >
          Cerrar Sesión
        </button>
      </div>
    </div>
  )
}
