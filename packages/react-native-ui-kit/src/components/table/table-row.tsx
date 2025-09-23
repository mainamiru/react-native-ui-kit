import React from "react";
import { StyleProp, View, ViewStyle } from "react-native";

export interface TableRowProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

const TableRow = ({ children, style }: TableRowProps) => {
  return (
    <View
      style={[
        style,
        {
          width: "100%",
          flexDirection: "row",
          alignItems: "stretch",
        },
      ]}
    >
      {children}
    </View>
  );
};

export default TableRow;
