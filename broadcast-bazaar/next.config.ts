/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",  // Enables static export
  images: {
    unoptimized: true, // Required for static exports with images
  },
};

export default nextConfig;