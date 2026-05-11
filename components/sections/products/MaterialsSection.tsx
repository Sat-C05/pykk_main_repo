import React from 'react';
import { Material } from '@/types';
import styles from './MaterialsSection.module.css';

interface MaterialsSectionProps {
  headline: string;
  materials: Material[];
}

const MaterialsSection: React.FC<MaterialsSectionProps> = ({ headline, materials }) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.headline}>{headline}</h2>
        <div className={styles.tags}>
          {materials.map((material, index) => (
            <div key={index} className={styles.tag}>
              {material.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MaterialsSection;
