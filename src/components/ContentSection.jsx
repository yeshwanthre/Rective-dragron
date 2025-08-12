import React from 'react';
import styles from '../styles/ContentSection.module.css';

const ContentSection = () => {
  return (
    <div className={styles.content}>
      <h1 data-content="Yeshwanth">
        Yeshwanth
      </h1>
      <div className={styles.author}>
        <h2>Yesh Design</h2>
        <p><b>Designer</b></p>
        <p>
          Subscribe to the channel to watch many interesting videos & photos
        </p>
      </div>
      <div className={styles.model} aria-label="Model image" role="img"></div>
    </div>
  );
};

export default ContentSection;
