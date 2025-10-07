import React from "react";
import {
  GestureResponderEvent,
  StyleProp,
  Text,
  TextStyle,
  ViewStyle,
} from "react-native";
import { Radio } from "../radio";
import TouchRipple from "../touch-ripple";

export interface PickerItemProps<T> {
  /** Value of the picker item */
  value: T;
  /** Label displayed for the picker item */
  label: string;
  /** Whether the item is currently selected */
  selected?: boolean;
  /** Custom container style */
  style?: StyleProp<ViewStyle>;
  /** Custom text style for label */
  labelStyle?: StyleProp<TextStyle>;
  /** Called when the item is pressed */
  onPress?: (event: GestureResponderEvent) => void;
  /** Disable interaction and ripple feedback */
  disabled?: boolean;
}

export const PickerItem = <T,>({
  value,
  label,
  selected = false,
  style,
  labelStyle,
  onPress,
  disabled = false,
}: PickerItemProps<T>) => {
  return (
    <TouchRipple
      onPress={onPress}
      disabled={disabled}
      style={[
        {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          paddingVertical: 10,
          paddingHorizontal: 14,
          gap: 10,
          opacity: disabled ? 0.5 : 1,
        },
        style,
      ]}
      accessibilityRole="button"
      accessibilityLabel={label}
      accessibilityState={{ selected, disabled }}
    >
      <Radio value={value} selected={selected} />
      <Text
        numberOfLines={1}
        style={[
          {
            flex: 1,
            fontWeight: selected ? "600" : "500",
            color: selected ? "#000" : "#444",
          },
          labelStyle,
        ]}
      >
        {label}
      </Text>
    </TouchRipple>
  );
};

export default PickerItem;
