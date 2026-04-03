'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Shop() {
  const [cartMessage, setCartMessage] = useState(null)

  const product = {
    id: 1,
    name: 'Camiseta Oficial FREDDY ICE BOY',
    price: '€40',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80',
    description: 'Camiseta oficial FREDDY ICE BOY. Diseño premium en algodón 100%. Comodidad máxima para entrenar o usar en tu día a día.',
    specs: [
      'Algodón 100% premium',
      'Diseño exclusivo ICE BOY',
      'Tallas: XS - 3XL',
      'Lavado a máquina',
    ],
  }

  const handleAddToCart = () => {
    setCartMessage('✓ Producto añadido al carrito!')
    setTimeout(() => setCartMessage(null), 2500)
  }

  return (
    <section id="tienda" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-4xl mx-auto">
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
          whileHover={{ scale: 1.02 }}
        >
          <div className="grid md:grid-cols-2 gap-8 p-8">
            {/* Image */}
            <motion.div
              className="relative overflow-hidden rounded-lg h-96 md:h-auto bg-gray-800"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 right-4 bg-ice text-dark px-4 py-2 rounded-lg font-bold">
                {product.price}
              </div>
            </motion.div>

            {/* Details */}
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
                <p className="text-ice font-semibold text-lg">Colección Oficial</p>
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

              {/* Price */}
              <div className="py-4 border-t border-b border-ice/20">
                <p className="text-gray-400 mb-1">Precio:</p>
                <p className="text-5xl font-bold text-ice">{product.price}</p>
              </div>

              {/* Button */}
              <motion.button
                onClick={handleAddToCart}
                className="w-full py-4 bg-ice text-dark font-bold text-lg rounded-lg hover:bg-cyan-400 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Añadir al Carrito
              </motion.button>

              {/* Message */}
              {cartMessage && (
                <motion.div
                  className="p-3 bg-green-900/20 border border-green-500 rounded-lg text-green-400 text-center font-semibold"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  {cartMessage}
                </motion.div>
              )}

              {/* Info */}
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
          <h3 className="text-2xl font-bold text-ice mb-4">Acerca de la Camiseta Oficial</h3>
          <p className="text-gray-400 leading-relaxed">
            Usa la camiseta oficial de <span className="text-ice font-bold">FREDDY ICE BOY</span> y forma parte de la comunidad.
            Diseñada especialmente para ofrecerte comodidad máxima, ya sea entrenando en el gimnasio o en tu día a día.
            Cada camiseta está hecha con materiales de primera calidad para garantizar durabilidad y estilo.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
