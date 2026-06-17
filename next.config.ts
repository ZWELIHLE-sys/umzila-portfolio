import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow optimized <Image> loading from Cloudinary (screenshots, etc.)
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

export default nextConfig;
