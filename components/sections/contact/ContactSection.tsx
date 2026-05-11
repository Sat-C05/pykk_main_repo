import React from 'react';
import { CompanyInfo } from '@/types';
import styles from './ContactSection.module.css';

interface ContactSectionProps {
  company: CompanyInfo;
}

const ContactSection: React.FC<ContactSectionProps> = ({ company }) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.details}>
            <div className={styles.item}>
              <div className={styles.icon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div className={styles.text}>
                <label>Phone</label>
                <a href={`tel:${company.phone}`}>{company.phone}</a>
              </div>
            </div>

            <div className={styles.item}>
              <div className={styles.icon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div className={styles.text}>
                <label>Email</label>
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </div>
            </div>

            <div className={styles.item}>
              <div className={styles.icon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div className={styles.text}>
                <label>Address</label>
                <p>{company.address}</p>
              </div>
            </div>

            <div className={styles.item}>
              <div className={styles.icon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <div className={styles.text}>
                <label>Hours</label>
                <p>Mon — Sat: 9:00 AM — 6:00 PM</p>
              </div>
            </div>
          </div>

          <div className={styles.map}>
            <iframe
              src={company.mapEmbedUrl}
              width="100%"
              height="480"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              title="Factory Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
