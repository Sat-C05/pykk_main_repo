import React from 'react';
import Image from 'next/image';
import Badge from '@/components/shared/Badge';
import Button from '@/components/shared/Button';
import styles from './HeroMain.module.css';

interface HeroMainProps {
  badge: string;
  headline: string;
  subheadline: string;
  trustSignals: string;
  backgroundImage: string;
  primaryButton: { label: string; href: string };
  secondaryButton: { label: string; href: string };
}

const HeroMain: React.FC<HeroMainProps> = ({
  badge,
  headline,
  subheadline,
  trustSignals,
  backgroundImage,
  primaryButton,
  secondaryButton,
}) => {
  return (
    <section className={styles.hero}>
      <Image
        src={backgroundImage}
        alt={headline}
        fill
        className={styles.bgImage}
        style={{ objectFit: 'cover' }}
        priority
      />
      <div className={styles.overlay}></div>
      <div className={styles.container}>
        <div className={styles.content}>
          <Badge text={badge} variant="accent" />
          <h1 className={styles.headline}>{headline}</h1>
          <p className={styles.subheadline}>{subheadline}</p>
          <div className={styles.buttonGroup}>
            <Button label={primaryButton.label} href={primaryButton.href} variant="primary" />
            <Button label={secondaryButton.label} href={secondaryButton.href} variant="ghost" />
          </div>
          <p className={styles.trustSignals}>{trustSignals}</p>
        </div>
      </div>
    </section>
  );
};

export default HeroMain;
