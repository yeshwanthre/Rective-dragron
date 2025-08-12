import React from 'react';
import styles from '../styles/ImageSlider.module.css';

const ImageSlider = ({ images }) => {
  return (
    <div className={styles.slider}>
      <div className={styles.itemContainer} style={{ '--quantity': images.length.toString() }}>
        {images.map((image, index) => (
          <div 
            key={index} 
            className={styles.item}
            style={{ '--position': (index + 1).toString() }}
          >
            <img src={image} alt={`Dragon ${index + 1}`} loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
