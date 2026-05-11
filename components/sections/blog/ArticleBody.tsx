import React from 'react';
import { BlogPost } from '@/types';
import Button from '@/components/shared/Button';
import Sidebar from './Sidebar';
import styles from './ArticleBody.module.css';

interface ArticleBodyProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
  whatsappNumber: string;
}

const ArticleBody: React.FC<ArticleBodyProps> = ({ post, relatedPosts, whatsappNumber }) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <article className={styles.article}>
            <div className={styles.intro}>{post.intro}</div>
            {post.content.map((block, index) => (
              <div key={index} className={styles.block}>
                {block.type === 'h2' && <h2 className={styles.h2}>{block.text}</h2>}
                {block.type === 'paragraph' && <p className={styles.p}>{block.text}</p>}
                {block.type === 'list' && (
                  <ul className={styles.ul}>
                    {block.items?.map((item, i) => (
                      <li key={i} className={styles.li}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
            <div className={styles.articleCta}>
              <Button label="Discuss This Project" href="/contact" variant="primary" />
            </div>
          </article>
          <div className={styles.sidebarWrapper}>
            <Sidebar whatsappNumber={whatsappNumber} relatedPosts={relatedPosts} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticleBody;
