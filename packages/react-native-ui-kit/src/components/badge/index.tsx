import React, { ReactNode } from "react";
import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";

export interface BadgeProps {
  color?: string;
  children: ReactNode;
  backgroundColor?: string;
  style?: StyleProp<ViewStyle>;
}

export const Badge: React.FC<BadgeProps> = ({
  style,
  children,
  color = "#fff",
  backgroundColor = "#007AFF",
}) => {
  return (
    <View style={[styles.container, { backgroundColor }, style]}>
      <Text style={[styles.text, { color }]}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    alignSelf: "flex-start",
    borderRadius: 12,
    justifyContent: "center",
    minWidth: 40,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  text: {
    fontSize: 12,
    fontWeight: "600",
  },
});

export default Badge;
