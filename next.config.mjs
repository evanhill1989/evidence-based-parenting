import { withContentlayer } from 'next-contentlayer2'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [],
  },
  output: 'standalone',
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
}

export default withContentlayer(nextConfig)
