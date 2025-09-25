import React from "react";
import { StyleProp, View, ViewProps, ViewStyle } from "react-native";

export interface FlexViewProps extends ViewProps {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

export const FlexView: React.FC<FlexViewProps> = ({
  style,
  children,
  ...props
}) => {
  return (
    <View {...props} style={[{ flex: 1 }, style]}>
      {children}
    </View>
  );
};

export default FlexView;
