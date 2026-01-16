/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'videos.pexels.com'],
    unoptimized: true,
  },
}

module.exports = nextConfig
