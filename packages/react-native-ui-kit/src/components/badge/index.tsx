import React, { ReactNode } from "react";
import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";

export interface BadgeProps {
  children: ReactNode;
  color?: string;
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
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: "flex-start",
    minWidth: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 12,
    fontWeight: "600",
  },
});

export default Badge;
