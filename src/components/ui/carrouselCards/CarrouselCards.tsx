import { useState } from "react";
import CardImage from "../cardImage/CardImage";
import "./CarrouselCards.scss";
import PageControl from "../navigation/page-control/page-control";

export interface CardIniciativaItem {
  tag?: string;
  title?: string;
  body?: string;
  url?: string;
}

interface CarrouselCardsProps {
  images: CardIniciativaItem[];
  currentIndex: number;
  onChangeIndex?: (index: number) => void;
}

const CarrouselCards: React.FC<CarrouselCardsProps> = ({
  images,
  currentIndex,
  onChangeIndex,
}) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(currentIndex);

  const changeIndex = (index: number) => {
    console.log(index);
    setSelectedIndex(index);
    if (onChangeIndex) {
      onChangeIndex(index);
    }
  };

  return (
    <div className={"carrousel-cards"}>
    {images.map((item, index) => (
      <CardImage
        key={index}
        tag={item.tag}
        title={item.title}
        body={item.body}
        imageUrl={item.url}
        index={index}
        currentIndex={currentIndex}
        onChangeIndex={() => {
          changeIndex(index), console.log(index);
        }}
      />
    ))}
  </div>
  );
};
// className={`${["card-image"]} ${currentIndex === index ? styles.active : ''}`}

export default CarrouselCards;
