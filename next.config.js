/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed 'standalone' output for better Vercel compatibility
  images: {
    unoptimized: true
  },
  // Ensure proper static generation
  trailingSlash: false,
  // Optimize for production builds
  swcMinify: true,
}

module.exports = nextConfig
