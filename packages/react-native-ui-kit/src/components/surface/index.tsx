import React from "react";
import { ColorValue, StyleProp, View, ViewStyle } from "react-native";

export interface SurfaceProps {
  /**
   * The surface appearance mode.
   * - `flat`: No shadow, simple background.
   * - `elevated`: Adds shadow/elevation.
   */
  mode?: "flat" | "elevated";

  /**
   * Optional background color.
   */
  backgroundColor?: ColorValue;

  /**
   * Custom style for the surface container.
   */
  style?: StyleProp<ViewStyle>;

  /**
   * Content inside the surface.
   */
  children?: React.ReactNode;

  elevation?: number;
}

/**
 * A versatile Surface component that can appear as flat or elevated.
 */
export const Surface: React.FC<SurfaceProps> = ({
  style,
  children,
  mode = "flat",
  elevation = 5,
  backgroundColor = "#fff",
}) => {
  const containerStyle = [
    {
      padding: 10,
      borderRadius: 10,
      backgroundColor,
    },
    mode === "elevated" && {
      elevation,
      boxShadow: `0px 0px ${elevation}px rgba(0, 0, 0, 0.15)`,
    },
    style,
  ];

  return <View style={containerStyle}>{children}</View>;
};

export default Surface;
