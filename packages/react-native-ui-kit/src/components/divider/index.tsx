import React from "react";
import { StyleProp, View, ViewStyle } from "react-native";

export interface DividerProps {
  /** Thickness of the divider line */
  thickness?: number;
  /** Color of the divider line */
  color?: string;
  /** Margin around the divider */
  margin?: number;
  /** Optional style override */
  style?: StyleProp<ViewStyle>;
}

export const Divider: React.FC<DividerProps> = ({
  style,
  margin = 0,
  thickness = 1,
  color = "#e0e0e0",
}) => {
  return (
    <View
      style={[
        {
          height: thickness,
          backgroundColor: color,
          marginVertical: margin,
        },
        style,
      ]}
    />
  );
};

export default Divider;
