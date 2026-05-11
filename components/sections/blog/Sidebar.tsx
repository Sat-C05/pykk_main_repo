import React from 'react';
import Link from 'next/link';
import { BlogPost } from '@/types';
import Button from '@/components/shared/Button';
import styles from './Sidebar.module.css';

interface SidebarProps {
  whatsappNumber: string;
  relatedPosts: BlogPost[];
}

const Sidebar: React.FC<SidebarProps> = ({ whatsappNumber, relatedPosts }) => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.ctaCard}>
        <h3 className={styles.ctaTitle}>Get a Quote</h3>
        <p className={styles.ctaSubline}>Send drawings, get a quote in 48 hours.</p>
        <div className={styles.actions}>
          <Button
            label="WhatsApp Us"
            href={`https://wa.me/${whatsappNumber}`}
            variant="primary"
            fullWidth
          />
          <div className={styles.secondaryAction}>
            <Button
              label="Request Online"
              href="/contact"
              variant="secondary"
              fullWidth
            />
          </div>
        </div>
      </div>

      <div className={styles.related}>
        <h4 className={styles.label}>MORE ARTICLES</h4>
        <div className={styles.postList}>
          {relatedPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className={styles.postLink}>
              {post.title}
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
