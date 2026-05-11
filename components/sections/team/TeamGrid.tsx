import React from 'react';
import Image from 'next/image';
import { TeamMember } from '@/types';
import styles from './TeamGrid.module.css';

interface TeamGridProps {
  members: TeamMember[];
}

const TeamGrid: React.FC<TeamGridProps> = ({ members }) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {members.map((member, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className={styles.image}
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className={styles.content}>
                <h3 className={styles.name}>{member.name}</h3>
                <span className={styles.role}>{member.role}</span>
                <p className={styles.bio}>{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamGrid;
