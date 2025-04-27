import React, { useState } from "react";
import styles from "./Input.module.css";
import { IInput, InputType } from "./types";
import flag from "../../assets/flag.svg";
import eyeClosed from "../../assets/eyeClosed.svg";
import eyeOpen from "../../assets/eyeOpen.svg";

const Input: React.FC<IInput> = ({
  type,
  label,
  placeholder,
  value,
  onChange,
  error,
  // isValid,
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const isPhone = type === InputType.PHONE;
  const isPassword = type === InputType.PASSWORD;

  const getInputType = () => {
    if (isPassword) return showPassword ? "text" : "password";
    return "text";
  };

  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <div className={styles.inputContainer}>
        {isPhone && (
          <div className={styles.flagContainer}>
            <img src={flag} alt="BY" className={styles.flagIcon} />
          </div>
        )}
        <input
          className={styles.input}
          type={getInputType()}
          placeholder={placeholder}
          value={isPhone && value.startsWith("+375") ? value.slice(4) : value}
          onChange={(e) => {
            onChange(e.target.value);
          }}
        />
        {isPassword && (
          <img
            src={showPassword ? eyeOpen : eyeClosed}
            alt="toggle"
            className={styles.eyeIcon}
            onClick={() => setShowPassword((prev) => !prev)}
          />
        )}
      </div>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default Input;
