/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  transpilePackages: ['@tgc/ui-emotion'],

  reactStrictMode: true,
};

module.exports = nextConfig;
