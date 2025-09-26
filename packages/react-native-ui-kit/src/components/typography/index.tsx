import React from "react";
import {
  TextProps as RNTextProps,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
} from "react-native";
import { useThemeColor } from "../../hooks";

export type TypographyVariant = "h1" | "h2" | "h3" | "body" | "caption";

export interface TypographyProps extends RNTextProps {
  children: React.ReactNode;
  variant?: TypographyVariant;
  style?: StyleProp<TextStyle>;
}

export const Typography: React.FC<TypographyProps> = ({
  style,
  children,
  variant = "body",
  ...props
}) => {
  const { text: color } = useThemeColor();
  return (
    <Text {...props} style={[styles[variant], { color }, style]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  body: {
    fontSize: 16,
    fontWeight: "400",
  },
  caption: {
    fontSize: 12,
    fontWeight: "300",
  },
  h1: {
    fontSize: 32,
    fontWeight: "700",
  },
  h2: {
    fontSize: 24,
    fontWeight: "600",
  },
  h3: {
    fontSize: 20,
    fontWeight: "600",
  },
});

export default Typography;
