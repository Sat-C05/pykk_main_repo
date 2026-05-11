import React from 'react';
import styles from './ClientLogos.module.css';

interface ClientLogosProps {
  title: string;
  logos: Array<{ label: string }>;
}

const ClientLogos: React.FC<ClientLogosProps> = ({ title, logos }) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.grid}>
          {logos.map((logo, index) => (
            <div key={index} className={styles.logoBox}>
              <span className={styles.logoText}>{logo.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
