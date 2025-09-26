import React from "react";
import { Pressable, View } from "react-native";
import { useRadioGroupContext } from "./radio-group";
import { RadioProps } from "./types";

const RadioBase = <T,>({
  value,
  size = 20,
  selected,
  onChange,
  disabled,
  selectedColor = "#007AFF",
  unselectedColor = "grey",
}: RadioProps<T>) => {
  const dotSize = size * 0.6;
  const { selectedValue, onValueChange } = useRadioGroupContext<T>();
  const isSelected = selected || selectedValue === value;
  return (
    <Pressable
      disabled={disabled || isSelected}
      onPress={() => {
        onValueChange(value);
        onChange(value);
      }}
      style={{
        width: size,
        height: size,
        borderWidth: 2,
        overflow: "hidden",
        alignItems: "center",
        borderRadius: size / 2,
        justifyContent: "center",
        borderColor: isSelected ? selectedColor : unselectedColor,
      }}
    >
      {isSelected && (
        <View
          style={{
            width: dotSize,
            height: dotSize,
            borderRadius: dotSize / 2,
            backgroundColor: isSelected ? selectedColor : "transparent",
          }}
        />
      )}
    </Pressable>
  );
};

export default RadioBase;
