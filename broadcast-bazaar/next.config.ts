const isProd = process.env.NODE_ENV === "production";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  ...(isProd && {
    basePath: "/BroadCast-Mui", // Apply only in production
    assetPrefix: "/BroadCast-Mui/",
  }),
  images: {
    unoptimized: true, // Required for GitHub Pages
  },
};

export default nextConfig;