import { StyleProp, ViewStyle } from "react-native";

export interface RadioProps<T> {
  value: T;
  size?: number;
  selected?: boolean;
  disabled?: boolean;
  selectedColor?: string;
  unselectedColor?: string;
  onChange?: (value: T) => void;
}

export interface RadioGroupProps<T> {
  selectedValue?: T;
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  onValueChange: (value: T) => void;
}

export interface RadioGroupContextType<T> {
  selectedValue: T | undefined;
  onValueChange: (value: T) => void;
}
