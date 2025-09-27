import React from "react";
import { StyleProp, Text, TextStyle } from "react-native";

export interface DialogDescriptionProps {
  children: string;
  style?: StyleProp<TextStyle>;
}

const DialogDescription = ({ children, style }: DialogDescriptionProps) => {
  return (
    <Text
      style={[
        style,
        {
          fontSize: 14,
          color: "#6B7280",
          fontWeight: "normal",
        },
      ]}
    >
      {children}
    </Text>
  );
};

export default DialogDescription;
