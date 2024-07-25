"use client";
import { Column, Content, Columns, Container } from '@/components/UltimasNoticias/style';
import NewsCard from "@/components/NewsCard/NewsCard";
import { HttpService } from "@/services";
import { BlockTypo } from "@/types/enums";
import { useContext, useEffect, useState } from "react";
import { News, NewsTypo } from "./types/news_typo";
import BlockHead from "@/template-parts/BlockHead/BlockHead";
import ConfigProvider from '@/context/config';

export default function UltimasNoticias(props: any) {
  const http = new HttpService();
  const [news, setNews] = useState<News[]>([]);
  const [blockData, setBlockData] = useState<BlockTypo[] | {} | any>(null);
  const { config } = useContext<any>(ConfigProvider);
  const getUltimasNoticias = async () => {
    const result: NewsTypo = await http.get("/api/noticias");
    setNews(result.rows);
  };

  const fetchData = async (uri: any) => {
    let response: any[] = await http.get(uri);
    return response;
  };

  useEffect(() => {
    getUltimasNoticias();

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
      console.table(blockData);
    }
  }, []);

  return (
    <Content data-component="BlockUltimasNoticias" className='BlockUltimasNoticias'>
      <Container className="container">
        <Columns className="d-flex align-items-center flex-wrap">
          {blockData && <BlockHead className="col-12 col-lg-5 col-xl-4 col-xxl-3" data={blockData} />}
          
          {news && <Column className='flex-fill d-flex flex-wrap align-items-stretch'>
            {news.map((item, index) => (
              <NewsCard
                key={index}
                className="col-12 col-md-4"
                title={item.title}
                description={item.summary}
                image={config?.basePath + item.image}
                link={item.image}
                date={item.date}
                category={item.category}
              />
          ))}</Column>}
        </Columns>
      </Container>
    </Content>
  );
}
