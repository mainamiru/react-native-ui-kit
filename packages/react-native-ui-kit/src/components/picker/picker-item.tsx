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
  value: T;
  label: string;
  selected?: boolean;
  style?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  onPress?: (event: GestureResponderEvent) => void;
}

const PickerItem = <T,>({
  value,
  label,
  style,
  onPress,
  selected,
  labelStyle,
}: PickerItemProps<T>) => {
  return (
    <TouchRipple
      onPress={onPress}
      style={[
        {
          gap: 10,
          padding: 10,
        },
        style,
        {
          alignItems: "center",
          flexDirection: "row",
        },
      ]}
    >
      <Radio value={value} selected={selected} />
      <Text
        numberOfLines={1}
        style={[{ flex: 1, fontWeight: "500" }, labelStyle]}
      >
        {label}
      </Text>
    </TouchRipple>
  );
};

export default PickerItem;
