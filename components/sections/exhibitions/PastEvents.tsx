import React from 'react';
import { PastEvent } from '@/types';
import styles from './PastEvents.module.css';

interface PastEventsProps {
  events: PastEvent[];
}

const PastEvents: React.FC<PastEventsProps> = ({ events }) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.headline}>Past Exhibitions</h2>
        <div className={styles.table}>
          {events.map((event, index) => (
            <div key={index} className={styles.row}>
              <div className={styles.eventTitle}>{event.title}</div>
              <div className={styles.details}>
                <span className={styles.year}>{event.year}</span>
                <span className={styles.dot}>&bull;</span>
                <span className={styles.venue}>{event.venue}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PastEvents;
