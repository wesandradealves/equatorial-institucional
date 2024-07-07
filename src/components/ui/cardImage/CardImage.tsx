import { useEffect, useState } from "react";
import ButtonIcon from "../actions/ButtonIcon";
import "./CardImage.scss";

export class CardImageProps {
  tag?: string = "";
  title?: string = "";
  body?: string = "";
  imageUrl?: string = "";
  richText?: string = "";
  index: number = 0;
  currentIndex: number = 0;
  onChangeIndex?: (index: number) => void;
}

export function CardImage(props: CardImageProps) {
  const {
    tag = "sustentabilidade",
    title = "Energia limpa e  renovável na comunidade",
    body = "A gente tem um compromisso com um futuro mais sustentável e isso se reflete nos nossos resultados de ESG.",
    imageUrl = "/images/iniciativas1.png",
    richText = "",
    currentIndex,
  } = props;

  const [currentTitle, setCurrentTitle] = useState("");

  useEffect(() => {
    const regex = new RegExp(`(${richText})`, "gi");
    const text = title.replace(regex, '<span class="rich-content">$1</span>');
    setCurrentTitle(text);
  }, []);

  const changeIndex = (index: number) => {
    if (props.onChangeIndex) {
      props.onChangeIndex(index);
    }
  };

  return (
    <div
      className={`card-image ${currentIndex === props.index ? "selected" : ""}`}
      style={{
        backgroundimage: `linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.6) 100%), url(${imageUrl})`,
      }}
    >
      <div className="content-top">
        <div className="tag"></div>
        {tag && <div className="label">{tag}</div>}
      </div>
      <div className="content-bottom">
        <div className="text-content">
          {title && (
            <h1
              className="title-content"
              dangerouslySetInnerHTML={{ __html: currentTitle }}
            ></h1>
          )}
          {body && <p className="body-content">{body}</p>}
        </div>
        <div className="button-content">
          <ButtonIcon
            variant="inversed"
            onClick={() => changeIndex(props.index)}
          />
        </div>
      </div>
    </div>
  );
}

export default CardImage;
