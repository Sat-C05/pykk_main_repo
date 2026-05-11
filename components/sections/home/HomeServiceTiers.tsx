import React from 'react';
import styles from './HomeServiceTiers.module.css';
import Button from '@/components/shared/Button';

const homeTiers = [
  {
    label: 'Tier 1',
    name: 'Presence',
    description: 'Your professional digital address. Built for speed and immediate credibility.',
    highlights: ['Single-page Site', 'WhatsApp Integration', 'Logo & Branding'],
    cta: 'View Full Tier 1 Details'
  },
  {
    label: 'Tier 2',
    name: 'Growth',
    description: 'A complete multi-page website designed to generate and capture real business inquiries.',
    highlights: ['Multi-page Layout', 'Enquiry Form', 'Google Maps & Analytics'],
    cta: 'View Full Tier 2 Details'
  },
  {
    label: 'Tier 3',
    name: 'Authority',
    description: 'A comprehensive conversion system for market leaders. Engineered for acquisition.',
    highlights: ['Full SEO Setup', 'Content Writing Assistance', 'Company Domain Email'],
    cta: 'View Full Tier 3 Details'
  }
];

const HomeServiceTiers: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.headline}>Service Tiers</h2>
          <p className={styles.subline}>Professional web development scoped to your business stage.</p>
        </div>
        <div className={styles.grid}>
          {homeTiers.map((tier, index) => (
            <div key={index} className={styles.card}>
              <span className={styles.label}>{tier.label}</span>
              <h3 className={styles.name}>{tier.name}</h3>
              <p className={styles.description}>{tier.description}</p>
              <ul className={styles.highlights}>
                {tier.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
              <div className={styles.cta}>
                <Button label={tier.cta} href="/products" variant="secondary" fullWidth />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeServiceTiers;
