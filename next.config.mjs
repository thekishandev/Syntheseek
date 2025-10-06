/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'www.google.com',
      },
    ],
  },
  // Standalone output for Docker (Vercel will override this automatically)
  output: process.env.VERCEL ? undefined : 'standalone',
  // Optimize for production
  swcMinify: true,
  // Remove experimental optimizeCss to fix build errors
  experimental: {
    // optimizeCss: true, // Removed - causes build issues
  },
};

export default nextConfig;
