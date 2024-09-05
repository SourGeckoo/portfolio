import React from 'react';
import styles from './socialsgrid.module.css';
import SocialsBox from './socialsbox';

const SocialsGrid = ({ projects }) => {
  return (
    <div className={styles.container}>
      <div className={styles.bentoGrid}>
        {projects.map((project, index) => (
          <div className={`${styles.bentoItem} ${styles[`item${index + 1}`]}`}>
            <SocialsBox {...project}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialsGrid;