"use client";
import BlockShorts from "@/components/BlockShorts/BlockShorts";
import { useContext, useEffect } from "react";
import ConfigProvider from "@/context/config";
import { Helmet } from "react-helmet-async";
import PerguntasFrequentes from "@/components/perguntasFrequentes";
import UltimasNoticias from "@/components/ultimas-noticias/ultimas-noticias";
import IniciativasEquatorial from "@/components/iniciativas-equatorial/iniciativas-equatorial";
import Institucional from "@/components/institucional/institucional";
import ConvenienceAndSecurity from "@/components/convenienceAndSecurity/convenienceAndSecurity";
import Hero from "@/components/Hero/Hero";

export default function Home() {
  const { config } = useContext<any>(ConfigProvider);

  return (
    <>
      {config && (
        <Helmet>
          <title>{`${config?.site_name} - Página Inicial`}</title>
        </Helmet>
      )}
      <Hero />
      <BlockShorts />
      <ConvenienceAndSecurity />
      <IniciativasEquatorial />
      <UltimasNoticias />
      <Institucional />
      <PerguntasFrequentes />
    </>
  );
}
