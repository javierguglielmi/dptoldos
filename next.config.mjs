/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "dptoldos.vercel.app" }],
        destination: "https://www.dptoldos.es/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
