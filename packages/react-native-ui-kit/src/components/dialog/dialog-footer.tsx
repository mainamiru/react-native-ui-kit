import React from "react";
import { StyleProp, View, ViewStyle } from "react-native";

export interface DialogFooterProps {
  spacing?: number;
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

const DialogFooter = ({ children, style, spacing = 10 }: DialogFooterProps) => {
  return (
    <View
      style={[
        {
          gap: spacing,
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "flex-end",
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};

export default DialogFooter;
