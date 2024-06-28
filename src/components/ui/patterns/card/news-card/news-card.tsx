import styles from './news-card.module.scss';

/* eslint-disable-next-line */
export class NewsCardProps {
  title?: string = '';
  body?: string = '';
  mesano?: string = '';
  imageUrl?: string = '';
  children: any;
}

/** Exemplo de componente News Card  */
export function NewsCard(props: NewsCardProps) {
  const {
    title = 'Title',
    body = 'Body',
    mesano = 'Mês Ano',
    imageUrl = '/images/equatorial-energia.png',
  } = props;

  const getFirstParagraphElement = (element: string) => {
    var firstParagraphElement = element.split("</p>")[0];
    return {__html: firstParagraphElement };
  }

  return (
    <div className={styles['container']}>
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className={styles['card']}
      >
        <div className={styles['card-content']}>{props.children}</div>
      </div>
      <p className={styles.title}>{title}</p>
      <p className={styles.body} dangerouslySetInnerHTML={{ __html: body }}></p>
      {/* <p className={styles.body} dangerouslySetInnerHTML={getFirstParagraphElement(body)}></p> */}
      <p className={styles.small}>{mesano}</p>
    </div>
  );
}

export default NewsCard;
