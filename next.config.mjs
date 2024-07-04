import path from "node:path";

const cspHeader = `
    default-src 'self' http://drupal-institucional-drupal-dev.apps.ocpdrupal.equatorial.corp;
    script-src 'self' 'unsafe-eval' 'unsafe-inline' http://drupal-institucional-drupal-dev.apps.ocpdrupal.equatorial.corp;
    style-src 'self' 'unsafe-inline' http://drupal-institucional-drupal-dev.apps.ocpdrupal.equatorial.corp https://fonts.googleapis.com/;
    img-src 'self' blob: data: http://drupal-institucional-drupal-dev.apps.ocpdrupal.equatorial.corp https://picsum.photos;
    font-src 'self' https://fonts.gstatic.com;
    object-src 'none';
    base-uri 'self' http://drupal-institucional-drupal-dev.apps.ocpdrupal.equatorial.corp ;
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
`

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join("/", "pages"), "src/assets"],
  },
  reactStrictMode: true,
  images: {
    domains: ['b7ae-2804-214-8174-cd0b-a0fa-2e32-f4a4-e9cf.ngrok-free.app','drupal-institucional-drupal-dev.apps.ocpdrupal.equatorial.corp', 'institucional-drupal.ddev.site'],
  },
  swcMinify: true,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // {
          //   key: 'X-Frame-Options',
          //   value: 'DENY',
          // },
            // Habilitar assim que estiver tranquilo o proxy da api
          // {
          //   key: 'Content-Security-Policy',
          //   value: cspHeader.replace(/\n/g, ''),
          // },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
};

export default nextConfig;
