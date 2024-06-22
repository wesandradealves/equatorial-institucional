import path from "node:path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join("/", "pages"), "src/assets"],
  },
  images: {
    domains: ['institucional-drupal.ddev.site', 'institucional-drupal.ddev.site'],
  },  
  "presets": ["next/babel"], 
  "plugins": [
      ["styled-components", { "ssr": true }]
   ]  
};

export default nextConfig;
