import React from "react";
import { View, ViewProps } from "react-native";

export const Row = ({ children, style, ...props }: ViewProps) => {
  return (
    <View style={[style, { flexDirection: "row" }]} {...props}>
      {children}
    </View>
  );
};

export default Row;
