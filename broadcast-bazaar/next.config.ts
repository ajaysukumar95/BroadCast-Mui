import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Enables `next export`
  reactStrictMode: true, // Recommended for best practices
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;