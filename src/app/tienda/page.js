import Navbar from '@/components/Navbar'
import Shop from '@/components/Shop'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Tienda - Freddy Villena',
  description: 'Tienda oficial de Freddy Villena con productos exclusivos.'
}

export default function Tienda() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Shop />
      </main>
      <Footer />
    </>
  )
}
