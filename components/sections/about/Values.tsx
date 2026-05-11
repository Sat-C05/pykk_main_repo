import React from 'react';
import { Value } from '@/types';
import styles from './Values.module.css';

interface ValuesProps {
  headline: string;
  values: Value[];
}

const Values: React.FC<ValuesProps> = ({ headline, values }) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.headline}>{headline}</h2>
        <div className={styles.grid}>
          {values.map((value, index) => (
            <div key={index} className={styles.card}>
              <h3 className={styles.title}>{value.title}</h3>
              <p className={styles.description}>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
