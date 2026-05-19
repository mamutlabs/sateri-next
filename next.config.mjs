/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.sateri.do' }],
        destination: 'https://sateri.do/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
