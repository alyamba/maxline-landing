import React from "react";

export interface ICheckbox {
  text: React.ReactNode;
  checked: boolean;
  onChange: (value: boolean) => void;
}
