import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types';
import Badge from '@/components/shared/Badge';
import styles from './ProductsGrid.module.css';

interface ProductsGridProps {
  products: Product[];
}

const ProductsGrid: React.FC<ProductsGridProps> = ({ products }) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {products.map((product, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.imageWrapper}>
                <div className={styles.badgeWrapper}>
                  <Badge text={product.category} variant="tint" />
                </div>
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
                <Link href={product.enquireLink} className={styles.enquire}>
                  Enquire Now &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsGrid;
