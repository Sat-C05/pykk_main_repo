'use client';

import React, { useState } from 'react';
import Button from '@/components/shared/Button';
import styles from './EnquiryForm.module.css';

interface EnquiryFormProps {
  whatsappNumber?: string;
  products?: any[]; // Kept as any or optional to avoid errors if passed but not used
  materials?: any[];
}

const EnquiryForm: React.FC<EnquiryFormProps> = ({ whatsappNumber }) => {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    phone: '',
    email: '',
    requirements: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [reference, setReference] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Generate unique reference number PYKK-YYYY-NNNN
    const year = new Date().getFullYear();
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const refId = `PYKK-${year}-${randomNum}`;
    
    setReference(refId);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h2 className={styles.headline}>Thank You.</h2>
            <p className={styles.subline} style={{ fontSize: '1.25rem', color: 'var(--color-accent)', fontWeight: 'bold' }}>
              Your inquiry reference is {reference}.
            </p>
            <p className={styles.mutedText} style={{ marginTop: '1rem', fontSize: '1.125rem' }}>
              We will contact you within 24 hours.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.headline}>Project Enquiry Form</h2>
          <p className={styles.subline}>Fill out the details below and we will get back to you within 24 hours.</p>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.row}>
            <div className={styles.field}>
              <label htmlFor="name">Full Name*</label>
              <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} />
            </div>
            <div className={styles.field}>
              <label htmlFor="businessName">Business Name*</label>
              <input type="text" id="businessName" name="businessName" required value={formData.businessName} onChange={handleChange} />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.field}>
              <label htmlFor="email">Email Address*</label>
              <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} />
            </div>
            <div className={styles.field}>
              <label htmlFor="phone">Phone Number*</label>
              <input type="tel" id="phone" name="phone" required value={formData.phone} onChange={handleChange} />
            </div>
          </div>

          <div className={styles.field}>
            <label htmlFor="requirements">What do you need?*</label>
            <textarea id="requirements" name="requirements" rows={5} required value={formData.requirements} onChange={handleChange}></textarea>
          </div>

          <div className={styles.submitRow}>
            <Button label="Submit Enquiry" variant="primary" fullWidth />
          </div>
          
          {whatsappNumber && (
            <div className={styles.info}>
              <p className={styles.mutedText}>Prefer direct chat? Click the button below to message us directly.</p>
              <div className={styles.secondaryActions}>
                  <Button label="Chat with Sales" href={`https://wa.me/${whatsappNumber}`} variant="secondary" fullWidth />
              </div>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default EnquiryForm;
