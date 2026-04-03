import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Freddy Villena ICE BOY | Luchador Amateur de MMA y Entrenador',
  description: 'Freddy Villena (ICE BOY) - Luchador amateur de MMA con récord 15-6. Entrenador profesional en BCN TEAM BARCELONA. Reserva tu clase hoy.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className={`${inter.className} bg-dark text-light overflow-x-hidden`}>
        {children}
      </body>
    </html>
  )
}
