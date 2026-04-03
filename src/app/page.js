import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Trainer from '@/components/Trainer'
import Booking from '@/components/Booking'
import NextFight from '@/components/NextFight'
import Fights from '@/components/Fights'
import Shop from '@/components/Shop'
import About from '@/components/About'
import Gallery from '@/components/Gallery'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Trainer />
        <Booking />
        <NextFight />
        <Fights />
        <Shop />
        <About />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
