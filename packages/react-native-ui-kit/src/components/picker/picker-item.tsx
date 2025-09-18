import React from "react";
import { Text, View } from "react-native";
export interface PickerItemProps<T> {
  value: T;
  label: string;
}

const PickerItem = <T extends unknown>({
  value,
  label,
}: PickerItemProps<T>) => {
  return (
    <View>
      <Text>{label}</Text>
    </View>
  );
};

export default PickerItem;
