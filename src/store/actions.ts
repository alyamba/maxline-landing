import { FormAction, FormActionTypes, IFormState } from "./types";

export const updateFieldAction = (
  field: keyof IFormState,
  value: string | boolean
): FormAction => {
  return {
    type: FormActionTypes.UPDATE_FIELD,
    payload: {
      field,
      value,
    },
  };
};

export const setErrorAction = (
  field: keyof IFormState,
  value: string | null
): FormAction => {
  return {
    type: FormActionTypes.SET_ERROR,
    payload: {
      field,
      value,
    },
  };
};
