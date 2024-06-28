"use client";
import styles from "./ultimas-noticias.module.scss";
import TagContent from "@/components/ui/patterns/tag/tag-content/tag-content";
import Button from "@/components/ui/actions/Button";
import NewsCard from "@/components/ui/patterns/card/news-card/news-card";
import { HttpService } from "@/services";
import { useEffect, useState } from "react";
import { News, NewsTypo } from "./types/news_typo";

export default function UltimasNoticias() {
  const http = new HttpService();
  const [news, setNews] = useState<News[]>([]);
  // const [config, setConfig] = useState<ConfigTypo[]>([]);

  const getUltimasNoticias = async() => {
    // const config:ConfigTypo[] = await http.get('/api/config')
    const result: NewsTypo = await http.get("/api/noticias");
    // setConfig(config);
    setNews(result.rows);
  }  

  useEffect(() => {
    getUltimasNoticias();
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <h4>
            Fique por dentro<br></br> das últimas notícias
          </h4>
        </div>
        <div className={styles.action}>
          <Button
            label="Ver todas as notícias"
            size="small"
            variant="secondary"
          />
        </div>
        <div className={styles.news}>

        {news && news.map((item, index) => (
            <NewsCard
              key={index}
              title={item.title}
              body={item.summary}
              mesano={item.date}
              // imageUrl={`${props?.data?.basePath + props?.data?.logo}`}
              imageUrl={'https://d792-191-165-222-70.ngrok-free.app/'+ item.image}
            >
              {item.category.map((tag, j) => (
                <TagContent key={j} label={tag} />
              ))}
            </NewsCard>
          ))}
        </div>
      </div>
    </>
  );
}

const items = [
  {
    title:
      "Moradores da Ilha do Cajual recebem geladeiras novas da Equatorial Maranhão",
    body: "A Distribuidora doou 35 geladeiras para as famílias que não possuíam o refrigerador em casa.",
    mesano: "Fevereiro 2024",
    imageUrl: "/images/news1.png",
    tags: [{ label: "Economia" }, { label: "Sustentabilidade" }],
  },
  {
    title:
      "Orientamos a população sobre cuidados com energia elétrica no período chuvoso",
    body: "Distribuidora compartilha dicas de segurança para evitar incidentes com a energia elétrica.",
    mesano: "Fevereiro 2024",
    imageUrl: "/images/news2.png",
    tags: [
      { label: "Segurança" },
      { label: "Chuvas" },
      { label: "Orientações" },
    ],
  },
  {
    title: "Abre alas pra energia do carnaval maranhense",
    body: "A folia no Maranhão já chegou com força total, com as festas de pré-carnaval. Tempo de brincar, se divertir e se fantasiar.",
    mesano: "Fevereiro 2024",
    imageUrl: "/images/news3.png",
    tags: [{ label: "Eventos" }, { label: "Carnaval" }],
  },
];
