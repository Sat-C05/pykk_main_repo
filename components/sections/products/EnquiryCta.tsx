import React from 'react';
import Button from '@/components/shared/Button';
import styles from './EnquiryCta.module.css';

interface EnquiryCtaProps {
  headline: string;
  subline: string;
  whatsappNumber: string;
}

const EnquiryCta: React.FC<EnquiryCtaProps> = ({ headline, subline, whatsappNumber }) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.headline}>{headline}</h2>
        <p className={styles.subline}>{subline}</p>
        <div className={styles.actions}>
          <Button
            label="Enquire via WhatsApp"
            href={`https://wa.me/${whatsappNumber}`}
            variant="ghost"
          />
        </div>
      </div>
    </section>
  );
};

export default EnquiryCta;
