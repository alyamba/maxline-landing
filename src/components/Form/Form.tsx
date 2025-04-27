import React, { useCallback, useContext, useState } from "react";
import styles from "./Form.module.css";
import { Input, Button, Checkbox } from "../";
import { InputType } from "../Input/types";
import { CheckboxType } from "../Checkbox/types";
import { addUser, checkIsUserExist, FormContext } from "../../store";
import {
  getIsPasswordValid,
  getIsPhoneValid,
  VALIDATION_ERRORS,
} from "./utils/validation";

const Form: React.FC = () => {
  const { state } = useContext(FormContext);
  const [formError, setFormError] = useState<string>("");

  const handleSubmit = useCallback(() => {
    setFormError("");
    if (checkIsUserExist(state.phone.value)) {
      setFormError(VALIDATION_ERRORS.existUser);
    } else if (!getIsPhoneValid(state.phone.value)) {
      setFormError(VALIDATION_ERRORS.phone);
    } else if (!getIsPasswordValid(state.password.value)) {
      setFormError(VALIDATION_ERRORS.password);
    } else if (!state.agreeBonus.value || !state.agreeRules.value) {
      setFormError(VALIDATION_ERRORS.checkboxes);
    } else {
      addUser(state.phone.value);
      alert("Регистрация прошла успешно!");
    }
  }, [state]);

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <h1 className={styles.title}>Регистрация</h1>
      <div className={styles.inputsContainer}>
        <Input
          maskConfig={{
            mask: "+375 (__) ___ __ __",
            replacement: { _: /\d/ },
          }}
          type={InputType.PHONE}
          label="Номер телефона"
          placeholder="+375"
        />
        <Input
          type={InputType.PASSWORD}
          label="Пароль"
          placeholder="Придумайте пароль"
        />
      </div>
      <div className={styles.checkboxContainer}>
        <Checkbox
          text={
            <>
              Мне больше 21 года.
              <br /> Я согласен и принимаю{" "}
              <a href="">«Правила приема ставок»</a> и{" "}
              <a href="">«Политику конциденциальности»</a>
            </>
          }
          type={CheckboxType.AGREE_RULES}
        />
        <Checkbox
          text={
            <>
              Я принимаю участие и согласен с <a href="">условиями бонуса</a>
            </>
          }
          type={CheckboxType.AGREE_BONUS}
        />
      </div>
      <Button text="РЕГИСТРАЦИЯ" type="button" onButtonClick={handleSubmit} />

      {formError && <div className={styles.error}>{formError}</div>}
    </form>
  );
};

export default Form;
