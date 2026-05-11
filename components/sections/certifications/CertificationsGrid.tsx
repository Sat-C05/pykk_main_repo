import React from 'react';
import { Certification } from '@/types';
import styles from './CertificationsGrid.module.css';

interface CertificationsGridProps {
  certifications: Certification[];
}

const CertificationsGrid: React.FC<CertificationsGridProps> = ({ certifications }) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {certifications.map((cert, index) => (
            <div key={index} className={styles.card}>
              <h3 className={styles.certName}>{cert.name}</h3>
              <div className={styles.issuer}>{cert.issuingBody}</div>
              <div className={styles.year}>Verified: {cert.year}</div>
              <p className={styles.description}>{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsGrid;
