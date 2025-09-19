import React from "react";
import { Pressable, StyleProp, Text, TextStyle } from "react-native";
import { FlexView } from "../flex-view";
import { useSelectPicker } from "./picker-hook";
export interface PickerItemProps<T extends string | number> {
  value: T;
  label: string;
  style?: StyleProp<TextStyle>;
}

const PickerItem = <T extends string | number>({
  value,
  label,
  style,
}: PickerItemProps<T>) => {
  const { value: selectedValue, setValue } = useSelectPicker<T>();
  const selected = value === selectedValue;
  return (
    <Pressable
      disabled={selected}
      onPress={() => setValue(value)}
      style={{
        gap: 10,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
        paddingVertical: 10,
      }}
    >
      <FlexView>
        <Text style={[{ fontWeight: "500" }, style]}>{label}</Text>
      </FlexView>
      {selected && (
        <Text style={{ fontSize: 14, color: "green" }}>{"\u2713"}</Text>
      )}
    </Pressable>
  );
};

export default PickerItem;
