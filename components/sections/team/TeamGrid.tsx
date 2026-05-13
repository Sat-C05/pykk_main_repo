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
          {members.map((member, index) => {
            const initials = member.name.split(' ').map(n => n[0]).join('').substring(0, 2);
            return (
              <div key={index} className={styles.card}>
                <div className={styles.initialsWrapper}>
                  <span className={styles.initials}>{initials}</span>
                </div>
                <div className={styles.content}>
                  <h3 className={styles.name}>{member.name}</h3>
                  <span className={styles.role}>{member.role}</span>
                  <div className={styles.divider}></div>
                  <p className={styles.bio}>{member.bio}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TeamGrid;
