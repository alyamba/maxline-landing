export enum InputType {
  PHONE = "phone",
  PASSWORD = "password",
}

export interface IInput {
  type: InputType;
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  // isValid?: boolean;
}
