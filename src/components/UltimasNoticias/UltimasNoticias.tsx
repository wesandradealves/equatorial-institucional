"use client";
import styled from "styled-components";

import { Button } from "@/assets/tsx/objects";
import NewsCard from "@/components/ui/newsCard/NewsCard";
import { HttpService } from "@/services";
import { BlockTypo } from "@/types/enums";
import * as mdiIcons from "@mdi/js";
import Icon from "@mdi/react";
import { useEffect, useState } from "react";
import { News, NewsTypo } from "./types/news_typo";
import styles from "./UltimasNoticias.module.scss";
import BlockHead from "@/template-parts/BlockHead/BlockHead";

const CardUltimasNoticias = styled.div`
  @media (min-width: 992px) {
    padding-top: 88px;
    padding-bottom: 145px;
    padding-left: 30px;
    padding-right: 30px;
  }
`;

const StyledUltimasNoticiasItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  max-width: 364px;
  max-height: 261px;

  @media (max-width: 768px) {
    /* Para telas pequenas */
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

const BotaoContainer = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

export default function UltimasNoticias() {
  const http = new HttpService();
  const [news, setNews] = useState<News[]>([]);
  const [blockData, setBlockData] = useState<BlockTypo[] | {} | any>(null);

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
                if (response) setBlockData(response.shift());
              })
              .catch(console.error);
          }
        })
        .catch(console.error);
      console.table(blockData);
    }
  }, []);

  return (
    <CardUltimasNoticias>
      <div className={`d-flex flex-wrap ${styles.container}`}>
        {blockData && <BlockHead className="col-12 col-lg-6 col-xl-4 col-xxl-3" data={blockData} />}
        <div className={`flex-fill ${styles.news}`}>
          {news &&
            news.map((item, index) => (
              <div key={index}>
                <NewsCard
                  title={item.title}
                  description={item.summary}
                  image={item.image}
                  link={item.image}
                  date={item.date}
                  category={item.category}
                />
              </div>
            ))}
        </div>
      </div>
    </CardUltimasNoticias>
  );
}
