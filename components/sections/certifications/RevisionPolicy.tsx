import React from 'react';
import styles from './RevisionPolicy.module.css';

const RevisionPolicy: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.headline}>Standard Revision Policy</h2>
        <p className={styles.intro}>Revisions are corrections, not additions. All rounds must be completed within 14 days of delivery.</p>
        
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3 className={styles.tier}>Tier 1</h3>
            <p className={styles.count}>1 Revision Round</p>
            <p className={styles.detail}>Fixing what was agreed upon in the brief.</p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.tier}>Tier 2</h3>
            <p className={styles.count}>2 Revision Rounds</p>
            <p className={styles.detail}>Iterative refinements to branding and content.</p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.tier}>Tier 3</h3>
            <p className={styles.count}>3 Revision Rounds</p>
            <p className={styles.detail}>Comprehensive conversion-path optimization.</p>
          </div>
        </div>
        
        <div className={styles.footer}>
          <p>A revision = fixing what was agreed. Not adding what was not.</p>
        </div>
      </div>
    </section>
  );
};

export default RevisionPolicy;
