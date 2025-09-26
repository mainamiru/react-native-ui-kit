import React from "react";
import { View } from "react-native";
import { RadioGroupContextType, RadioGroupProps } from "./types";

export const RadioGroupContext = React.createContext<
  RadioGroupContextType<unknown>
>({
  selectedValue: undefined,
  onValueChange: () => {},
});

const RadioGroup = <T,>({
  style,
  children,
  selectedValue,
  onValueChange,
}: RadioGroupProps<T>) => {
  return (
    <RadioGroupContext.Provider value={{ selectedValue, onValueChange }}>
      <View style={style}>{children}</View>
    </RadioGroupContext.Provider>
  );
};

export function useRadioGroupContext<T>(): RadioGroupContextType<T> {
  return React.useContext<RadioGroupContextType<T>>(RadioGroupContext);
}

export default RadioGroup;
