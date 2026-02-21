/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: false,
    disableDefaultFont: true,        // ⬅️ THIS DISABLES GEIST
  },
};

module.exports = nextConfig;
