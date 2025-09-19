import React from "react";
import { View, ViewStyle } from "react-native";

export interface CenterProps extends ViewStyle {
  children: React.ReactNode;
}

export const Center = ({ children, ...style }: CenterProps) => {
  return (
    <View
      style={[
        style,
        {
          alignItems: "center",
          justifyContent: "center",
        },
      ]}
    >
      {children}
    </View>
  );
};

export default Center;
