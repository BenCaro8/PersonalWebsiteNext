"use client";
import { FC } from "react";
import Image from "next/image";
import Section from "./Section";
import { useAppSelector } from "../store";
import styles from "./styles/Footer.module.scss";

const Footer: FC = () => {
  const isMobile = useAppSelector((state) => state.settings.isMobile);
  const footerHeight = isMobile ? 100 : 150;

  return (
    <>
      <Section
        style={styles.footerContainer}
        height={footerHeight}
        zIndex={100}
        backgroundColor="primary-accent-color"
        center
      >
        <a
          href="https://github.com/BenCaro8"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center mr-3"
        >
          <Image
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt="Github Image"
            height={16}
            width={16}
            className="h-4 mr-1"
          />
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/benjamin-c-caro/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center mr-3"
        >
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
            alt="LinkedIn Image"
            height={16}
            width={16}
            className="h-4 mr-1"
          />
          LinkedIn
        </a>
        <p>© 2024 Ben Caro</p>
      </Section>
      <Section height={footerHeight} zIndex={-1} />
    </>
  );
};

export default Footer;
