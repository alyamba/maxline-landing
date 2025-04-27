import React, { useContext } from "react";
import styles from "./Checkbox.module.css";
import { ICheckbox } from "./types";
import { FormContext, updateFieldAction } from "../../store";

const Checkbox: React.FC<ICheckbox> = ({ text, type }) => {
  const { state, dispatch } = useContext(FormContext);

  return (
    <div className={styles.container}>
      <div className={styles.checkboxContainer}>
        <input
          type="checkbox"
          checked={state[type].value}
          className={styles.checkbox}
          onChange={(e) => dispatch(updateFieldAction(type, e.target.checked))}
        />
      </div>
      <label className={`${styles.text} ${styles.errorText}`}>{text}</label>
    </div>
  );
};

export default Checkbox;
