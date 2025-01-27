import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
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
  env: {
    SC_DISABLE_SPEEDY: 'false'
  },
  experimental: {
    taint: true
  }
}

export default nextConfig
