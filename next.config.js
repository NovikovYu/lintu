/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    // BASE_DEV_URL: 'http://194.34.134.165/api/v1/',
    BASE_DEV_URL: 'https://portfolio.lintu.finance/api/v1/',
    // BASE_DEV_URL: 'http://194.34.134.165:7777/api/v1/',
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
