import Navbar from '@/components/Navbar'
import About from '@/components/About'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Sobre Mí - Freddy Villena',
  description: 'Conoce a Freddy Villena, luchador amateur de MMA y entrenador personal.'
}

export default function SobreMi() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <About />
      </main>
      <Footer />
    </>
  )
}
