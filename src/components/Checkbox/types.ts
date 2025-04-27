import React from "react";

export enum CheckboxType {
  AGREE_RULES = "agreeRules",
  AGREE_BONUS = "agreeBonus",
}

export interface ICheckbox {
  text: React.ReactNode;
  type: CheckboxType;
}
