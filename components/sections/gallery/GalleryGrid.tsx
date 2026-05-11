import React from 'react';
import Image from 'next/image';
import styles from './GalleryGrid.module.css';

interface GalleryGridProps {
  images: Array<{ url: string; label: string }>;
}

const GalleryGrid: React.FC<GalleryGridProps> = ({ images }) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {images.map((image, index) => (
            <div key={index} className={styles.item}>
              <div className={styles.imageWrapper}>
                <Image
                  src={image.url}
                  alt={image.label}
                  fill
                  className={styles.image}
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryGrid;
