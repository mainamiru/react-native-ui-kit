import React from "react";
import {
  Text as DefaultText,
  TextProps as DefaultTextProps,
  TextStyle,
} from "react-native";

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
  return (
    <DefaultText {...props} style={[styles[variant], style]}>
      {children}
    </DefaultText>
  );
};

const styles: Record<TextVariant, TextStyle> = {
  titleLarge: {
    color: "black",
    fontSize: 20,
    fontWeight: "700",
  },
  titleMedium: {
    color: "#23262b",
    fontSize: 16,
    fontWeight: "500",
  },
  titleSmall: {
    color: "#2f2f30",
    fontSize: 14,
    fontWeight: "400",
  },
  bodyLarge: {
    color: "#2f2f30",
    fontSize: 16,
    fontWeight: "400",
  },
  bodyMedium: {
    color: "#2f2f30",
    fontSize: 14,
    fontWeight: "400",
  },
  bodySmall: {
    color: "#2f2f30",
    fontSize: 12,
    fontWeight: "400",
  },
  body: {
    color: "#2f2f30",
    fontSize: 14,
    fontWeight: "400",
  },
  caption: {
    color: "#2f2f30",
    fontSize: 12,
    fontWeight: "400",
  },
};
export default Text;
