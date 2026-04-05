import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import NextFight from '@/components/NextFight'
import Trainer from '@/components/Trainer'
import Booking from '@/components/Booking'
import Fights from '@/components/Fights'
import Shop from '@/components/Shop'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <NextFight />
      <Trainer />
      <Booking />
      <Fights />
      <Shop />
      <Contact />
      <Footer />
    </>
  )
}
