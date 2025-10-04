import React from "react";
import { StyleProp, Text, TextStyle, View, ViewStyle } from "react-native";
import { useThemeColor } from "../../hooks";
import FlexView from "../flex-view";
import Icon from "../icon";
import TouchRipple from "../touch-ripple";
import { usePickerContext } from "./utils";

export interface PickerTriggerProps {
  helperText?: string;
  label?: string | number;
  value?: string | number;
  selectedValue?: string | number;
  style?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  helperTextStyle?: StyleProp<TextStyle>;
}

const PickerTrigger = ({
  label,
  style,
  value,
  helperText,
  labelStyle,
  helperTextStyle,
  selectedValue = "Select",
}: PickerTriggerProps) => {
  const { mode, isOpen, setIsOpen } = usePickerContext();
  const { border, placeholder } = useThemeColor();
  return (
    <View style={[{ gap: 5 }, style]}>
      {label !== undefined && (
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
      <TouchRipple
        disabled={isOpen}
        onPress={() => setIsOpen(!isOpen)}
        style={{
          height: 50,
          borderWidth: 1,
          borderRadius: 5,
          borderColor: border,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <FlexView style={{ padding: 10, justifyContent: "center" }}>
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
            <Text style={{ color: placeholder }}>{selectedValue}</Text>
          )}
        </FlexView>
        {mode == "sidebar" ? (
          <Icon.ChevronRight size={30} color={placeholder} />
        ) : mode == "bottom-sheet" ? (
          <Icon.ChevronDown size={30} color={placeholder} />
        ) : null}
      </TouchRipple>
      {helperText && (
        <Text style={[{ color: "grey" }, helperTextStyle]}>{helperText}</Text>
      )}
    </View>
  );
};

export default PickerTrigger;
