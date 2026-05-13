'use client';

import React, { useState } from 'react';
import styles from './ServiceTiers.module.css';
import Button from '@/components/shared/Button';
import Link from 'next/link';

interface Tier {
  id: string;
  label: string;
  name: string;
  oneLine: string;
  headline: string;
  includes: string[];
  bestFor: string;
}

const tiers: Tier[] = [
  {
    id: 'tier1',
    label: 'Tier 1',
    name: 'Presence',
    oneLine: 'Your professional digital address — built and live fast.',
    headline: 'Everything you need to exist professionally online.',
    includes: [
      'Single-page static website',
      'Company name and logo',
      'Clear description of what you do',
      'Products or services list with photos',
      'Contact information',
      'WhatsApp button',
    ],
    bestFor: 'Businesses establishing their first digital address. If you have no website today, this is where you start.',
  },
  {
    id: 'tier2',
    label: 'Tier 2',
    name: 'Growth',
    oneLine: 'A complete website that works as hard as you do.',
    headline: 'A full multi-page website designed to generate inquiries.',
    includes: [
      'Multi-page structure — Home, About, Products/Services, Contact, Gallery',
      'Custom branding applied throughout',
      'Mobile optimized — built and tested on all screen sizes',
      'Enquiry form',
      'WhatsApp integration',
      'Google Maps embed',
      'Google Analytics setup',
    ],
    bestFor: 'Businesses ready to scale their lead generation and establish a more robust professional footprint.',
  },
  {
    id: 'tier3',
    label: 'Tier 3',
    name: 'Authority',
    oneLine: 'A conversion machine built around your business goals.',
    headline: 'Everything in Growth — plus the architecture to actively bring in new customers.',
    includes: [
      'Everything in the Growth tier',
      'Conversion-focused site architecture — designed around a specific business goal, not just pages',
      'Custom color and typography system derived from your brand',
      'Content writing assistance — AI-assisted, reviewed and refined for your business',
      'SEO setup — meta tags, headings, image alt text, page speed optimization',
      'Google Search Console setup and sitemap submission',
      'Google Business Profile setup',
      'Company domain email (you@yourcompany.com)',
    ],
    bestFor: 'Market leaders who require a comprehensive conversion system that actively drives new business acquisition.',
  },
];

const ServiceTiers: React.FC = () => {
  const [allExpanded, setAllExpanded] = useState(false);

  const toggleAll = () => {
    setAllExpanded(!allExpanded);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {tiers.map((tier) => {
            return (
              <div 
                key={tier.id} 
                className={`${styles.card} ${allExpanded ? styles.expanded : ''}`}
              >
                <div className={styles.collapsedContent}>
                  <span className={styles.label}>{tier.label}</span>
                  <h3 className={styles.name}>{tier.name}</h3>
                  <p className={styles.oneLine}>{tier.oneLine}</p>
                  <button 
                    className={styles.expandButton} 
                    onClick={toggleAll}
                  >
                    {allExpanded ? 'Hide All Details' : "See What's Included"}
                  </button>
                </div>

                {allExpanded && (
                  <div className={styles.expandedContent}>
                    <div className={styles.divider}></div>
                    <h4 className={styles.expandedHeadline}>{tier.headline}</h4>
                    <ul className={styles.includesList}>
                      {tier.includes.map((item, idx) => (
                        <li key={idx}>
                          <span className={styles.check}>✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    
                    <div className={styles.bottomSection}>
                      <div className={styles.bestFor}>
                        <strong>Best for:</strong>
                        <p>{tier.bestFor}</p>
                      </div>
                      <div className={styles.ctaWrapper}>
                        <Button 
                          label="This sounds right for us" 
                          href="/contact" 
                          variant="primary" 
                          fullWidth 
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className={styles.footer}>
          <p className={styles.footerMuted}>
            Not sure which tier fits your business? Tell us what you need and we&apos;ll recommend the right one.
          </p>
          <div className={styles.footerButton}>
            <Button label="Talk to Us" href="/contact" variant="secondary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceTiers;
