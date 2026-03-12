/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.hscasemanagement.com' }],
        destination: 'https://hscasemanagement.com/:path*',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
