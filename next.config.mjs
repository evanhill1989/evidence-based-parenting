import { withContentlayer } from 'next-contentlayer2'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [],
  },
  // Optimize for static generation
  output: 'standalone',
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
}

export default withContentlayer(nextConfig)
