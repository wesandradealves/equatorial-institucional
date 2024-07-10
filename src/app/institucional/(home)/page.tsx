"use client";
import BlockShorts from '@/components/block_shorts/block_shorts'
import { useContext, useEffect } from "react";
import ConfigProvider from "@/context/store";
import { Helmet } from "react-helmet-async";

export default function Home() {
  const { config } = useContext<any>(ConfigProvider);

  return (
    <>     
      {config && <Helmet>
        <title>{`${config?.site_name} - Página Inicial`}</title>
      </Helmet>}     
      <BlockShorts />
    </>
  )
}
