export enum InputType {
  PHONE = "phone",
  PASSWORD = "password",
}

export interface IInput {
  type: InputType;
  label: string;
  placeholder: string;
  maskConfig?: {
    mask: string;
    replacement?: { [key: string]: RegExp };
  };
}
