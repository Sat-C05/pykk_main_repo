import React from 'react';
import Link from 'next/link';
import { CompanyInfo, NavLink } from '@/types';
import Button from '@/components/shared/Button';
import styles from './Footer.module.css';

interface FooterProps {
  company: CompanyInfo;
  primaryNav: NavLink[];
  secondaryNav: NavLink[];
  whatsappNumber: string;
}

const Footer: React.FC<FooterProps> = ({ company, primaryNav, secondaryNav, whatsappNumber }) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.topBorder}></div>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Col 1: Brand */}
          <div className={styles.col}>
            <h3 className={styles.brand}>{company.name}</h3>
            <p className={styles.tagline}>{company.tagline}</p>
            <div className={styles.contactInfo}>
              <p>{company.phone}</p>
              <p>{company.email}</p>
              <p>{company.address}</p>
            </div>
          </div>

          {/* Col 2: Company Links */}
          <div className={styles.col}>
            <h4 className={styles.label}>COMPANY</h4>
            <ul className={styles.linkList}>
              {primaryNav.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={styles.link}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: More Links */}
          <div className={styles.col}>
            <h4 className={styles.label}>MORE</h4>
            <ul className={styles.linkList}>
              {secondaryNav.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={styles.link}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Call to Action */}
          <div className={styles.col}>
            <h4 className={styles.label}>GET IN TOUCH</h4>
            <p className={styles.ctaText}>Let&apos;s discuss how we can build your knowledge capital.</p>
            <div className={styles.footerActions}>
              <Button
                label="WhatsApp Us"
                href={`https://wa.me/${whatsappNumber}`}
                variant="primary"
                fullWidth
              />
              <Link href="/contact" className={styles.textLink}>
                Schedule Consultation &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottomBar}>
        <div className={styles.container}>
          <div className={styles.bottomBarInner}>
            <p className={styles.copyright}>
              &copy; {new Date().getFullYear()} {company.name}. All rights reserved.
            </p>
            <p className={styles.address}>{company.address}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
