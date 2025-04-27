import { CheckboxType } from "../components/Checkbox/types";
import { InputType } from "../components/Input/types";

export interface IFormState {
  [InputType.PHONE]: {
    value: string;
    error: string | null;
  };
  [InputType.PASSWORD]: {
    value: string;
    error: string | null;
  };
  [CheckboxType.AGREE_RULES]: {
    value: boolean;
    error: string | null;
  };
  [CheckboxType.AGREE_BONUS]: {
    value: boolean;
    error: string | null;
  };
}

export enum FormActionTypes {
  UPDATE_FIELD = "UPDATE_FIELD",
  SET_ERROR = "SET_ERROR",
}

export type FormAction =
  | {
      type: FormActionTypes.UPDATE_FIELD;
      payload: { field: keyof IFormState; value: string | boolean };
    }
  | {
      type: FormActionTypes.SET_ERROR;
      payload: { field: keyof IFormState; value: string | null };
    };
