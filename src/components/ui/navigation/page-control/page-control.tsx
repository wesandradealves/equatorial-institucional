'use client'
import styles from './page-control.module.scss';
import React, { useState } from 'react';

interface PageControlProps {
  totalPages: number;
  currentIndex: number;
  onChangeIndex?: (index: number) => void;
}

const PageControl: React.FC<PageControlProps> = ({ totalPages, currentIndex, onChangeIndex }) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(currentIndex);

  const handleIndexClick = (index: number) => {
    setSelectedIndex(index);
    if (onChangeIndex) {
      onChangeIndex(index);
    }
  };

  return (
    <div className={styles.pageControl}>
      {Array.from({ length: totalPages }, (_, index) => (
        <div
          key={index}
          className={`${styles.pageIndicator} ${index === currentIndex ? styles.active : ''}`}
          onClick={() => handleIndexClick(index)}
        ></div>
      ))}
    </div>
  );
};

export default PageControl;
