import { ReactNode } from "react";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar, { NavOption as NavBarOption } from "../lib/components/NavBar";
import Footer from "../lib/components/Footer";
import dynamic from "next/dynamic";
import styles from './styles/layout.module.scss';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ben Caro - Portfolio",
};

const navBarOptions: NavBarOption[] = [
  {
    label: 'Home',
    url: '/',
  },
  {
    label: 'About',
    url: '/about',
  },
  {
    label: 'Resume',
    url: '/resume',
  },
  {
    label: 'Projects',
    url: '/projects',
  },
];

const AppRoot = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  const StoreProvider = dynamic(() => import('./StoreProvider'), {
    ssr: false,
  });

  return (
    <html lang="en">
      <body id="root" className={inter.className}>
        <StoreProvider>
          <div className={styles.appContainer}>
          <NavBar options={navBarOptions} />
          {children}
          <Footer />
          </div>
        </StoreProvider>
        </body>
    </html>
  );
}

export default AppRoot;