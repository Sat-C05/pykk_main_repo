'use client';

import React, { useState } from 'react';
import { FaqItem } from '@/types';
import styles from './FaqSection.module.css';

interface FaqSectionProps {
  faqs: FaqItem[];
}

const FaqSection: React.FC<FaqSectionProps> = ({ faqs }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.headline}>Frequently Asked Questions</h2>
        <div className={styles.accordion}>
          {faqs.map((faq, index) => (
            <div key={index} className={styles.item}>
              <button
                className={styles.question}
                onClick={() => toggleAccordion(index)}
                aria-expanded={activeIndex === index}
              >
                <span>{faq.question}</span>
                <span className={styles.icon}>
                    {activeIndex === index ? '−' : '+'}
                </span>
              </button>
              {activeIndex === index && (
                <div className={styles.answer}>
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
