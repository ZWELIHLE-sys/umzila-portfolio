import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allowed <Image> quality values (Next 16 requires whitelisting non-default qualities)
    qualities: [75, 90],
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
