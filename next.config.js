/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@acme/ui', 'lodash-es'],
  reactStrictMode: true,
  experimental: {
    appDir: true,
  }
}

module.exports = nextConfig
