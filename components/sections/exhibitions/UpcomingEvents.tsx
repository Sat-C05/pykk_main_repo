import React from 'react';
import { Event } from '@/types';
import Button from '@/components/shared/Button';
import styles from './UpcomingEvents.module.css';

interface UpcomingEventsProps {
  events: Event[];
}

const UpcomingEvents: React.FC<UpcomingEventsProps> = ({ events }) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.list}>
          {events.map((event, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.date}>{event.date}</div>
              <div className={styles.content}>
                <h3 className={styles.title}>{event.title}</h3>
                <div className={styles.venue}>{event.venue}</div>
                <p className={styles.description}>{event.description}</p>
                <div className={styles.actions}>
                  <Button label="Register Now" href={event.registrationLink} variant="primary" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
