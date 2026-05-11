import React from 'react';
import styles from './PricingTable.module.css';

interface PricingItem {
  service: string;
  price: string;
}

const pricingData: PricingItem[] = [
  { service: "SEO Setup & Optimization", price: "Keyword research, technical audits, and performance tuning for higher search rankings." },
  { service: "Extra Custom Pages", price: "Additional pages tailored to specific business needs, following the same quality standards." },
  { service: "Professional Content Writing", price: "High-impact copy written for your audience, reviewed and refined for your brand voice." },
  { service: "Google Business Profile Setup", price: "Complete setup and verification of your business on Google Maps for local visibility." },
  { service: "Company Domain Email", price: "Professional email addresses (you@yourcompany.com) to build trust and authority." },
  { service: "Advanced Analytics Setup", price: "Custom Google Analytics 4 configuration to track user behavior and conversion goals." },
  { service: "WhatsApp Catalog Integration", price: "Displaying your products directly in WhatsApp for seamless customer browsing." },
  { service: "Multilingual Support", price: "Translating and optimizing your site for diverse linguistic audiences." },
  { service: "Website Funnel Design", price: "Architecture designed to guide users toward specific high-value business actions." },
  { service: "Sitemap and Search Console", price: "Ensuring Google can find, crawl, and index your entire site correctly." },
  { service: "Social Media Alignment", price: "Updating your profiles to match the professional aesthetic of your new website." },
  { service: "QR Code Integration", price: "Branded QR codes for physical marketing assets linking to your digital presence." },
  { service: "Monthly Support Retainer", price: "Ongoing technical maintenance, security updates, and performance monitoring." },
];

const PricingTable: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Service Add-On</th>
                <th>Deliverables & Details</th>
              </tr>
            </thead>
            <tbody>
              {pricingData.map((item, index) => (
                <tr key={index}>
                  <td>{item.service}</td>
                  <td>{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default PricingTable;
