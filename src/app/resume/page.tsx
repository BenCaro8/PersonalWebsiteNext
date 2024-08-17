"use client";
import { FC } from 'react';
import AnimatedBackground from '../../lib/components/AnimatedBackground';
import Section from '../../lib/components/Section';
import styles from './styles/page.module.scss';

const Resume: FC = () => {
  return (
    <>
      <Section backgroundColor="primary-accent-color" center>
        <a className={styles.title} href="/Resume.pdf" download>
          Download Resume as PDF
        </a>
      </Section>
      <Section center showAnimatedBackground>
        <img src="/Resume.jpg" className={styles.resume} />
      </Section>
      <AnimatedBackground />
    </>
  );
};

export default Resume;
