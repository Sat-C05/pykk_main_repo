import React from 'react';
import styles from './CredibilityPoints.module.css';

interface CredibilityPointsProps {
  items: Array<{ icon: string; text: string; subline?: string }>;
}

const CredibilityPoints: React.FC<CredibilityPointsProps> = ({ items }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'verified':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg>
        );
      case 'inventory_2':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="21 8 21 21 3 21 3 8"></polyline>
            <rect x="1" y="3" width="22" height="5"></rect>
            <line x1="10" y1="12" x2="14" y2="12"></line>
          </svg>
        );
      case 'schedule':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {items.map((item, index) => (
            <div key={index} className={styles.item}>
              <div className={styles.icon}>{getIcon(item.icon)}</div>
              <div className={styles.text}>
                <div className={styles.label}>{item.text}</div>
                {item.subline && <div className={styles.subline}>{item.subline}</div>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CredibilityPoints;
