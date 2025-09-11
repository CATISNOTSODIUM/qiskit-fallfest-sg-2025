import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL('https://heroui.com/images/**')],
  },
};

export default nextConfig;
