import styles from './status.module.scss';

/* eslint-disable-next-line */
export interface StatusProps {}

export function Status(props: StatusProps) {
  return (
    <div className={styles['container']}>
      <div className={styles['first']}>
        <div className={styles['ellipse']}></div>
        <span>Bandeira tarifária: verde</span>
      </div>

      <div>
        <span>Desligamento programado</span>
      </div>
    </div>
  );
}

export default Status;
