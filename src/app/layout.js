import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Freddy Villena ICE BOY | Luchador Amateur de MMA y Entrenador',
  description: 'Freddy Villena (ICE BOY) - Luchador amateur de MMA con récord 15-6. Entrenador profesional en BCN TEAM BARCELONA. Reserva tu clase hoy.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.className} bg-dark text-light`}>
        {children}
      </body>
    </html>
  )
}
