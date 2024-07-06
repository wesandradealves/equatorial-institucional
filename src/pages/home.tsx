"use client";
import { Helmet } from 'react-helmet';
import RootLayout from "@/app/layout"
import PerguntasFrequentes from "@/components/perguntasFrequentes";
import UltimasNoticias from "@/components/ultimas-noticias/ultimas-noticias";
import IniciativasEquatorial from "@/components/iniciativas-equatorial/iniciativas-equatorial";
import Institucional from "@/components/institucional/institucional";
import ConvenienceAndSecurity from "@/components/convenienceAndSecurity/page";
import Hero from "@/components/hero/hero";
import BlockShorts from '@/components/block_shorts/block_shorts';

export default function Home() {
  return (
    <RootLayout>
        <Helmet>
          <title>Equatorial Energia - Página Inicial</title>
          <meta name="description" content="This is a description of my page" />
          <meta property="og:title" content="Equatorial Energia - Página Inicial" />
          <meta property="og:description" content="This is a description of my page" />
          <meta name="twitter:title" content="Equatorial Energia - Página Inicial" />
          <meta name="twitter:description" content="This is a description of my page" />
        </Helmet>        
        {/* <Hero/> */}
        {/* <ConvenienceAndSecurity /> */}
        <BlockShorts />
        {/* <IniciativasEquatorial /> */}
        {/* <UltimasNoticias /> */}
        {/* <Institucional /> */}
        {/* <PerguntasFrequentes /> */}
    </RootLayout>
  )
}