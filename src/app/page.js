import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Record from '@/components/Record'
import NextFight from '@/components/NextFight'
import Highlights from '@/components/Highlights'
import Shop from '@/components/Shop'
import About from '@/components/About'
import Gallery from '@/components/Gallery'
import Sponsors from '@/components/Sponsors'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Record />
        <NextFight />
        <Highlights />
        <Shop />
        <About />
        <Gallery />
        <Sponsors />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
