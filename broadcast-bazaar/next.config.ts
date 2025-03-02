const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/broadcast-bazaar" : "";

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Required for GitHub Pages
  },
  basePath: basePath,
  assetPrefix: basePath,
};


export default nextConfig;