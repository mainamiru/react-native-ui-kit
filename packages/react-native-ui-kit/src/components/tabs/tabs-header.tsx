import React from "react";
import { StyleProp, View, ViewStyle } from "react-native";

export interface TabsHeaderProps {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}
const TabsHeader = ({ children, style }: TabsHeaderProps) => {
  return (
    <View
      style={[
        style,
        {
          flexDirection: "row",
          alignItems: "center",
        },
      ]}
    >
      {children}
    </View>
  );
};

export default TabsHeader;
