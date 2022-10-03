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
      {
        source: "/users/sign_in",
        destination: `${BACK_HOST}/users/sign_in`,
      },
      {
        source: "/users/sign_out",
        destination: `${BACK_HOST}/users/sign_out`,
      },
      {
        source: "/users/sign_up",
        destination: `${BACK_HOST}/users/sign_up`,
      },
      {
        source: "/users",
        destination: `${BACK_HOST}/users`,
      },
    ];
  },
};

module.exports = nextConfig;
