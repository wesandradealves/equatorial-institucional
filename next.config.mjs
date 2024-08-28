import path from "node:path";

const cspHeader = `
    default-src 'self' ;
    script-src 'self' 'unsafe-eval' 'unsafe-inline' ;
    style-src 'self' 'unsafe-inline'  https://fonts.googleapis.com/;
    img-src 'self' blob: data:  https://picsum.photos;
    font-src 'self' https://fonts.gstatic.com;
    object-src 'none';
    base-uri 'self'  ;
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
`;

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join("/", "pages"), "src/assets"],
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: "**",
      },
    ],
  },
  compiler: {
    styledComponents: true,
  },
  swcMinify: true,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
