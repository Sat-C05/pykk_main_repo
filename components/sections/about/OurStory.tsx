import React from 'react';
import Image from 'next/image';
import styles from './OurStory.module.css';

interface OurStoryProps {
  headline: string;
  paragraphs: string[];
  image: string;
}

const OurStory: React.FC<OurStoryProps> = ({ headline, paragraphs, image }) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.textContent}>
            <h2 className={styles.headline}>{headline}</h2>
            {paragraphs.map((p, index) => (
              <p key={index} className={styles.paragraph}>
                {p}
              </p>
            ))}
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

export default OurStory;
