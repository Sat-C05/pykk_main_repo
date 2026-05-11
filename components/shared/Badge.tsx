import React from 'react';
import styles from './Badge.module.css';

interface BadgeProps {
  text: string;
  variant: 'accent' | 'tint' | 'dark';
}

const Badge: React.FC<BadgeProps> = ({ text, variant }) => {
  return (
    <span className={`${styles.badge} ${styles[variant]}`}>
      {text}
    </span>
  );
};

export default Badge;
