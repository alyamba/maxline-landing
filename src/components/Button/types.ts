export interface IButton {
  text: string;
  onButtonClick: () => void;
  type?: "button" | "reset" | "submit";
}
