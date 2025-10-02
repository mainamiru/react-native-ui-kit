import React from "react";
import { Pressable, StyleProp, Text, TextStyle, ViewStyle } from "react-native";
import { FlexView } from "../flex-view";
import { Radio } from "../radio";
import { usePickerContext } from "./utils";

export interface PickerItemProps<T extends string | number> {
  value: T;
  label: string;
  style?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
}

const PickerItem = <T extends string | number>({
  value,
  label,
  style,
  labelStyle,
}: PickerItemProps<T>) => {
  const { value: selectedValue, setValue } = usePickerContext<T>();
  const selected = value === selectedValue;
  return (
    <Pressable
      disabled={selected}
      onPress={() => setValue(value)}
      style={[
        {
          gap: 10,
          padding: 10,
          alignItems: "center",
        },
        style,
        { flexDirection: "row" },
      ]}
    >
      <Radio
        value={value}
        selected={selected}
        onChange={() => setValue(value)}
      />
      <FlexView>
        <Text style={[{ fontWeight: "500" }, labelStyle]}>{label}</Text>
      </FlexView>
    </Pressable>
  );
};

export default PickerItem;
