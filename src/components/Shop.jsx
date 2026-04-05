'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

export default function Shop() {
  const router = useRouter()
  const [currentImageIdx, setCurrentImageIdx] = useState(0)
  const [size, setSize] = useState('M')
  const [quantity, setQuantity] = useState(1)
  const [loading, setLoading] = useState(false)

  const images = [
    'https://assets.cdn.filesafe.space/MyFJ6lhweMtzOUvBPwI3/media/69cfb733fa2dde9742f23ef6.png',
    'https://assets.cdn.filesafe.space/MyFJ6lhweMtzOUvBPwI3/media/69cfb733d0e88a4b7f9eb217.png',
  ]

  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL']

  const handleCheckout = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ size, quantity }),
      })

      const data = await response.json()

      if (data.url) {
        router.push(data.url)
      } else {
        alert('Error al procesar el pago')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Error al procesar el pago')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="tienda" className="section-container bg-black">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">TIENDA</h2>
          <div className="section-divider" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto mt-8 card-dark"
        >
          <div className="grid md:grid-cols-2 gap-6">
            {/* Image Carousel */}
            <div className="space-y-3">
              <div className="relative bg-gray-900 rounded overflow-hidden aspect-square">
                <img
                  src={images[currentImageIdx]}
                  alt="Camiseta ICE BOY"
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setCurrentImageIdx((p) => (p - 1 + images.length) % images.length)}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-red-600 text-white text-sm flex items-center justify-center hover:bg-red-700 transition"
                >
                  ←
                </button>
                <button
                  onClick={() => setCurrentImageIdx((p) => (p + 1) % images.length)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-red-600 text-white text-sm flex items-center justify-center hover:bg-red-700 transition"
                >
                  →
                </button>
              </div>

              <div className="flex gap-2">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIdx(idx)}
                    className={`w-12 h-12 overflow-hidden border transition ${
                      idx === currentImageIdx ? 'border-red-600' : 'border-gray-700'
                    }`}
                  >
                    <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-bold text-white mb-1">
                  Camiseta Manga Corta<br />PERSONALIZADA Full Print
                </h3>
                <p className="text-gray-500 text-sm">Multideporte - Comodidad Premium</p>
              </div>

              <div className="border-t border-gray-800 pt-4">
                <p className="text-gray-600 text-xs mb-1">PRECIO</p>
                <p className="text-3xl font-black text-red-600">€35,50</p>
              </div>

              {/* Size */}
              <div>
                <label className="block text-gray-300 text-sm font-bold mb-2">Talla</label>
                <div className="grid grid-cols-3 gap-2">
                  {sizes.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSize(s)}
                      className={`py-1 text-sm font-bold transition ${
                        size === s
                          ? 'bg-red-600 text-white'
                          : 'bg-gray-900 text-gray-300 hover:bg-gray-800'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <label className="block text-gray-300 text-sm font-bold mb-2">Cantidad</label>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-8 h-8 bg-gray-900 text-gray-300 hover:bg-gray-800 transition text-sm"
                  >
                    −
                  </button>
                  <span className="text-xl font-bold text-white w-8 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-8 h-8 bg-gray-900 text-gray-300 hover:bg-gray-800 transition text-sm"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                disabled={loading}
                className="w-full py-2 bg-red-600 text-white font-bold hover:bg-red-700 transition-colors disabled:opacity-50 text-sm"
              >
                {loading ? 'Procesando...' : 'Comprar'}
              </button>

              <div className="space-y-1 text-xs text-gray-600">
                <p>✓ Pago Seguro con Stripe</p>
                <p>✓ Envío a toda España</p>
                <p>✓ Devolución garantizada</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
