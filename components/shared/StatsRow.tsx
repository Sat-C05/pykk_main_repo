import React from 'react';
import { Stat } from '@/types';
import styles from './StatsRow.module.css';

interface StatsRowProps {
  stats: Stat[];
}

const StatsRow: React.FC<StatsRowProps> = ({ stats }) => {
  return (
    <section className={styles.statsRow}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statBlock}>
              <div className={styles.value}>{stat.value}</div>
              <div className={styles.label}>{stat.label}</div>
              {stat.description && <p className={styles.description}>{stat.description}</p>}
              {index < stats.length - 1 && <div className={styles.divider}></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsRow;
