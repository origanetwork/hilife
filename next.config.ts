import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hilife-test.s3.ap-south-1.amazonaws.com',
        port: '',
        pathname: '/**', // This allows all paths from this host
      },
    ],
  },
};

export default nextConfig;
