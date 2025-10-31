import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
      options: {
        svgoConfig: {
          plugins: [
            {
              name: "removeViewBox",
              active: false, // 保留 viewBox
            },
          ],
        },
      },
    });
    return config;
  },
  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.jsx",
      },
    },
  },
  sassOptions: {
    additionalData: `@import "@/styles/base.scss";`,
  },
};

export default nextConfig;
