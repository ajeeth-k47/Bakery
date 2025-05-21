import React, { ReactNode } from "react";
import styles from "./Card.module.scss";

interface CardProps {
  children: ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return <div className={`card ${styles.custom_card}`}>{children}</div>;
};

export default Card;
