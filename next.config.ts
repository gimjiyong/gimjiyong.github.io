import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  basePath: '/gimjiyong.github.io',
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
}

export default nextConfig
