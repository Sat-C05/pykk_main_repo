import React from 'react';
import Button from '@/components/shared/Button';
import styles from './CtaBand.module.css';

interface CtaBandProps {
  headline: string;
  subline: string;
  primaryButton: { label: string; href: string };
  secondaryButton?: { label: string; href: string };
}

const CtaBand: React.FC<CtaBandProps> = ({
  headline,
  subline,
  primaryButton,
  secondaryButton,
}) => {
  return (
    <section className={styles.ctaBand}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.headline}>{headline}</h2>
          <p className={styles.subline}>{subline}</p>
          <div className={styles.buttonGroup}>
            <Button label={primaryButton.label} href={primaryButton.href} variant="ghost" />
            {secondaryButton && (
              <Button
                label={secondaryButton.label}
                href={secondaryButton.href}
                variant="primary"
                // Custom style for secondary button in CtaBand per spec: white bg, accent text
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBand;
