import { FormAction, FormActionTypes, IFormState } from "./types";

export const formReducer = (
  state: IFormState,
  { type, payload }: FormAction
): IFormState => {
  switch (type) {
    case FormActionTypes.UPDATE_FIELD:
      return {
        ...state,
        [payload.field]: {
          ...state[payload.field],
          value: payload.value,
        },
      };
    case FormActionTypes.SET_ERROR:
      return {
        ...state,
        [payload.field]: {
          ...state[payload.field],
          error: payload.value,
        },
      };
    default:
      return state;
  }
};
