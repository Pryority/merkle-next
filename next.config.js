/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  darkMode: "class",
  images: {
    domains:
    [
      // Enter the domain of each photo as a string to resolve errors
    ]
  }
};

module.exports = nextConfig;
