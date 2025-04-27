import React, { useCallback, useContext, useMemo, useState } from "react";
import styles from "./Input.module.css";
import { IInput, InputType } from "./types";
import flag from "../../assets/flag.svg";
import eyeClosed from "../../assets/eyeClosed.svg";
import eyeOpen from "../../assets/eyeOpen.svg";
import { InputMask } from "@react-input/mask";
import { FormContext, setErrorAction, updateFieldAction } from "../../store";
import {
  getIsPasswordValid,
  getIsPhoneValid,
  VALIDATION_ERRORS,
} from "../Form/utils/validation";

const Input: React.FC<IInput> = ({ type, label, placeholder, maskConfig }) => {
  const { state, dispatch } = useContext(FormContext);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const isPhone = type === InputType.PHONE;
  const isPassword = type === InputType.PASSWORD;

  const value = useMemo(() => state[type].value, [state, type]);
  const error = useMemo(() => state[type].error, [state, type]);

  const inputType = useMemo(() => {
    if (isPassword) return showPassword ? "text" : "password";
    return "text";
  }, [isPassword, showPassword]);

  const handleFocus = useCallback(() => {
    setIsFocused(true);
    dispatch(setErrorAction(type, null));

    if (isPhone && value.length === 0) {
      dispatch(updateFieldAction(type, "+375 "));
    }
  }, [dispatch, isPhone, type, value.length]);

  const handleBlur = useCallback(() => {
    setIsFocused(false);

    if (isPassword && !getIsPasswordValid(value)) {
      dispatch(setErrorAction(type, VALIDATION_ERRORS.password));
    }

    if (isPhone && !getIsPhoneValid(value)) {
      dispatch(setErrorAction(type, VALIDATION_ERRORS.phone));
    }
  }, [dispatch, isPassword, isPhone, type, value]);

  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <div
        className={`${styles.inputContainer} ${
          isFocused ? styles.inputContainerActive : ""
        } ${error ? styles.inputContainerError : ""}`}
      >
        {isPhone && (
          <div className={styles.flagContainer}>
            <img src={flag} alt="BY" className={styles.flagIcon} />
          </div>
        )}
        {maskConfig ? (
          <InputMask
            mask={maskConfig.mask}
            replacement={maskConfig.replacement}
            value={value}
            onChange={(e) => dispatch(updateFieldAction(type, e.target.value))}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder={placeholder}
            className={styles.input}
            type={inputType}
          />
        ) : (
          <input
            className={styles.input}
            type={inputType}
            placeholder={placeholder}
            value={value}
            onChange={(e) => dispatch(updateFieldAction(type, e.target.value))}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        )}
        {isPassword && (
          <img
            src={showPassword ? eyeOpen : eyeClosed}
            alt="toggle"
            className={styles.eyeIcon}
            onClick={() => setShowPassword((prev) => !prev)}
          />
        )}
      </div>
      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
};

export default Input;
