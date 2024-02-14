/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    
    remotePatterns: [
      {
        protocol: "https",
        hostname: "n-porplehomes-production.up.railway.app",
      },
    ],
  },
}

module.exports = nextConfig
