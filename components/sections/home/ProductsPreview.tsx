import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types';
import styles from './ProductsPreview.module.css';

interface ProductsPreviewProps {
  headline: string;
  intro: string;
  products: Product[];
  viewAllLink: string;
}

const ProductsPreview: React.FC<ProductsPreviewProps> = ({
  headline,
  intro,
  products,
  viewAllLink,
}) => {
  // Show first 4 products only per spec
  const displayedProducts = products.slice(0, 4);

  return (
    <section className={styles.section}>
      <div className={`${styles.container} reveal`}>
        <div className={styles.header}>
          <h2 className={styles.headline}>{headline}</h2>
          <p className={styles.intro}>{intro}</p>
        </div>
        <div className={styles.grid}>
          {displayedProducts.map((product, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className={styles.image}
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className={styles.content}>
                <h3 className={styles.title}>{product.name}</h3>
                <p className={styles.description}>{product.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.footer}>
          <Link href={viewAllLink} className={styles.viewAll}>
            View All Products &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsPreview;
