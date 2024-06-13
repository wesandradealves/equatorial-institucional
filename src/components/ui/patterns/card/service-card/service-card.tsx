import styles from './service-card.module.scss';

/* eslint-disable-next-line */
export class ServiceCardProps {
  title?: string = '';
  symbols?: string = '';
  theme?: string = '';
}

export function ServiceCard(props: ServiceCardProps) {
  const {
    title = 'A title with one or two lines',
    symbols = 'volume_off',
    theme = '',
  } = props;

  return (
    <div className={`${styles.container} ${styles.default} ${styles[theme]}`}>
      <span className={`material-symbols-rounded ${styles.icon}`}>
        {symbols}
      </span>
      <p>{title}</p>
    </div>
  );
}

export default ServiceCard;
