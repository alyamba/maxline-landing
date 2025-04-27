import React, { useState } from "react";
import styles from "./Form.module.css";
import { Input } from "../Input";
import { Button } from "../Button";
import { Checkbox } from "../Checkbox";
import { InputType } from "../Input/types";

const Form: React.FC = () => {
  const [phone, setPhone] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [agreeRules, setAgreeRules] = useState<boolean>(false);
  const [agreeBonus, setAgreeBonus] = useState<boolean>(false);

  return (
    <form className={styles.container}>
      <h1 className={styles.title}>Регистрация</h1>
      <div className={styles.inputsContainer}>
        <Input
          type={InputType.PHONE}
          label="Номер телефона"
          placeholder="+375"
          value={phone}
          onChange={(value) => setPhone(value)}
        />
        <Input
          type={InputType.PASSWORD}
          label="Пароль"
          placeholder="Придумайте пароль"
          value={password}
          onChange={(value) => setPassword(value)}
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
          checked={agreeRules}
          onChange={(value) => setAgreeRules(value)}
        />
        <Checkbox
          text={
            <>
              Я принимаю участие и согласен с <a href="">условиями бонуса</a>
            </>
          }
          checked={agreeBonus}
          onChange={(value) => setAgreeBonus(value)}
        />
      </div>
      <Button text="РЕГИСТРАЦИЯ" />
    </form>
  );
};

export default Form;
