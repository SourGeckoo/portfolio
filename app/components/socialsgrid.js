import React from 'react';
import styles from './socialsgrid.module.css';
import BentoBox from './BentoBox';

const SocialsGrid = ({ projects }) => {
  return (
    <div className={styles.container}>
      <div className={styles.bentoGrid}>
        {projects.map((project, index) => (
          <div key={project.slug} className={`${styles.bentoItem} ${styles[`item${index + 1}`]}`}>
            <BentoBox {...project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialsGrid;