import React from "react";
import { PickerContextType, PickerSelectContext } from "./picker-context";

export function useSelectPicker<T extends string | number>() {
  const context = React.useContext<PickerContextType<T>>(PickerSelectContext);
  if (context) return context;
  throw new Error(
    "useSelectPicker must be used within a PickerSelect component",
  );
}
