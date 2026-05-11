import React from 'react';
import { ProcessStep } from '@/types';
import styles from './ProcessSection.module.css';

interface ProcessSectionProps {
  headline: string;
  steps: ProcessStep[];
}

const ProcessSection: React.FC<ProcessSectionProps> = ({ headline, steps }) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.headline}>{headline}</h2>
        <div className={styles.stepsGrid}>
          {steps.map((step, index) => (
            <div key={index} className={styles.stepItem}>
              <div className={styles.visual}>
                <div className={styles.circle}>
                  <span className={styles.number}>{step.number}</span>
                </div>
                {index < steps.length - 1 && <div className={styles.line}></div>}
              </div>
              <div className={styles.content}>
                <h3 className={styles.title}>{step.title}</h3>
                <p className={styles.description}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
