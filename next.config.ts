import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Drone Formation Studio is served by route handlers behind a login (not from /public),
  // so its files must be bundled with those routes explicitly.
  outputFileTracingIncludes: {
    '/formation-studio': ['./private/formation-studio/**/*'],
    '/formation-studio/sample': ['./private/formation-studio/**/*'],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "idr01.zata.ai",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "*.r2.dev",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "*.cloudflare.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "*.imagedelivery.net",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/drone-light-show-india',
        destination: '/drone-light-show-in-india',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
