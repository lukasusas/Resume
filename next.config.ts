import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.kiloapps.io',
      },
    ],
  },
};

export default nextConfig;
