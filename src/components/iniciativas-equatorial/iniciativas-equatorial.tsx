"use client";
import { useEffect, useState } from "react";
import styles from "./iniciativas-equatorial.module.scss";


export default function IniciativasEquatorial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      tag: "cultura",
      title: "Valorizamos a cultura e a identidade de cada povo",
      body: "A Plataforma E+ Cultura contribui com diversas iniciativas que valorizam a população local e suas tradições. ",
      url: "/images/iniciativas1.png",
      rich: "cultura"
    },
    {
      tag: "sustentabilidade",
      title: "Energia limpa e renovável na comunidade",
      body: "A gente tem um compromisso com um futuro mais sustentável e isso se reflete nos nossos resultados de ESG.",
      url: "/images/iniciativas2.jpeg",
      rich: "renovável"
    },
    {
      tag: "emprego",
      title: "Mais emprego e renda para a população local",
      body: "O Projeto Energia Profissional qualifica a mão-de-obra local para suprir a demanda dos empreendimentos no estado.",
      url: "/images/iniciativas3.png",
      rich: "renda"
    },
    {
      tag: "sustentabilidade",
      title: "Energia limpa e renovável na comunidade",
      body: "A gente tem um compromisso com um futuro mais sustentável e isso se reflete nos nossos resultados de ESG.",
      url: "/images/iniciativas2.jpeg",
      rich: "renovável"
    },
    {
      tag: "emprego",
      title: "Mais emprego e renda para a população local",
      body: "O Projeto Energia Profissional qualifica a mão-de-obra local para suprir a demanda dos empreendimentos no estado.",
      url: "/images/iniciativas3.png",
    },
  ];

  useEffect(() => {
    setCurrentIndex(currentIndex);
  }, []);

  const handleIndexChange = (index: number) => {
    setCurrentIndex(index);
  };

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
      {/* <div className={styles["row-carrosel"]}>
        <CarrouselCards
          images={images}
          currentIndex={currentIndex}
          onChangeIndex={handleIndexChange}
        />
      </div> */}
      {/* <PageControl
        totalPages={images.length}
        currentIndex={currentIndex}
        // onChangeIndex={handleIndexChange}
      /> */}
    </div>
  );
}
