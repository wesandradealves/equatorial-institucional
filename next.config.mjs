import path from "node:path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join("/", "pages"), "src/assets"],
  },
  reactStrictMode: false, //true
  images: {
    domains: ['d792-191-165-222-70.ngrok-free.app'],
  },
};

export default nextConfig;
