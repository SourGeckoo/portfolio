import React from 'react';
import styles from './photogrid.module.css';
import PhotoBox from './photobox';

const PhotoGrid = ({ projects }) => {
  return (
    <div className={styles.container}>
      <div className={styles.bentoGrid}>
        {projects.map((project, index) => (
          <div className={`${styles.bentoItem} ${styles[`item${index + 1}`]}`}>
            <PhotoBox {...project}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGrid;