import React, { ReactNode } from "react";
import styles from "./Card.module.scss";

const Card: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <div className={`card ${styles.custom_card}`}>{children}</div>;
};

export default Card;
