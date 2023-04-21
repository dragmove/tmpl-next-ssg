const withTwin = require('./config/withTwin.js');

const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = withTwin({
  // @see https://nextjs.org/docs/advanced-features/compiler#remove-console
  // compiler: { removeConsole: true },
  compress: isProd ? true : false,
  reactStrictMode: true,
  swcMinify: false,
  env: {
    APP_ENV: process.env.NODE_ENV,
    PHASE: process.env.PHASE,
  },
});

module.exports = nextConfig;
