import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // experimental: {
  //   // serverActions: true,
  //   serverComponentsExternalPackages: ["mongoose"],
  // },
  serverExternalPackages: ["mongoose"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.clerk.com",
      },
      {
        protocol: "https",
        hostname: "images.clerk.dev",
      },
      {
        protocol: "https",
        hostname: "uploadthing.com",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      {
        protocol: "https",
        hostname: "utfs.io",
      },
    ],
    // typescript: {
    //   ignoreBuildErrors: true,
    // },
  },
};

export default nextConfig;