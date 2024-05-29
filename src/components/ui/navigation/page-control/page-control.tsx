import styles from './page-control.module.scss';

/* eslint-disable-next-line */
export interface PageControlProps {
  currentIndex: number;
  total: number;
}

export function PageControl(props: PageControlProps) {
  const dots = Array.from({ length: props.total }, (_, index) => index);

  return (
    <div className={styles['container']}>
      {/* Mapear a matriz de pontos e renderizar um ponto para cada item */}
      {dots.map((index) => (
        <span
          key={index}
          style={{
            width: index === props.currentIndex ? 48 : 12,
            backgroundColor: index === props.currentIndex ? '#0414A1' : '#C8C8C8',
          }}
          className={styles['dot']}
        />
      ))}
    </div>
  );
}

export default PageControl;
