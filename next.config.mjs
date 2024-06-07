import path from "node:path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join("/", "pages"), "src/assets"],
  },
};

export default nextConfig;
