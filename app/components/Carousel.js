"use client";

import React, { useState, useCallback } from 'react';
import styles from './Carousel.module.css';
import PhotoBox from './photobox';

const Carousel = ({ photos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const moveCarousel = useCallback((direction) => {
    setCurrentIndex((prevIndex) => {
      if (direction === 'next') {
        return (prevIndex + 1) % photos.length;
      } else if (direction === 'prev') {
        return (prevIndex - 1 + photos.length) % photos.length;
      }
      return prevIndex;
    });
  }, [photos.length]);

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carouselWrapper}>
        <div 
          className={styles.carousel}
          style={{ transform: `translateX(-${currentIndex * (100 / Math.min(photos.length, 3))}%)` }}
        >
          {photos.map((photo, index) => (
            <div 
              key={index} 
              className={`${styles.carouselItem} ${index === currentIndex ? styles.focused : styles.blurred}`}
            >
              <PhotoBox {...photo} />
            </div>
          ))}
        </div>
        <div className={styles.buttonContainer}>
          <button className={`${styles.carouselButton} ${styles.prevButton}`} onClick={() => moveCarousel('prev')}>
            &lt;
          </button>
          <button className={`${styles.carouselButton} ${styles.nextButton}`} onClick={() => moveCarousel('next')}>
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;