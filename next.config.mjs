/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true
  },
  allowedDevOrigins: ['192.168.0.*']
}

export default nextConfig
