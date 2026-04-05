import Navbar from '@/components/Navbar'
import Trainer from '@/components/Trainer'
import Booking from '@/components/Booking'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Entrenamientos - Freddy Villena',
  description: 'Entrenamientos personalizados de MMA con Freddy Villena.'
}

export default function Entrenamientos() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Trainer />
        <Booking />
      </main>
      <Footer />
    </>
  )
}
