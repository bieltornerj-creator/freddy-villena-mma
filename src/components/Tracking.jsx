'use client'

import { useState } from 'react'

export default function Tracking() {
  const [trackingNumber, setTrackingNumber] = useState('')
  const [trackingInfo, setTrackingInfo] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleTracking = (e) => {
    e.preventDefault()
    if (!trackingNumber.trim()) {
      alert('Por favor ingresa un número de seguimiento')
      return
    }

    setLoading(true)
    setTimeout(() => {
      setTrackingInfo({
        number: trackingNumber,
        status: 'En tránsito',
        location: 'Centro de distribución Barcelona',
        date: new Date().toLocaleDateString('es-ES'),
        estimate: 'Entrega estimada en 2-3 días hábiles',
      })
      setLoading(false)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-black p-8">
      <div className="container-custom max-w-2xl">
        <h1 className="text-4xl font-bold text-cyan-400 mb-8 text-center">Seguimiento de Pedido</h1>

        <div className="card-dark mb-8">
          <form onSubmit={handleTracking} className="space-y-4">
            <div>
              <label className="block text-light font-semibold mb-2">
                Número de seguimiento
              </label>
              <input
                type="text"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                placeholder="Ej: STRIPE-12345678"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-cyan-400 text-black font-bold rounded-lg hover:bg-cyan-300 transition-colors disabled:opacity-50"
            >
              {loading ? 'Buscando...' : 'Rastrear Pedido'}
            </button>
          </form>
        </div>

        {trackingInfo && (
          <div className="card-dark">
            <h2 className="text-2xl font-bold text-cyan-400 mb-6">Estado del Pedido</h2>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Número:</span>
                <span className="text-light font-bold">{trackingInfo.number}</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-400">Estado:</span>
                <span className="px-4 py-2 bg-yellow-500/20 text-yellow-400 rounded-full font-bold">
                  {trackingInfo.status}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-400">Ubicación:</span>
                <span className="text-light font-bold">{trackingInfo.location}</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-400">Última actualización:</span>
                <span className="text-light">{trackingInfo.date}</span>
              </div>

              <div className="pt-4 border-t border-cyan-400/20">
                <p className="text-cyan-400 font-semibold">{trackingInfo.estimate}</p>
              </div>
            </div>

            {/* Timeline */}
            <div className="mt-8 space-y-4">
              <h3 className="text-cyan-400 font-bold mb-4">Historial</h3>
              <div className="space-y-3">
                <div className="flex gap-4">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <p className="text-light font-bold">Pedido procesado</p>
                    <p className="text-sm text-gray-400">Hace 2 horas</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <p className="text-light font-bold">En tránsito</p>
                    <p className="text-sm text-gray-400">Hace 1 hora</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-3 h-3 bg-gray-600 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <p className="text-gray-500">Entrega pendiente</p>
                    <p className="text-sm text-gray-500">En los próximos 2-3 días</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="mt-12 p-6 bg-blue-900/20 rounded-lg border border-blue-500/30">
          <p className="text-blue-400 text-sm">
            💡 Consejo: Guarda tu número de seguimiento para poder rastrear tu pedido en cualquier momento.
            Lo recibirás en tu email después de procesar el pago.
          </p>
        </div>
      </div>
    </div>
  )
}
