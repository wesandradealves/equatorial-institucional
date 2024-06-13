import ServiceCard from '../../../../components/ui/patterns/card/service-card/service-card';
import styles from './page.module.scss';

export default function Index() {
    return (
        <div className={styles['container']}>
          <h1>Componente Service Card</h1>
          <div className={styles['component']}>
            <ServiceCard/>
          </div>
          <div className={styles.component}>
            <ServiceCard theme='dark'/>
          </div>
          <div className={styles.component}>
            <ServiceCard title='Informar falta de luz' symbols='flash_off'/>
          </div>
        </div>
      );
}
