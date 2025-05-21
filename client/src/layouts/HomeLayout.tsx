import React, { ReactNode } from "react";
import styles from "./HomeLayout.module.scss";

interface HomePageLayoutProps {
  children: ReactNode;
}

const HomePageLayout: React.FC<HomePageLayoutProps> = ({ children }) => {
  return (
    <div
      className={`position-relative vh-100 bg-image ${styles.custom_background}`}
    >
      {children}
    </div>
  );
};

export default HomePageLayout;
