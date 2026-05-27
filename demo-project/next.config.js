/** @type {import('next').NextConfig} */
// ⚠️  Missing security headers — bene-guard will flag these
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // ❌ Content-Security-Policy is missing
          // ❌ X-Frame-Options is missing
          // ❌ Strict-Transport-Security is missing
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',   // ⚠️  wildcard CORS — bene-guard flags this
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
