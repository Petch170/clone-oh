/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ["cdn2.thecatapi.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
        // port: "",
        // pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
