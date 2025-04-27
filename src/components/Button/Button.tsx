import React from "react";
import styles from "./Button.module.css";
import { IButton } from "./types";

const Button: React.FC<IButton> = ({ text }) => {
  return <button className={styles.button}>{text}</button>;
};

export default Button;
