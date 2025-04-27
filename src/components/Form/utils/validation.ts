const PHONE_REGEX = /^\+375\s\((29|33|44)\)\s\d{3}\s\d{2}\s\d{2}$/;

export const VALIDATION_ERRORS = {
  phone: "Введите корректный номер телефона",
  password: "Пароль должен содержать минимум 6 символов",
  checkboxes:
    "Вы должны подтвердить, что Вам исполнился 21 год, а также принять условия бонуса",
  existUser: "Пользователь с таким номером телефона уже существует",
};

export const getIsPhoneValid = (phone: string) => {
  return PHONE_REGEX.test(phone);
};

export const getIsPasswordValid = (password: string) => {
  return password.length >= 6;
};
