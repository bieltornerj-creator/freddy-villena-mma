'use client'

export default function Footer() {
  return (
    <footer className="bg-black py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex justify-between items-center pb-8 border-b border-gray-800 mb-8">
          <div className="text-white font-bold text-lg">
            FREDDY <span className="text-red-600">ICE BOY</span>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/Freddy_ice_boy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
              title="Instagram"
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="url(#instagramGradient)">
                <defs>
                  <linearGradient id="instagramGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" style={{stopColor: '#feda75', stopOpacity: 1}} />
                    <stop offset="5%" style={{stopColor: '#fa7e1e', stopOpacity: 1}} />
                    <stop offset="45%" style={{stopColor: '#d92e7f', stopOpacity: 1}} />
                    <stop offset="60%" style={{stopColor: '#9b36b7', stopOpacity: 1}} />
                    <stop offset="90%" style={{stopColor: '#515bd4', stopOpacity: 1}} />
                  </linearGradient>
                </defs>
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="3.5" fill="white"/>
                <circle cx="17.5" cy="6.5" r="1.5" fill="white"/>
              </svg>
            </a>
            <a
              href="https://www.tiktok.com/@Freddy.villena85"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
              title="TikTok"
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="white">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.66 1.94 2.89 2.89 0 0 1 5.66-1.94v-3.45a6.47 6.47 0 0 0-5.66 3.21A6.47 6.47 0 0 0 9.57 22a6.47 6.47 0 0 0 5.66-3.21A6.47 6.47 0 0 0 17.39 13v-6.3a8.27 8.27 0 0 0 2.2 1.99v-3z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="text-center text-xs text-gray-500">
          &copy; 2026 Freddy ICE BOY. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}
