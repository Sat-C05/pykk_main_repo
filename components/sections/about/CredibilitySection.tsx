import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CredibilityPoint } from '@/types';
import styles from './CredibilitySection.module.css';

interface CredibilitySectionProps {
  headline: string;
  points: CredibilityPoint[];
  image: string;
  ctaLabel: string;
  ctaHref: string;
}

const CredibilitySection: React.FC<CredibilitySectionProps> = ({
  headline,
  points,
  image,
  ctaLabel,
  ctaHref,
}) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.textContent}>
            <h2 className={styles.headline}>{headline}</h2>
            <div className={styles.points}>
              {points.map((point, index) => (
                <div key={index} className={styles.point}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={styles.icon}>
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className={styles.pointText}>{point.text}</span>
                </div>
              ))}
            </div>
            <Link href={ctaHref} className={styles.cta}>
              {ctaLabel} &rarr;
            </Link>
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src={image}
              alt={headline}
              fill
              className={styles.image}
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredibilitySection;
