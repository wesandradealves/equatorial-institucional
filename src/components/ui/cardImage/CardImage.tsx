import ButtonIcon from "../actions/ButtonIcon";
import "./CardImage.scss";

export class CardImageProps {
  tag?: string = "";
  title?: string = "";
  body?: string = "";
  imageUrl?: string = "";
  index: number = 0;
  currentIndex: number = 0;
  onChangeIndex?: (index: number) => void;
}

export function CardImage(props: CardImageProps) {
  // const {
  //   tag = "sustentabilidade",
  //   title = "Energia limpa e  renovável na comunidade",
  //   body = "A gente tem um compromisso com um futuro mais sustentável e isso se reflete nos nossos resultados de ESG.",
  //   imageUrl = "/images/iniciativas1.png",
  //   currentIndex
  // } = props;

  return (
    <div
      className={`card-image ${props.currentIndex === props.index ? 'selected' : ''}`}
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.6) 100%), url(${props.imageUrl})`,
      }}
    >
      <div className="content-top">
        <div className="tag"></div>
        {props.tag && <div className="label">{props.tag}</div>}
      </div>
      <div className="content-bottom">
        <div className="text-content">
          {props.title && <h1 className="title-content">{props.title}</h1>}
          {props.body && <p className="body-content">{props.body}</p>}
        </div>
        <div>
          <ButtonIcon variant="inversed" />
        </div>
      </div>
    </div>
  );
}

export default CardImage;
