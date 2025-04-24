/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'pl'],
    defaultLocale: 'en',
  },
  images: {
    domains: ['images.pexels.com'],
  },
}

module.exports = nextConfig
