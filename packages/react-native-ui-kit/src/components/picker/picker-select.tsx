import React from "react";
import { Pressable, StyleProp, TextStyle, View, ViewStyle } from "react-native";
import { useThemeColor } from "../../hooks";
import BottomSheet, { BottomSheetRef } from "../bottom-sheet";
import { Text } from "../text";
import { PickerSelectContext } from "./picker-context";

export interface PickerSelectProps<T extends string | number> {
  children: React.ReactNode;
  label?: string;
  style?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  position?: "left" | "right" | "bottom";
  containerStyle?: StyleProp<ViewStyle>;
  selectedValue?: T;
  onValueChanged?: (value: T) => void;
}

const PickerSelect = <T extends string | number>({
  label,
  style,
  children,
  labelStyle,
  selectedValue,
  containerStyle,
  onValueChanged,
  position = "bottom",
}: PickerSelectProps<T>) => {
  const [value, setValue] = React.useState<T | undefined>(selectedValue);
  const bottomSheetRef = React.useRef<BottomSheetRef>(null);
  const { border, placeholder } = useThemeColor();

  //handle change
  React.useEffect(() => {
    if (value && onValueChanged) {
      onValueChanged(value);
    }
  }, [value]);

  return (
    <PickerSelectContext.Provider value={{ value, setValue }}>
      <View style={style}>
        {label && <Text style={labelStyle}>{label}</Text>}
        <Pressable
          onPress={() => bottomSheetRef.current?.open()}
          style={{
            height: 50,
            padding: 10,
            borderWidth: 1,
            borderRadius: 5,
            borderColor: border,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {value ? (
            <Text numberOfLines={1}>{value}</Text>
          ) : (
            <Text style={{ color: placeholder }}>Select</Text>
          )}
          <Text style={{ color: placeholder }}>⌵</Text>
        </Pressable>
      </View>
      <BottomSheet ref={bottomSheetRef} height={300}>
        <View style={containerStyle}>{children}</View>
      </BottomSheet>
    </PickerSelectContext.Provider>
  );
};

export default PickerSelect;
