/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'raw.githubusercontent.com', 
      'linkpicture.com', 
      'img.seadn.io', 
      'ethereum.org', 
      'thirdweb.com', 
      'gateway.ipfscdn.io',
      'github.com',
    ]
  }
}

module.exports = nextConfig