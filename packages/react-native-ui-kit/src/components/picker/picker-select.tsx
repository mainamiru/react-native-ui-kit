import * as React from "react";
import { StyleProp, TextStyle, ViewStyle } from "react-native";
import PickerContent from "./picker-content";
import PickerTrigger from "./picker-trigger";
import { PickerContext } from "./utils";

export interface PickerSelectProps<T extends string | number> {
  label?: string;
  selectedValue?: T;
  autoClose?: boolean;
  helperText?: string;
  placeholderText?: string;
  children: React.ReactNode;
  labelStyle?: StyleProp<TextStyle>;
  contentStyle?: StyleProp<ViewStyle>;
  onValueChange?: (value: T) => void;
  helperTextStyle?: StyleProp<TextStyle>;
  mode?: "dialog" | "sidebar" | "bottom-sheet";
}

const PickerSelect = <T extends string | number>({
  label,
  children,
  helperText,
  labelStyle,
  contentStyle,
  selectedValue,
  onValueChange,
  helperTextStyle,
  autoClose = true,
  placeholderText = "Select",
  mode = "bottom-sheet",
}: PickerSelectProps<T>) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [value, setValue] = React.useState<T | undefined>(selectedValue);

  //handle change
  React.useEffect(() => {
    if (value && onValueChange) {
      onValueChange(value);
    }
    if (autoClose) {
      setIsOpen(false);
    }
  }, [value]);

  return (
    <PickerContext.Provider
      value={{
        value,
        mode,
        isOpen,
        setValue,
        setIsOpen,
      }}
    >
      <PickerTrigger
        label={label}
        value={value}
        helperText={helperText}
        labelStyle={labelStyle}
        placeholderText={placeholderText}
        helperTextStyle={helperTextStyle}
      />
      <PickerContent mode={mode} style={contentStyle}>
        {children}
      </PickerContent>
    </PickerContext.Provider>
  );
};

export default PickerSelect;
