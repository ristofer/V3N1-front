/** @type {import('next').NextConfig} */
const { BACK_HOST } = process.env;
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${BACK_HOST}/api/:path*`,
      },
      {
        source: "/api-docs/:path*",
        destination: `${BACK_HOST}/api-docs/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
