import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Trainer from '@/components/Trainer'
import Booking from '@/components/Booking'
import NextFight from '@/components/NextFight'
import Fights from '@/components/Fights'
import Gallery from '@/components/Gallery'
import Shop from '@/components/Shop'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Trainer />
      <Booking />
      <NextFight />
      <Fights />
      <Gallery />
      <Shop />
      <About />
      <Contact />
      <Footer />
    </>
  )
}
