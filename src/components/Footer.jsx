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
          <div className="flex gap-6 text-xl">
            <a
              href="https://www.instagram.com/Freddy_ice_boy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
              title="Instagram"
            >
              📷
            </a>
            <a
              href="https://www.tiktok.com/@Freddy.villena85"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
              title="TikTok"
            >
              🎵
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
