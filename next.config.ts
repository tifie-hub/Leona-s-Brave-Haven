import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  async redirects() {
    return [
      {
        source: "/donate",
        destination: "https://www.paypal.com/donate/?hosted_button_id=WUJNEJFPJ3RCG",
        permanent: true,
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
