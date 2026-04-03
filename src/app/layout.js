import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Freddy Villena - ICE BOY | Luchador MMA Profesional',
  description: 'Freddy Villena, apodado ICE BOY, es un luchador profesional de MMA. El cazador de sueños.',
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
