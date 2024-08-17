"use client";
import { FC } from 'react';
import AnimatedBackground from '../../lib/components/AnimatedBackground';
import Section from '../../lib/components/Section';
import styles from './styles/page.module.scss';

const InProgress: FC = () => {
  return (
    <div className="mt-auto mb-auto">
      <Section
        backgroundColor="primary-accent-color"
        zIndex={10}
        style="relative flex flex-col"
        center
        flexCol
      >
        <div className={styles.title}>
          <span>In Progress</span>
        </div>
      </Section>
      <AnimatedBackground />
    </div>
  );
};

export default InProgress;
