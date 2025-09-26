import React from "react";
import { Pressable, StyleProp, Text, TextStyle, ViewStyle } from "react-native";
import RadioBase from "./radio-base";
import { useRadioGroupContext } from "./radio-group";
import { RadioProps } from "./types";

export interface RadioItemProps<T> extends RadioProps<T> {
  label: string;
  style?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
}

const RadioItem = <T,>({
  label,
  style,
  value,
  onChange,
  disabled,
  selected,
  labelStyle,
  ...props
}: RadioItemProps<T>) => {
  const { selectedValue, onValueChange } = useRadioGroupContext();
  const isSelected = selected || selectedValue === value;

  //handle change
  const handleChange = (val: T) => {
    onValueChange(val);
    onChange(val);
  };

  return (
    <Pressable
      disabled={disabled || isSelected}
      onPress={() => handleChange(value)}
      style={[
        style,
        {
          flexDirection: "row",
          alignItems: "center",
        },
      ]}
    >
      <RadioBase
        {...props}
        value={value}
        selected={isSelected}
        onChange={handleChange}
      />
      <Text
        style={[
          {
            color: "#50565c",
            marginLeft: 10,
            fontWeight: "500",
          },
          labelStyle,
        ]}
      >
        {label}
      </Text>
    </Pressable>
  );
};

export default RadioItem;
