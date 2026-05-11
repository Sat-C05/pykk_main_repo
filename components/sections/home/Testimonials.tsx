import React from 'react';
import { Testimonial } from '@/types';
import styles from './Testimonials.module.css';

interface TestimonialsProps {
  headline: string;
  testimonials: Testimonial[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ headline, testimonials }) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.headline}>{headline}</h2>
        <div className={styles.grid}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.card}>
              <span className={styles.quoteMark}>&ldquo;</span>
              <p className={styles.quote}>{testimonial.quote}</p>
              <div className={styles.divider}></div>
              <div className={styles.author}>
                <h4 className={styles.name}>{testimonial.name}</h4>
                <p className={styles.role}>
                  {testimonial.role}, {testimonial.company}
                </p>
                <p className={styles.location}>{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
