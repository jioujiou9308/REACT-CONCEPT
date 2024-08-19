/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["cdn.sanity.io"],
    formats: ["image/avif", "image/webp"],
  },

  tailwindcss: {
    config: "./tailwind.config.js",
    cssModules: true,
  },
};

module.exports = nextConfig;
