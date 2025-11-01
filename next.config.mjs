/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ecomus-2-2.myshopify.com",
        port: "",
        pathname: "/cdn/shop/files/**",
      },
    ],
  },
};

export default nextConfig;
