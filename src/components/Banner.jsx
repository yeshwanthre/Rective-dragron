import React from 'react';
import ImageSlider from './ImageSlider';
import ContentSection from './ContentSection';
import styles from '../styles/Banner.module.css';

const Banner = () => {
  const dragonImages = Array.from({ length: 10 }, (_, i) => `/images/dragon_${i + 1}.jpg`);

  return (
    <div className={styles.banner}>
      <div className={styles.sliderContainer}>
        <ImageSlider images={dragonImages} />
      </div>
      <ContentSection />
    </div>
  );
};

export default Banner;
