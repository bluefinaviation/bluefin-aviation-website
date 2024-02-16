/** @type {import('next').NextConfig} */
const { withNextVideo } = require('next-video/process')

const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'cdn.sanity.io' },
      { hostname: 'source.unsplash.com' }
    ]
  },
  typescript: {
    ignoreBuildErrors: process.env.VERCEL_ENV === 'production'
  },
  eslint: {
    ignoreDuringBuilds: process.env.VERCEL_ENV === 'production'
  },
  logging: {
    fetches: {
      fullUrl: true
    }
  },
  experimental: {
    taint: true
  }
}

module.exports = withNextVideo(nextConfig)
