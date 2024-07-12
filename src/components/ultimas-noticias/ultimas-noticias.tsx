"use client";
import { Button } from "@/assets/tsx/objects";
import NewsCard from "@/components/ui/newsCard/NewsCard"; // Atualize com o caminho correto
import { HttpService } from "@/services";
import * as mdiIcons from "@mdi/js";
import Icon from "@mdi/react";
import { useEffect, useState } from "react";
import { News, NewsTypo } from "./types/news_typo";
import styles from "./ultimas-noticias.module.scss";

export default function UltimasNoticias() {
  const http = new HttpService();
  const [news, setNews] = useState<News[]>([]);

  const getUltimasNoticias = async () => {
    const result: NewsTypo = await http.get("/api/noticias");
    setNews(result.rows);
    console.log(result.rows);
  };

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
          <Button>
            Ver todas as notícias{" "}
            <span className="icon-container">
              <Icon path={mdiIcons.mdiArrowRight} size={1} className="icon" />
            </span>
          </Button>
        </div>
        <div className={styles.news}>
          {news &&
            news.map((item, index) => (
              <div key={index}>
                {/* {item.title} -{" "}
                <div dangerouslySetInnerHTML={{ __html: item.summary }}></div> -
                {item.date} -{item.category} - {item.image} - */}
                <NewsCard
                  title={item.title}
                  description={item.summary}
                  image={item.image}
                  link={item.image}
                  date={item.date}
                  category={item.category}
                />
                {/* <Image  */}
                {/* <NewsCard title={item.title} body={item.body} mesano={item.date}> */}
              </div>
              // <NewsCard
              //   key={index}
              //   title={item.title}
              //   body={item.summary}
              //   mesano={item.date}
              //   // imageUrl={`${props?.data?.basePath + props?.data?.logo}`}
              //   imageUrl={'https://d792-191-165-222-70.ngrok-free.app/'+ item.image}
              // >
              //   {item.category.map((tag, j) => (
              //     <TagContent key={j} label={tag} />
              //   ))}
              // </NewsCard>
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
