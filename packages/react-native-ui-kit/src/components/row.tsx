import React from "react";
import { View, ViewStyle } from "react-native";

export interface RowProps extends ViewStyle {
  testID?: string;
  children?: React.ReactNode;
}

export const Row = ({ children, testID, ...style }: RowProps) => {
  return (
    <View testID={testID} style={[style, { flexDirection: "row" }]}>
      {children}
    </View>
  );
};

export default Row;
