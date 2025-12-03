/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ecomus-2-2.myshopify.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "ecomus-2-2.myshopify.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
