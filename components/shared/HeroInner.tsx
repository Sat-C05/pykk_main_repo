import React from 'react';
import Image from 'next/image';
import Badge from '@/components/shared/Badge';
import styles from './HeroInner.module.css';

interface HeroInnerProps {
  badge: string;
  headline: string;
  subline: string;
  backgroundImage: string;
}

const HeroInner: React.FC<HeroInnerProps> = ({
  badge,
  headline,
  subline,
  backgroundImage,
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
          <p className={styles.subline}>{subline}</p>
        </div>
      </div>
    </section>
  );
};

export default HeroInner;
