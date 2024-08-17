"use client";
import { FC } from "react";
import Image from "next/image";
import AnimatedBackground from "../lib/components/AnimatedBackground";
import Section from "../lib/components/Section";
import Title from "../lib/components/Title";
import styles from "./styles/page.module.scss";

const Home: FC = () => {
  return (
    <>
      <Section backgroundColor="primary-accent-color">
        <Title fontFamily="Gugi" size="large">
          Ben Caro: Software Engineer
        </Title>
        <img src="/self.png" alt="" className={styles.selfie} />
      </Section>
      <AnimatedBackground />
    </>
  );
};

export default Home;
