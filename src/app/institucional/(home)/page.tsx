"use client";
import PerguntasFrequentes from "@/components/perguntasFrequentes";
import UltimasNoticias from "@/components/ultimas-noticias/ultimas-noticias";
import IniciativasEquatorial from "@/components/iniciativas-equatorial/iniciativas-equatorial";
import Institucional from "@/components/institucional/institucional";
import ConvenienceAndSecurity from "@/components/convenienceAndSecurity/page";
import Hero from "@/components/hero/hero";
import BlockShorts from '@/components/block_shorts/block_shorts'
import { useContext } from "react";
import ConfigProvider from "@/context/store";
import { Helmet } from "react-helmet-async";

export default function Home() {
  const { config } = useContext<any>(ConfigProvider);
  
  return (
    <>
      {config && <Helmet>
        <title>{`${config?.site_name} - Página Inicial`}</title>
      </Helmet>}      
      <Hero/>
      <ConvenienceAndSecurity />
      <BlockShorts />
      <IniciativasEquatorial />
      <UltimasNoticias />
      <Institucional />
      <PerguntasFrequentes />      
    </>
  )
}
