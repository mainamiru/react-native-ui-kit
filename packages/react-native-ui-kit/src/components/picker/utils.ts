import React from "react";

export interface PickerContextType<T> {
  value: T;
  isOpen: boolean;
  setValue: (value: T) => void;
  setIsOpen: (isOpen: boolean) => void;
  mode: "dialog" | "sidebar" | "bottom-sheet";
}

export const PickerContext =
  React.createContext<PickerContextType<unknown> | null>(null);

export function usePickerContext<T extends string | number>() {
  const context = React.useContext<PickerContextType<T>>(PickerContext);
  if (!context) {
    throw new Error("usePickerContext must be used within a PickerContext");
  }
  return context;
}
