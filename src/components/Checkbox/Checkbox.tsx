import React from "react";
import styles from "./Checkbox.module.css";
import { ICheckbox } from "./types";

const Checkbox: React.FC<ICheckbox> = ({ text, checked, onChange }) => {
  return (
    <div className={styles.container}>
      <div className={styles.checkboxContainer}>
        <input
          type="checkbox"
          checked={checked}
          className={styles.checkbox}
          onChange={(e) => onChange(e.target.checked)}
        />
      </div>
      <label className={styles.text}>{text}</label>
    </div>
  );
};

export default Checkbox;
