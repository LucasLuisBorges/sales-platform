/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },

      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },
};

export default nextConfig;
