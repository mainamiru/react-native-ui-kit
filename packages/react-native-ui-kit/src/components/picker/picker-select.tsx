import React from "react";
import { Pressable, StyleProp, TextStyle, View, ViewStyle } from "react-native";
import { useThemeColor } from "../../hooks";
import { BottomSheet, BottomSheetRef } from "../bottom-sheet";
import Divider from "../divider";
import { FlexView } from "../flex-view";
import { Text } from "../text";
import { PickerSelectContext } from "./picker-context";

export interface PickerSelectProps<T extends string | number> {
  children: React.ReactNode;
  label?: string;
  selectedValue?: T;
  autoClose?: boolean;
  helperText?: string;
  style?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  // position?: "left" | "right" | "bottom";
  containerStyle?: StyleProp<ViewStyle>;
  onValueChange?: (value: T) => void;
  helperTextStyle?: StyleProp<TextStyle>;
  placeholderText?: string;
}

const PickerSelect = <T extends string | number>({
  label,
  style,
  children,
  helperText,
  labelStyle,
  autoClose = true,
  selectedValue,
  containerStyle,
  onValueChange,
  helperTextStyle,
  placeholderText = "Select",
}: PickerSelectProps<T>) => {
  const [value, setValue] = React.useState<T | undefined>(selectedValue);
  const bottomSheetRef = React.useRef<BottomSheetRef>(null);
  const { border, placeholder } = useThemeColor();

  //handle change
  React.useEffect(() => {
    if (value && onValueChange) {
      onValueChange(value);
      if (autoClose && bottomSheetRef.current) {
        bottomSheetRef.current.close();
      }
    }
  }, [value]);

  return (
    <PickerSelectContext.Provider value={{ value, setValue }}>
      <View style={[{ gap: 5 }, style]}>
        {label && (
          <Text
            style={[
              {
                fontSize: 14,
                fontWeight: "500",
              },
              labelStyle,
            ]}
          >
            {label}
          </Text>
        )}
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
          <FlexView>
            {value ? (
              <Text
                numberOfLines={1}
                style={{
                  fontWeight: "500",
                  textTransform: "capitalize",
                }}
              >
                {value}
              </Text>
            ) : (
              <Text style={{ color: placeholder }}>{placeholderText}</Text>
            )}
          </FlexView>
          <Text style={{ color: placeholder }}>⌵</Text>
        </Pressable>
        {helperText && (
          <Text style={[{ color: "grey" }, helperTextStyle]}>{helperText}</Text>
        )}
      </View>
      <BottomSheet ref={bottomSheetRef} contentStyle={containerStyle}>
        <Text variant="titleMedium" style={{ padding: 10 }} numberOfLines={1}>
          Selected: {value}
        </Text>
        <Divider />
        {children}
      </BottomSheet>
    </PickerSelectContext.Provider>
  );
};

export default PickerSelect;
