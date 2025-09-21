import React from "react";
import {
  Text as DefaultText,
  TextProps as DefaultTextProps,
  TextStyle,
} from "react-native";
import { useThemeColor } from "../hooks";

export type TextVariant =
  | "titleLarge"
  | "titleMedium"
  | "titleSmall"
  | "bodyLarge"
  | "bodyMedium"
  | "bodySmall"
  | "body"
  | "caption";

export interface TextProps extends DefaultTextProps {
  variant?: TextVariant;
}

export const Text = ({
  style,
  children,
  variant = "body",
  ...props
}: TextProps) => {
  const { text } = useThemeColor();
  return (
    <DefaultText {...props} style={[getStyle(text)[variant], style]}>
      {children}
    </DefaultText>
  );
};

const getStyle = (color: string): Record<TextVariant, TextStyle> => ({
  titleLarge: {
    color,
    fontSize: 20,
    fontWeight: "700",
  },
  titleMedium: {
    color,
    fontSize: 16,
    fontWeight: "500",
  },
  titleSmall: {
    color,
    fontSize: 14,
    fontWeight: "400",
  },
  bodyLarge: {
    color,
    fontSize: 16,
    fontWeight: "400",
  },
  bodyMedium: {
    color,
    fontSize: 14,
    fontWeight: "400",
  },
  bodySmall: {
    color,
    fontSize: 12,
    fontWeight: "400",
  },
  body: {
    color,
    fontSize: 14,
    fontWeight: "400",
  },
  caption: {
    color,
    fontSize: 12,
    fontWeight: "400",
  },
});

export default Text;
