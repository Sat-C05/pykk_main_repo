import React from 'react';
import styles from './CredibilityBar.module.css';

interface CredibilityBarProps {
  items: Array<{ icon: string; text: string }>;
}

const CredibilityBar: React.FC<CredibilityBarProps> = ({ items }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'verified':
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
        );
      case 'inventory_2':
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="21 8 21 21 3 21 3 8"></polyline>
            <rect x="1" y="3" width="22" height="5"></rect>
            <line x1="10" y1="12" x2="14" y2="12"></line>
          </svg>
        );
      case 'schedule':
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className={styles.bar}>
      <div className={styles.container}>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <div className={styles.item}>
              <span className={styles.icon}>{getIcon(item.icon)}</span>
              <span className={styles.text}>{item.text}</span>
            </div>
            {index < items.length - 1 && <div className={styles.divider}></div>}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default CredibilityBar;
