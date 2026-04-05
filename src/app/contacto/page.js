import Navbar from '@/components/Navbar'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Contacto - Freddy Villena',
  description: 'Ponte en contacto con Freddy Villena para reservas y consultas.'
}

export default function Contacto() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Contact />
      </main>
      <Footer />
    </>
  )
}
