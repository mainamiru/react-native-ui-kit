import * as React from "react";
import { Pressable, StyleProp, TextStyle, View, ViewStyle } from "react-native";
import { useThemeColor } from "../../hooks";
import { BottomSheet, BottomSheetRef } from "../bottom-sheet";
import Divider from "../divider";
import { FlexView } from "../flex-view";
import Sidebar, { SidebarRef } from "../sidebar";
import { Text } from "../text";
import { PickerSelectContext } from "./picker-context";

export interface PickerSelectProps<T extends string | number> {
  children: React.ReactNode;
  label?: string;
  selectedValue?: T;
  autoClose?: boolean;
  helperText?: string;
  sidebarWidth?: number;
  placeholderText?: string;
  style?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  position?: "left" | "right" | "bottom";
  containerStyle?: StyleProp<ViewStyle>;
  onValueChange?: (value: T) => void;
  helperTextStyle?: StyleProp<TextStyle>;
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
  position = "bottom",
  sidebarWidth = 280,
  placeholderText = "Select",
}: PickerSelectProps<T>) => {
  const { border, placeholder } = useThemeColor();
  const sidebarRef = React.useRef<SidebarRef>(null);
  const bottomSheetRef = React.useRef<BottomSheetRef>(null);
  const [value, setValue] = React.useState<T | undefined>(selectedValue);

  //handle change
  React.useEffect(() => {
    if (value && onValueChange) {
      onValueChange(value);
      if (autoClose) {
        sidebarRef.current?.close();
        bottomSheetRef.current?.close();
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
          onPress={() => {
            if (position === "bottom") {
              bottomSheetRef.current?.open();
            } else {
              sidebarRef.current?.open();
            }
          }}
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
          <FlexView justifyContent="center">
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
          {position === "bottom" ? (
            <Text style={{ color: placeholder }}>⌵</Text>
          ) : (
            // <Text style={{ color: placeholder }}>⌵</Text>
            <Text
              style={{
                color: placeholder,
                transform: [{ rotate: "-90deg" }],
              }}
            >
              ⌵
            </Text>
          )}
        </Pressable>
        {helperText && (
          <Text style={[{ color: "grey" }, helperTextStyle]}>{helperText}</Text>
        )}
      </View>
      {position === "bottom" ? (
        <BottomSheet ref={bottomSheetRef} contentStyle={containerStyle}>
          <Text variant="titleMedium" style={{ padding: 10 }} numberOfLines={1}>
            Selected: {value}
          </Text>
          <Divider />
          {children}
        </BottomSheet>
      ) : (
        <Sidebar width={sidebarWidth} ref={sidebarRef} position={position}>
          <Text variant="titleMedium" style={{ padding: 10 }} numberOfLines={1}>
            Selected: {value}
          </Text>
          <Divider />
          {children}
        </Sidebar>
      )}
    </PickerSelectContext.Provider>
  );
};

export default PickerSelect;
