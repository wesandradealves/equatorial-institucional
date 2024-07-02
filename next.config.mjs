import path from "node:path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join("/", "pages"), "src/assets"],
  },
  reactStrictMode: false,
  images: {
    domains: ['b7ae-2804-214-8174-cd0b-a0fa-2e32-f4a4-e9cf.ngrok-free.app'],
  }
};

export default nextConfig;
