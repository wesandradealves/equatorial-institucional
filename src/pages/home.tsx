"use client";
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