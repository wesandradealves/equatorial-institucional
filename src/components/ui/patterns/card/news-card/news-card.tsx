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

  return (
    <div className={styles['container']}>
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className={styles['card']}
      >
        <div className={styles['card-content']}>{props.children}</div>
      </div>
      <p className={styles.title}>{title}</p>
      <p className={styles.body}>{body}</p>
      <p className={styles.small}>{mesano}</p>
    </div>
  );
}

export default NewsCard;
