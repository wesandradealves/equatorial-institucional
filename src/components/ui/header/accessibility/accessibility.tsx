import styles from './accessibility.module.scss';

/* eslint-disable-next-line */
export interface AccessibilityProps {}

export function Accessibility(props: AccessibilityProps) {
  return (
    <div className={styles['container']}>
      <button className={styles['accessibility']}>
        <img src="/images/accessibility.png" />
      </button>
    </div>
  );
}

export default Accessibility;
