import React from "react";
import styles from "./Button.module.css";
import { IButton } from "./types";

const Button: React.FC<IButton> = ({ text, type, onButtonClick}) => {
  return (
    <button className={styles.button} type={type} onClick={onButtonClick}>
      {text}
    </button>
  );
};

export default Button;
