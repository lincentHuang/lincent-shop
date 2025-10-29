import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  sassOptions:{
    additionalData: `@import "@/styles/base.scss";`
  }
};

export default nextConfig;
