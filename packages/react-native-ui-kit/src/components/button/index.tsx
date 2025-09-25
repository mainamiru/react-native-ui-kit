import React from "react";
import {
  ActivityIndicator,
  PressableProps,
  StyleProp,
  StyleSheet,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import { useThemeColor } from "../../hooks";
import { getContrastColor } from "../../utils/color.utils";
import Text from "../text";
import TouchRipple from "../touch-ripple";

export type ButtonMode = "contained" | "outlined" | "text";

export interface ButtonIconProps {
  size: number;
  color: string;
}

export interface ButtonProps extends PressableProps {
  children: string;
  textColor?: string;
  loading?: boolean;
  mode?: ButtonMode;
  buttonColor?: string;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  leadingIcon?: (props: ButtonIconProps) => React.ReactNode;
  trailingIcon?: (props: ButtonIconProps) => React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  style,
  children,
  textStyle,
  textColor,
  buttonColor,
  loading = false,
  disabled = false,
  containerStyle,
  mode = "text",
  leadingIcon,
  trailingIcon,
  ...props
}) => {
  const { primary, text } = useThemeColor();

  //computed text color
  const computedTextColor = React.useMemo(() => {
    if (textColor) return textColor;
    if (mode === "contained" && buttonColor) {
      return getContrastColor(buttonColor);
    } else if (mode === "contained") {
      return getContrastColor(primary);
    } else if (mode === "outlined") {
      return text;
    }
  }, [mode, textColor, buttonColor, text]);

  return (
    <TouchRipple
      {...props}
      disabled={disabled || loading}
      style={[
        styles.base,
        styles[mode],
        style,
        mode === "contained" && {
          backgroundColor: buttonColor || primary,
        },
        mode === "outlined" && { borderColor: buttonColor || primary },
        disabled && styles.disabled,
      ]}
    >
      <View style={[styles.container, containerStyle]}>
        {loading ? (
          <ActivityIndicator size={16} color={computedTextColor} />
        ) : (
          leadingIcon && leadingIcon({ size: 16, color: computedTextColor })
        )}
        <Text
          style={[{ color: computedTextColor, fontWeight: "500" }, textStyle]}
        >
          {children}
        </Text>
        {trailingIcon && trailingIcon({ size: 16, color: computedTextColor })}
      </View>
    </TouchRipple>
  );
};

const styles = StyleSheet.create({
  base: {
    borderRadius: 20,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    borderWidth: 0,
    borderColor: "transparent",
    backgroundColor: "transparent",
  },
  outlined: {
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "transparent",
  },
  contained: {
    borderColor: "#645ff5",
    backgroundColor: "#645ff5",
  },
  container: {
    gap: 8,
    paddingHorizontal: 16,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  disabled: {
    opacity: 0.5,
  },
});

export default Button;
