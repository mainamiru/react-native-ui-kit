import * as React from "react";

export type PickerMode = "dialog" | "sidebar" | "bottom-sheet";

export interface PickerRef {
  open: () => void;
  close: () => void;
}

export interface PickerContextType {
  mode: PickerMode;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const PickerContext = React.createContext<PickerContextType | null>(
  null,
);

export function usePickerContext() {
  const context = React.useContext(PickerContext);
  if (!context) {
    throw new Error("usePickerContext must be used within a PickerContext");
  }
  return context;
}

export interface PickerSelectContextType<T> {
  value: T;
  setValue: (value: T) => void;
}

export const PickerSelectContext =
  React.createContext<PickerSelectContextType<unknown> | null>(null);

export function usePickerSelectContext<T>() {
  const context =
    React.useContext<PickerSelectContextType<T>>(PickerSelectContext);
  if (!context) {
    throw new Error(
      "usePickerSelectContext must be used within a PickerSelectContext",
    );
  }
  return context;
}
