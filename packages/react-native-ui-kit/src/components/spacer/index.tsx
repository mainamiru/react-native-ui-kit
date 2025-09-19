import React from "react";
import { View } from "react-native";

export interface SpacerProps {
  size?: number;
  horizontal?: boolean;
}

/**
 * Spacer component for adding consistent spacing in layouts.
 */
export const Spacer: React.FC<SpacerProps> = ({
  size = 8,
  horizontal = false,
}) => <View style={horizontal ? { width: size } : { height: size }} />;

export default Spacer;
