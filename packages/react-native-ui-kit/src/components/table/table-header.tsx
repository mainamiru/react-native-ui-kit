import React from "react";
import { StyleProp, View, ViewStyle } from "react-native";

export interface TableHeaderProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

const TableHeader: React.FC<TableHeaderProps> = ({ children, style }) => {
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

export default TableHeader;
