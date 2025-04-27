import { IFormState } from "./types";

export const INITIAL_STATE: IFormState = {
  phone: {
    value: "",
    error: null,
  },
  password: {
    value: "",
    error: null,
  },
  agreeRules: {
    value: false,
    error: null,
  },
  agreeBonus: {
    value: false,
    error: null,
  },
};
