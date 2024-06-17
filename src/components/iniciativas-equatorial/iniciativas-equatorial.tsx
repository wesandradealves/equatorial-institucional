"use client";
import { useEffect, useState } from "react";
import styles from "./iniciativas-equatorial.module.scss";
import CardImage from "../ui/cardImage/CardImage";
import PageControl from "../ui/navigation/page-control/page-control";
import CarrouselCards, {
  CardIniciativaItem,
} from "../ui/carrouselCards/CarrouselCards";

export default function IniciativasEquatorial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    console.log(currentIndex);
    setCurrentIndex(currentIndex);
  }, []);

  const handleIndexChange = (index: number) => {
    console.log(index);
    setCurrentIndex(index);
  };

  const images = [
    {
      tag: "cultura",
      title: "Valorizamos a cultura e a identidade de cada povo",
      body: "A Plataforma E+ Cultura contribui com diversas iniciativas que valorizam a população local e suas tradições. ",
      url: "/images/iniciativas1.png",
    },
    {
      tag: "sustentabilidade",
      title: "Energia limpa e  renovável na comunidade",
      body: "A gente tem um compromisso com um futuro mais sustentável e isso se reflete nos nossos resultados de ESG.",
      url: "/images/iniciativas2.jpeg",
    },
    {
      tag: "emprego",
      title: "Mais emprego e renda para a população local",
      body: "O Projeto Energia Profissional qualifica a mão-de-obra local para suprir a demanda dos empreendimentos no estado.",
      url: "/images/iniciativas3.png",
    },
  ];

  return (
    <div className={styles["iniciativas-equatorial"]}>
      <div className={styles["row-text"]}>
        <h2>
          <span>O amanhã vai ser bem melhor</span> se a gente fizer algo hoje
        </h2>
        <p>
          Além de levar a luz para mais de 10 milhões de clientes em seis
          estados do Brasil, também atuamos socialmente em questões culturais,
          econômicas e educacionais para beneficiar a sociedade e o ambiente em
          que estamos inseridos.
        </p>
      </div>
      <div className={styles["row-carrosel"]}>
        <CarrouselCards
          images={images}
          currentIndex={currentIndex}
          onChangeIndex={handleIndexChange}
        />
        {/* <div className={styles["carrosel-view"]}>
          {images.map((item, index) => (
            <CardImage
              key={index}
              tag={item.tag}
              title={item.title}
              body={item.body}
              imageUrl={item.url}
              currentIndex={index}
              onChangeIndex={() => {setCurrentIndex(index), console.log(index)}}
            />
          ))}
        </div> */}
      </div>
      <PageControl
        totalPages={images.length}
        currentIndex={currentIndex}
        onChangeIndex={handleIndexChange}
      />
    </div>
  );
}
