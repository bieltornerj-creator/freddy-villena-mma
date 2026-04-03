'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { getStripe } from '@/lib/stripe'

export default function Shop() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [selectedSize, setSelectedSize] = useState('M')
  const [quantity, setQuantity] = useState(1)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const product = {
    id: 1,
    name: 'Camiseta Manga corta PERSONALIZADA Full Print 360º Multideporte',
    description: 'Camiseta manga corta personalizada con diseño full print 360º. Ideal para multideporte. Impresión de alta calidad.',
    price: '€35,50',
    priceInCents: 3550,
    images: [
      {
        url: 'https://assets.cdn.filesafe.space/MyFJ6lhweMtzOUvBPwI3/media/69cfb733fa2dde9742f23ef6.png',
        label: 'Delante',
      },
      {
        url: 'https://assets.cdn.filesafe.space/MyFJ6lhweMtzOUvBPwI3/media/69cfb733d0e88a4b7f9eb217.png',
        label: 'Detrás',
      },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    specs: [
      'Full Print 360º personalizado',
      'Algodón 100% premium',
      'Diseño exclusivo FREDDY ICE BOY',
      'Impresión de alta calidad',
      'Tallas: XS - XXL',
      'Ideal para multideporte',
    ],
  }

  const handleCheckout = async () => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          size: selectedSize,
          quantity: quantity,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Error al procesar el pago')
      }

      const stripe = await getStripe()
      const { error: stripeError } = await stripe.redirectToCheckout({
        sessionId: data.sessionId,
      })

      if (stripeError) {
        throw new Error(stripeError.message)
      }
    } catch (err) {
      setError(err.message || 'Error al procesar el pago')
      console.error('Error:', err)
    } finally {
      setLoading(false)
    }
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length)
  }

  return (
    <section id="tienda" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-ice text-center mb-4">TIENDA OFICIAL</h2>
          <div className="w-20 h-1 bg-ice mx-auto mb-12" />
        </motion.div>

        <motion.div
          className="bg-gradient-to-b from-gray-900 to-black rounded-lg overflow-hidden border border-ice/20 hover:border-ice transition-colors"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid md:grid-cols-2 gap-8 p-8">
            {/* Image Carousel */}
            <motion.div
              className="flex flex-col gap-4"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-lg h-96 bg-gray-800 flex items-center justify-center">
                <motion.img
                  key={currentImageIndex}
                  src={product.images[currentImageIndex].url}
                  alt={product.images[currentImageIndex].label}
                  className="w-full h-full object-contain"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Price Badge */}
                <div className="absolute top-4 right-4 bg-ice text-dark px-4 py-2 rounded-lg font-bold">
                  {product.price}
                </div>

                {/* Image Label */}
                <div className="absolute bottom-4 left-4 bg-dark/80 text-ice px-3 py-1 rounded text-sm font-semibold">
                  {product.images[currentImageIndex].label}
                </div>
              </div>

              {/* Carousel Controls */}
              {product.images.length > 1 && (
                <div className="flex gap-2 justify-center">
                  <motion.button
                    onClick={prevImage}
                    className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    ←
                  </motion.button>
                  <div className="flex gap-2">
                    {product.images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`w-12 h-12 rounded-lg overflow-hidden border-2 transition-colors ${
                          idx === currentImageIndex ? 'border-ice' : 'border-gray-700'
                        }`}
                      >
                        <img
                          src={product.images[idx].url}
                          alt={product.images[idx].label}
                          className="w-full h-full object-contain"
                        />
                      </button>
                    ))}
                  </div>
                  <motion.button
                    onClick={nextImage}
                    className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    →
                  </motion.button>
                </div>
              )}
            </motion.div>

            {/* Product Details */}
            <motion.div
              className="flex flex-col justify-center space-y-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-light mb-2">
                  {product.name}
                </h3>
                <p className="text-ice font-semibold text-lg">Colección Oficial FREDDY ICE BOY</p>
              </div>

              <p className="text-gray-400 text-base leading-relaxed">
                {product.description}
              </p>

              {/* Specs */}
              <div className="space-y-2">
                <p className="text-ice font-semibold">Características:</p>
                <ul className="space-y-2">
                  {product.specs.map((spec, idx) => (
                    <li key={idx} className="text-light flex items-center gap-2">
                      <span className="text-ice">✓</span>
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Size Selector */}
              <div>
                <label className="block text-ice font-semibold mb-3">Talla *</label>
                <select
                  value={selectedSize}
                  onChange={(e) => setSelectedSize(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-light focus:outline-none focus:border-ice transition-colors"
                >
                  {product.sizes.map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </div>

              {/* Quantity Selector */}
              <div>
                <label className="block text-ice font-semibold mb-3">Cantidad *</label>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-lg text-light font-bold transition-colors"
                  >
                    −
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-light text-center focus:outline-none focus:border-ice"
                  />
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-lg text-light font-bold transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Price */}
              <div className="py-4 border-t border-b border-ice/20">
                <p className="text-gray-400 mb-1">Precio por unidad:</p>
                <p className="text-5xl font-bold text-ice mb-2">{product.price}</p>
                <p className="text-gray-500 text-sm">Total: {product.price} x {quantity}</p>
              </div>

              {/* Error Message */}
              {error && (
                <motion.div
                  className="p-3 bg-red-900/20 border border-red-500 rounded-lg text-red-400 text-sm"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  ❌ {error}
                </motion.div>
              )}

              {/* Button */}
              <motion.button
                onClick={handleCheckout}
                disabled={loading}
                className="w-full py-4 bg-ice text-dark font-bold text-lg rounded-lg hover:bg-cyan-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: loading ? 1 : 1.02 }}
                whileTap={{ scale: loading ? 1 : 0.98 }}
              >
                {loading ? 'Procesando...' : 'Comprar Ahora'}
              </motion.button>

              {/* Security Info */}
              <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-500/30">
                <p className="text-sm text-gray-400 text-center">
                  🔒 Pago seguro con Stripe <br />
                  💳 Tarjeta de crédito/débito <br />
                  ✓ Datos protegidos
                </p>
              </div>

              {/* Shipping Info */}
              <div className="p-4 bg-gray-900/50 rounded-lg border border-ice/10">
                <p className="text-sm text-gray-400 text-center">
                  📦 Envío disponible en toda España <br />
                  ✓ Garantía de satisfacción
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Info Section */}
        <motion.div
          className="mt-12 p-8 bg-gray-900 rounded-lg border border-ice/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-ice mb-4">Acerca de esta Camiseta</h3>
          <p className="text-gray-400 leading-relaxed mb-4">
            La camiseta oficial <span className="text-ice font-bold">FREDDY ICE BOY</span> es más que una prenda de ropa, es un símbolo de determinación y pasión.
            Diseñada con un impresionante full print 360º, esta camiseta es perfecta para atletas y aficionados al deporte.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Hecha con algodón 100% premium e impresión de alta calidad, es ideal para entrenar, competir o simplemente mostrar tu apoyo a <span className="text-ice font-bold">FREDDY VILLENA</span>.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
