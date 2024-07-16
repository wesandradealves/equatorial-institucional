"use client";
import BlockShorts from "@/components/BlockShorts/BlockShorts";
import ConfigProvider from "@/context/config";
import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import Hero from "@/components/Hero/Hero";
import UltimasNoticias from "@/components/UltimasNoticias/UltimasNoticias";
import { Content } from "./style";
import BlockVideos from "@/components/BlockVideos/BlockVideos";
import BlockIniciativas from "@/components/BlockIniciativas/BlockIniciativas";
import PerguntasFrequentes from "@/components/perguntasFrequentes";
import BlockInstitucionalEquatorial from "@/components/BlockInstitucionalEquatorial/BlockInstitucionalEquatorial";

export default function Home() {
  const { config } = useContext<any>(ConfigProvider);
  return (
    <Content className="d-flex flex-column">
      {config && (
        <title>{`${config?.site_name} - Página Inicial`}</title>
      )}
      <Hero />
      <BlockVideos />
      <BlockShorts />
      <BlockInstitucionalEquatorial />
      <BlockIniciativas />
      <UltimasNoticias />
       <PerguntasFrequentes />
    </Content>
  );
}
