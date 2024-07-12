"use client";
import NewsCard from "@/components/ui/newsCard/NewsCard"; // Atualize com o caminho correto
import { HttpService } from "@/services";
import { useEffect, useState } from "react";
import { News, NewsTypo } from "./types/news_typo";
import styles from "./ultimas-noticias.module.scss";
import { BlockTypo } from "@/types/enums";
import BlockHead from "@/template-parts/BlockHead/BlockHead";

export default function UltimasNoticias() {
  const http = new HttpService();
  const [news, setNews] = useState<News[]>([]);
  const [blockData, setBlockData] = useState<BlockTypo[] | {} | any>(null);
  
  const getUltimasNoticias = async () => {
    const result: NewsTypo = await http.get("/api/noticias");
    setNews(result.rows);
  };

  const fetchData = async(uri: any) => {
    let response:any[] = await http.get(uri)
    return response
  }  

  useEffect(() => {
    getUltimasNoticias();

    if(!blockData) {
      fetchData('/entity/block/block_ultimas_noticias').then((response: BlockTypo[] | any) => {
        if(response) {
          let uuid = response?.settings?.id.split("block_content:").pop();
          fetchData(`/api/blocks/${uuid}`).then((response: BlockTypo[]) => {
            if(response) setBlockData(response.shift())
          }).catch(console.error);        
        }
      }).catch(console.error);
    }    
  }, []);

  return (
    <>
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
    </>
  );
} 