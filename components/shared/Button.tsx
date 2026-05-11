'use client';

import React from 'react';
import Link from 'next/link';
import styles from './Button.module.css';

interface ButtonProps {
  label: string;
  href?: string;
  onClick?: () => void;
  variant: 'primary' | 'secondary' | 'ghost';
  fullWidth?: boolean;
  target?: '_blank' | '_self';
}

const Button: React.FC<ButtonProps> = ({
  label,
  href,
  onClick,
  variant,
  fullWidth = false,
  target = '_self',
}) => {
  const className = `${styles.button} ${styles[variant]} ${fullWidth ? styles.fullWidth : ''}`;

  if (href) {
    return (
      <Link href={href} className={className} target={target} onClick={onClick}>
        {label}
      </Link>
    );
  }

  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
