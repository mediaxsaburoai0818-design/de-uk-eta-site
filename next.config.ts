import type { NextConfig } from "next";

const ETA_BASE = process.env.ETA_BASE || "";
const nextConfig: NextConfig = {
  ...(ETA_BASE ? { basePath: ETA_BASE, assetPrefix: ETA_BASE } : {}),
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
