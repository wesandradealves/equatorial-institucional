import { Helmet } from 'react-helmet';
import { Inter } from "next/font/google";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/header";

import "@/globals.scss";
import Script from "next/script";
import { headers } from "next/headers";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const nonce = headers().get('x-nonce') as string|undefined
  return (
    <div id="wrap" className={`vh-100 d-flex flex-column ${inter.className}`}>
      <Helmet>
        <title>Equatorial Energia</title>
        <meta property="og:title" content="Equatorial Energia" />
        <meta name="twitter:title" content="Equatorial Energia" />
      </Helmet>
      <Header />
      <main className="flex-fill">
        {children}
      </main>
      <Footer />
    </div>
  )
}
