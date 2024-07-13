"use client";
import BlockShorts from "@/components/BlockShorts/BlockShorts";
import ConfigProvider from "@/context/config";
import { useContext } from "react";
import { Helmet } from "react-helmet-async";
// import PerguntasFrequentes from "@/components/perguntasFrequentes";
// import IniciativasEquatorial from "@/components/iniciativas-equatorial/iniciativas-equatorial";
// import Institucional from "@/components/institucional/institucional";
// import ConvenienceAndSecurity from "@/components/convenienceAndSecurity/convenienceAndSecurity";
import Hero from "@/components/Hero/Hero";
import UltimasNoticias from "@/components/UltimasNoticias/UltimasNoticias";
import { Content } from "./style";

export default function Home() {
  const { config } = useContext<any>(ConfigProvider);

  return (
    <Content className="d-flex flex-column">
      {config && (
        <Helmet>
          <title>{`${config?.site_name} - Página Inicial`}</title>
        </Helmet>
      )}
      <Hero />

      <BlockShorts />
      <UltimasNoticias />
      {/* <ConvenienceAndSecurity />
      <IniciativasEquatorial />

      <Institucional />
      <PerguntasFrequentes />      */}
    </Content>
  );
}
