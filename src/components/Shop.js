'use client'

import { motion } from 'framer-motion'

export default function Shop() {
  const products = [
    {
      id: 1,
      name: 'Camiseta ICE BOY',
      price: '$29.99',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80',
      description: 'Camiseta premium de algodón',
    },
    {
      id: 2,
      name: 'Gorra Ajustable',
      price: '$24.99',
      image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&q=80',
      description: 'Gorra negra con logo ICE BOY',
    },
    {
      id: 3,
      name: 'Póster A2',
      price: '$19.99',
      image: 'https://images.unsplash.com/photo-1598084993000-6b7b8f1e4b6f?w=400&q=80',
      description: 'Póster de Freddy Villena',
    },
  ]

  return (
    <section id="shop" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-ice text-center mb-4">TIENDA</h2>
          <div className="w-20 h-1 bg-ice mx-auto mb-12" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              className="bg-gradient-to-b from-gray-900 to-black rounded-lg overflow-hidden border border-ice/20 hover:border-ice transition-colors group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="relative overflow-hidden h-64 bg-gray-800">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-light mb-2">{product.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{product.description}</p>

                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-ice">{product.price}</span>
                  <button className="px-6 py-2 bg-ice text-dark font-bold rounded-lg hover:bg-cyan-400 transition-colors">
                    Comprar
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
