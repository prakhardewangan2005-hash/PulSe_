/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Don't fail the Vercel build on lint warnings/errors
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Don't fail the Vercel build on type errors (build still type-checks separately if needed)
    ignoreBuildErrors: false,
  },
};

module.exports = nextConfig;
