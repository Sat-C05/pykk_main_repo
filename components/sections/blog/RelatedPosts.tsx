import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BlogPost } from '@/types';
import Badge from '@/components/shared/Badge';
import styles from './RelatedPosts.module.css';

interface RelatedPostsProps {
  headline: string;
  posts: BlogPost[];
}

const RelatedPosts: React.FC<RelatedPostsProps> = ({ headline, posts }) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.headline}>{headline}</h2>
        <div className={styles.grid}>
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className={styles.image}
                />
              </div>
              <div className={styles.content}>
                <div className={styles.badgeWrapper}>
                  <Badge text={post.category} variant="tint" />
                </div>
                <h3 className={styles.title}>{post.title}</h3>
                <p className={styles.excerpt}>{post.excerpt}</p>
                <div className={styles.meta}>
                  {post.date} &bull; {post.author}
                </div>
                <span className={styles.readMore}>Read More &rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedPosts;
