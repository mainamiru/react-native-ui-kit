import React from "react";

export interface PickerContextType<T> {
  value: T;
  setValue: (value: T) => void;
}

export const PickerSelectContext = React.createContext<
  PickerContextType<unknown>
>({
  value: undefined,
  setValue: () => {},
});
