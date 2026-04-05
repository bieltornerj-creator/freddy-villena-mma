import Navbar from '@/components/Navbar'
import NextFight from '@/components/NextFight'
import Fights from '@/components/Fights'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Eventos - Freddy Villena',
  description: 'Próxima pelea y historial de peleas de Freddy Villena.'
}

export default function Eventos() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <NextFight />
        <Fights />
      </main>
      <Footer />
    </>
  )
}
