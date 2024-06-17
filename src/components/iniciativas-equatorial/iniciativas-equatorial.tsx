"use client";
import { useState } from "react";
import styles from "./iniciativas-equatorial.module.scss";

export default function IniciativasEquatorial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/images/iniciativas1.png",
    "/images/iniciativas2.jpeg",
    "/images/iniciativas3.png",
  ];

  const handlePageControlIndexChange = (index: number) => {
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
    </div>
  );
}
