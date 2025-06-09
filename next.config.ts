import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'flowbite.s3.amazonaws.com',
        },
        {
          protocol: 'https',
          hostname: 'flowbite.com',
        },
      ],
    },
};

export default nextConfig;
