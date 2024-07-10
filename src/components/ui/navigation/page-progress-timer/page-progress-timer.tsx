import React, { useEffect, useState } from 'react';
import styles from './page-progress-timer.module.css';

interface PageProgressTimerProps {
  total: number;
  currentIndex: number;
  timer: number;
}

const PageProgressTimer: React.FC<PageProgressTimerProps> = ({
  total,
  currentIndex,
  timer,
}) => {
  const [activeIndex, setActiveIndex] = useState(currentIndex);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % total);
    }, timer);

    return () => clearInterval(intervalId);
  }, [total, timer]);

  return (
    <div className={styles.indicators}>
      {Array.from({ length: total }, (_, index) => (
        <div
          key={index}
          className={`${styles.indicator} ${index === activeIndex ? styles.active : ''}`}
          style={index === activeIndex ? { '--animation-duration': `${timer}ms` } as React.CSSProperties : {}}
        />
      ))}
    </div>
  );
};

export default PageProgressTimer;