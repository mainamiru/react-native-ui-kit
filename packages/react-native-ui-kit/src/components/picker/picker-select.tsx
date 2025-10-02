import * as React from "react";
import { StyleProp, TextStyle, ViewStyle } from "react-native";
import { isNil } from "../../utils";
import PickerBase from "./picker-base";
import PickerContent from "./picker-content";
import PickerTrigger from "./picker-trigger";
import { PickerMode, PickerSelectContext } from "./utils";

export interface PickerSelectProps<T extends string | number> {
  label?: string;
  selectedValue?: T;
  mode?: PickerMode;
  helperText?: string;
  placeholderText?: string;
  children: React.ReactNode;
  labelStyle?: StyleProp<TextStyle>;
  contentStyle?: StyleProp<ViewStyle>;
  onValueChange?: (value: T) => void;
  helperTextStyle?: StyleProp<TextStyle>;
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
  mode = "bottom-sheet",
  placeholderText = "Select",
}: PickerSelectProps<T>) => {
  const [internalValue, setInternalValue] = React.useState<T | undefined>(
    selectedValue,
  );

  const setValue = (value: T) => {
    setInternalValue(value);
  };

  //handle change
  React.useEffect(() => {
    if (!isNil(internalValue) && onValueChange) {
      onValueChange(internalValue);
    }
  }, [internalValue]);

  return (
    <PickerBase mode={mode}>
      <PickerSelectContext.Provider value={{ value: internalValue, setValue }}>
        <PickerTrigger
          label={label}
          helperText={helperText}
          labelStyle={labelStyle}
          placeholderText={placeholderText}
          helperTextStyle={helperTextStyle}
        />
        <PickerContent style={contentStyle}>{children}</PickerContent>
      </PickerSelectContext.Provider>
    </PickerBase>
  );
};

export default PickerSelect;
