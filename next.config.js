/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: [
      'assets.cdn.filesafe.space',
      'images.unsplash.com',
    ],
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
}

module.exports = nextConfig
