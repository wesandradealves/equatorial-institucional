"use client";
import { Button } from "@/assets/tsx/objects";
import NewsCard from "@/components/ui/newsCard/NewsCard"; // Atualize com o caminho correto
import { HttpService } from "@/services";
import { BlockTypo } from "@/types/enums";
import * as mdiIcons from "@mdi/js";
import Icon from "@mdi/react";
import { useEffect, useState } from "react";
import { News, NewsTypo } from "./types/news_typo";
import styles from "./ultimas-noticias.module.scss";

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
    }
  }, []);

  useEffect(() => {
    console.log(blockData);
  }, [blockData]);

  return (
    <>
      <div className={`d-flex flex-wrap ${styles.container}`}>
        <div className="d-flex flex-wrap flex-column">
          <div className={styles.title}>
            <h4
              dangerouslySetInnerHTML={{
                __html: blockData?.title ? blockData?.title : blockData?.info,
              }}
            ></h4>
          </div>
          {blockData?.cta_label && blockData?.cta_url && (
            <div className={styles.action}>
              <Button href={blockData?.cta_url}>
                {blockData?.cta_label}

                <span className="icon-container">
                  <Icon
                    path={mdiIcons.mdiArrowRight}
                    size={1}
                    className="icon"
                  />
                </span>
              </Button>
            </div>
          )}
        </div>
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
    </>
  );
}
