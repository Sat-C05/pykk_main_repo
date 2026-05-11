import React from 'react';
import styles from './ServiceAddons.module.css';
import Button from '@/components/shared/Button';

interface Addon {
  name: string;
  description: string;
}

const addons: Addon[] = [
  { name: "SEO Setup", description: "Meta tags, headings, image alt text, and speed optimization so Google can find and rank your site" },
  { name: "Extra Pages", description: "Additional pages beyond your tier's default structure — built to the same standard" },
  { name: "Content Writing", description: "Professional copy written for your business, AI-assisted and reviewed for accuracy and tone" },
  { name: "Google Business Profile Setup", description: "Your business on Google Maps, fully filled out and verified — visible to local searchers" },
  { name: "Company Email Setup", description: "A professional email at your own domain (you@yourcompany.com) instead of Gmail" },
  { name: "Analytics Setup", description: "Google Analytics installed and configured so you can see who visits your site and what they do" },
  { name: "WhatsApp Catalog Integration", description: "Your products or services listed directly inside WhatsApp — customers browse without leaving the app" },
  { name: "Multilingual Support", description: "Your site in more than one language — useful for businesses serving diverse customer bases" },
  { name: "Website Funnel Design", description: "Conversion flow architecture — every page and button designed to guide visitors toward a specific action" },
  { name: "Sitemap and Search Console", description: "Sitemap generated and submitted to Google so your pages get indexed faster" },
  { name: "Social Media Profile Alignment", description: "Your social profiles updated to match the look and feel of your new website" },
  { name: "QR Code Integration", description: "A branded QR code that links directly to your site or WhatsApp — for print, packaging, or business cards" },
  { name: "Monthly Maintenance Retainer", description: "Ongoing support — content updates, fixes, domain reminders, and a monthly analytics summary" },
];

const ServiceAddons: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.headline}>Need Something Extra?</h2>
          <p className={styles.intro}>
            Every add-on below is available across all three tiers. Tell us what you need and we'll let you know what makes sense for your specific build.
          </p>
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Add-On</th>
                <th>What It Does</th>
              </tr>
            </thead>
            <tbody>
              {addons.map((addon, index) => (
                <tr key={index}>
                  <td className={styles.addonName}>{addon.name}</td>
                  <td className={styles.addonDesc}>{addon.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={styles.footer}>
          <p className={styles.footerMuted}>Unsure what you need? Just tell us your goal.</p>
          <div className={styles.footerButton}>
            <Button label="Get in Touch" href="/contact" variant="primary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAddons;
