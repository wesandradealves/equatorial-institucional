"use client";
import { Helmet } from 'react-helmet';
import RootLayout from "@/app/layout"
import PerguntasFrequentes from "@/components/perguntasFrequentes";
import UltimasNoticias from "@/components/ultimas-noticias/ultimas-noticias";
import Carousel from "@/components/ui/carousel/Carousel";
import IniciativasEquatorial from "@/components/iniciativas-equatorial/iniciativas-equatorial";
import Institucional from "@/components/institucional/institucional";
import ConvenienceAndSecurity from "@/components/convenienceAndSecurity/page";
import Hero from "@/components/hero/hero";

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
        <Hero/>
        <ConvenienceAndSecurity />
        <Carousel
          title="Dicas de economia e facilide pra te ajudar!"
          videos={[
            {
              title: "Iluminação Pública",
              description:
                "Este vídeo mostra informações sobre a iluminação pública.",
              videoUrl:
                "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4",
              thumbnailUrl: "https://picsum.photos/800/601",
            },
            {
              title: "Aprendendo sobre Energia Solar",
              thumbnailUrl: "https://picsum.photos/800/603",
              description:
                "Um vídeo informativo sobre os benefícios da energia solar.",
              iframeUrl:
                "https://player.vimeo.com/video/929824958?h=3eb6a365ec",
            },
            {
              title: "Iluminação Pública",
              description:
                "Este vídeo mostra informações sobre a iluminação pública.",
              videoUrl:
                "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4",
              thumbnailUrl: "https://picsum.photos/800/604",
            },
          ]}
        />
        <IniciativasEquatorial />
        <UltimasNoticias />
        <Institucional />
        <PerguntasFrequentes />
    </RootLayout>
  )
}