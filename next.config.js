/* eslint-disable @typescript-eslint/no-var-requires */
const removeImports = require('next-remove-imports')();
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    esmExternals: 'loose',
  },
};

module.exports = removeImports(nextConfig);
