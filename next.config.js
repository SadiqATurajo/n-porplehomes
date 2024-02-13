/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    
    remotePatterns: [
          {hostname: 'n-porplehomes-production.up.railway.app/',
          pathname: '**',
          port: '3000',
          protocol: 'http'}
        ],
  },
}

module.exports = nextConfig
