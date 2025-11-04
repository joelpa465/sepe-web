import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimización SEO
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Compresión y optimización
  compress: true,
  // Generación de estáticos
  output: 'standalone',
};

export default nextConfig;
