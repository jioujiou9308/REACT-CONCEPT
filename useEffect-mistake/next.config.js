/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

  tailwindcss: {
    config: './tailwind.config.js',
    cssModules: true,
  }
}

module.exports = nextConfig
