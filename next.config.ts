import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  async redirects() {
    return [
      {
        source: "/donate",
        destination: "https://gofund.me/04b5d2fb0",
        permanent: false,
      },
      {
        source: "/events",
        destination: "/adoption",
        permanent: true,
      },
      {
        source: "/foster-and-volunteer",
        destination: "/contact",
        permanent: true,
      },
    ];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
