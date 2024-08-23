"use client";
import { Column, Content, Columns, Container } from '@/components/UltimasNoticias/style';
import NewsCard from "@/components/NewsCard/NewsCard";
import { BlockTypo } from "@/types/enums";
import { useContext, useEffect, useState } from "react";
import BlockHead from "@/template-parts/BlockHead/BlockHead";
import ConfigProvider from '@/context/config';
import { fetchData } from '@/app/layout';

export default function UltimasNoticias(props: any) {
  const [news, setData] = useState<any>([]);
  const [blockData, setBlockData] = useState<BlockTypo[] | {} | any>(null);
  const { config } = useContext<any>(ConfigProvider);

  useEffect(() => {
    fetchData("/api/noticias").then((response: any) => {
      setData(response?.rows);
    })    

    if (!blockData) {
      fetchData("/entity/block/block_ultimas_noticias")
        .then((response: BlockTypo[] | any) => {
          if (response) {
            let uuid = response?.settings?.id.split("block_content:").pop();
            fetchData(`/api/blocks/${uuid}`)
              .then((response: BlockTypo[]) => {
                if (response) setBlockData(response[0]);
              })
              .catch(console.error);
          }
        })
        .catch(console.error);
    }
  }, []);

  return (
    <Content data-component="BlockUltimasNoticias" className='BlockUltimasNoticias'>
      <Container className="container">
        <Columns className="d-flex align-items-center flex-wrap">
          {blockData && <BlockHead className="col-12 col-lg-5 col-xl-4 col-xxl-3" data={blockData} />}
          
          {news && <Column className='flex-fill d-flex flex-wrap align-items-stretch'>
            {news.map((row:any, index:any) => (
              <NewsCard
                nid={row.nid}
                key={row.nid}
                title={row.title}
                description={row.summary}
                image={config?.basePath + row.image}
                link={row.image}
                date={row.date}
                category={row.category}
                className="col-12 col-md-4"
              />              
          ))}</Column>}
        </Columns>
      </Container>
    </Content>
  );
}
