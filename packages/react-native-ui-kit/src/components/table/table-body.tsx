import React from "react";
import { StyleProp, View, ViewStyle } from "react-native";

export interface TableBodyProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

const TableBody: React.FC<TableBodyProps> = ({ children, style }) => {
  return <View style={style}>{children}</View>;
};

export default TableBody;
