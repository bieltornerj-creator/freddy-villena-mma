import './globals.css'

export const metadata = {
  title: 'Freddy Villena - ICE BOY | Luchador MMA',
  description: 'Freddy Villena (ICE BOY) - Luchador amateur de MMA y entrenador profesional. Reserva entrenamiento, compra merchandise y sígueme en redes.',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'ICE BOY'
  }
}

export const viewport = {
  width: 'device-width',
  initialScale: 1.0,
  themeColor: '#e63946'
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="ICE BOY" />
      </head>
      <body className="bg-black text-gray-100">{children}</body>
    </html>
  )
}
