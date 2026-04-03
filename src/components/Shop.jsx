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
    'https://assets.cdn.filesafe.space/freddy-villena-camiseta-front.jpg',
    'https://assets.cdn.filesafe.space/freddy-villena-camiseta-back.jpg',
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
          className="max-w-3xl mx-auto mt-12 card-dark"
        >
          <div className="grid md:grid-cols-2 gap-8">
            {/* Image Carousel */}
            <div className="space-y-4">
              <div className="relative bg-gray-800 rounded-lg overflow-hidden aspect-square">
                <img
                  src={images[currentImageIdx]}
                  alt="Camiseta ICE BOY"
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setCurrentImageIdx((p) => (p - 1 + images.length) % images.length)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-cyan-400 text-black rounded-full flex items-center justify-center hover:bg-cyan-300 transition"
                >
                  ←
                </button>
                <button
                  onClick={() => setCurrentImageIdx((p) => (p + 1) % images.length)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-cyan-400 text-black rounded-full flex items-center justify-center hover:bg-cyan-300 transition"
                >
                  →
                </button>
              </div>

              <div className="flex gap-2">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIdx(idx)}
                    className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition ${
                      idx === currentImageIdx ? 'border-cyan-400' : 'border-gray-700'
                    }`}
                  >
                    <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Camiseta Manga corta<br />PERSONALIZADA Full Print 360º
                </h3>
                <p className="text-gray-400">Multideporte - Comodidad Premium</p>
              </div>

              <div className="border-t border-cyan-400/20 pt-6">
                <p className="text-gray-400 mb-2">PRECIO</p>
                <p className="text-4xl font-black text-cyan-400">€35,50</p>
              </div>

              {/* Size */}
              <div>
                <label className="block text-light font-semibold mb-3">Talla</label>
                <div className="grid grid-cols-3 gap-2">
                  {sizes.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSize(s)}
                      className={`py-2 rounded-lg font-bold transition ${
                        size === s
                          ? 'bg-cyan-400 text-black'
                          : 'bg-gray-800 text-white hover:bg-gray-700'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <label className="block text-light font-semibold mb-3">Cantidad</label>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
                  >
                    −
                  </button>
                  <span className="text-2xl font-bold text-white w-12 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                disabled={loading}
                className="w-full py-4 bg-cyan-400 text-black font-bold rounded-lg hover:bg-cyan-300 transition-colors disabled:opacity-50"
              >
                {loading ? 'Procesando...' : 'Comprar Ahora'}
              </button>

              <div className="space-y-2 text-xs text-gray-400">
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
