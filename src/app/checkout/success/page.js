'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useState, Suspense } from 'react'
import Link from 'next/link'

function CheckoutSuccessContent() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id')
  const [orderData, setOrderData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (sessionId) {
      fetch(`/api/orders?sessionId=${sessionId}`)
        .then((res) => res.json())
        .then((data) => {
          setOrderData(data.data)
          setLoading(false)
        })
        .catch(() => setLoading(false))
    }
  }, [sessionId])

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="text-center max-w-2xl">
        <div className="mb-8">
          <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl">✓</span>
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-4">¡Pago Completado!</h1>

        <p className="text-gray-400 text-lg mb-8">
          Gracias por tu compra. Pronto recibirás un email con los detalles de tu pedido.
        </p>

        {orderData && (
          <div className="bg-gray-900 rounded-lg border border-cyan-400/20 p-6 mb-8">
            <h2 className="text-cyan-400 font-bold mb-4">Detalles del Pedido</h2>
            <div className="space-y-2 text-left">
              <p className="text-gray-400">
                <span className="font-bold">Número de Sesión:</span> {sessionId}
              </p>
              {orderData && (
                <>
                  <p className="text-gray-400">
                    <span className="font-bold">Talla:</span> {orderData.size}
                  </p>
                  <p className="text-gray-400">
                    <span className="font-bold">Cantidad:</span> {orderData.quantity}
                  </p>
                  <p className="text-gray-400">
                    <span className="font-bold">Email:</span> {orderData.email}
                  </p>
                  <p className="text-gray-400">
                    <span className="font-bold">Estado:</span> {orderData.status}
                  </p>
                </>
              )}
            </div>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-8 py-3 bg-cyan-400 text-black font-bold rounded-lg hover:bg-cyan-300 transition-colors"
          >
            Volver al Inicio
          </Link>
          <a
            href="mailto:management@freddyvillena.com"
            className="px-8 py-3 bg-gray-800 text-cyan-400 font-bold rounded-lg hover:bg-gray-700 transition-colors"
          >
            Contactar Soporte
          </a>
        </div>
      </div>
    </div>
  )
}

export default function CheckoutSuccess() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-black flex items-center justify-center">
          <p className="text-cyan-400">Cargando...</p>
        </div>
      }
    >
      <CheckoutSuccessContent />
    </Suspense>
  )
}
