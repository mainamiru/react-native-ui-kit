import React from "react";
import { View, ViewProps } from "react-native";

export const Center = ({ style, children, ...props }: ViewProps) => {
  return (
    <View
      style={[
        style,
        {
          alignItems: "center",
          justifyContent: "center",
        },
      ]}
      {...props}
    >
      {children}
    </View>
  );
};

export default Center;
