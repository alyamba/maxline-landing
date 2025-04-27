import { ActionDispatch, createContext } from "react";
import { FormAction, IFormState } from "./types";
import { INITIAL_STATE } from "./constants";

export const FormContext = createContext<{
  state: IFormState;
  dispatch: ActionDispatch<[action: FormAction]>;
}>({
  state: INITIAL_STATE,
  dispatch: () => {},
});
