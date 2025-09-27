import React from "react";
import { StyleProp, Text, TextStyle } from "react-native";

export interface DialogTitleProps {
  children: string;
  style?: StyleProp<TextStyle>;
}

const DialogTitle = ({ children, style }: DialogTitleProps) => {
  return (
    <Text
      style={[
        {
          fontSize: 16,
          color: "#000",
          fontWeight: "bold",
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
};

export default DialogTitle;
