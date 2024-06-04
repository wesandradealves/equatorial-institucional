import styles from "./page.module.scss";
import NewsCard from "@/components/ui/patterns/Card/news-card/news-card";
import TagContent from "@/components/ui/patterns/tag/tag-content/tag-content";
import Button from "@/components/ui/actions/Button";

export default function Index() {
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
          {items.map((item, index) => (
            <div key={index}>
              <NewsCard
                title={item.title}
                body={item.body}
                mesano={item.mesano}
                imageUrl={item.imageUrl}
              >
                {item.tags.map((tag, j) => (
                  <TagContent key={j} label={tag.label} />
                ))}
              </NewsCard>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
