import React from "react";
import { View, ViewStyle } from "react-native";

export interface FlexViewProps extends ViewStyle {
  testID?: string;
  children?: React.ReactNode;
}

export const FlexView = ({ children, testID, ...style }: FlexViewProps) => {
  return (
    <View testID={testID} style={[{ flex: 1 }, style]}>
      {children}
    </View>
  );
};

export default FlexView;
