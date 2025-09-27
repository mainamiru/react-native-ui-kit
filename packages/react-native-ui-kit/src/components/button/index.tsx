import React from "react";
import {
  ActivityIndicator,
  ColorValue,
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

export type ButtonMode = "contained" | "outlined" | "text" | "elevated";

export interface ButtonIconProps {
  size: number;
  color: ColorValue;
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
  iconPosition?: "leading" | "trailing";
  icon?: (props: ButtonIconProps) => React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  icon,
  style,
  children,
  textStyle,
  textColor,
  buttonColor,
  loading = false,
  disabled = false,
  containerStyle,
  mode = "text",
  iconPosition = "leading",
  ...props
}) => {
  const { primary, text } = useThemeColor();

  // default styles
  const defualtStyle = React.useMemo(() => {
    const textStyle: TextStyle = { color: textColor || text };
    const buttonStyle: ViewStyle = {};
    if (mode == "contained") {
      buttonStyle.backgroundColor = buttonColor || primary;
      textStyle.color = getContrastColor(buttonColor || primary);
    } else if (mode == "outlined") {
      buttonStyle.borderColor = buttonColor || primary;
    } else if (mode == "elevated") {
      textStyle.color = textColor || "black";
      buttonStyle.backgroundColor = buttonColor;
    }
    return { textStyle, buttonStyle };
  }, [mode, text, primary, buttonColor, textColor]);

  return (
    <TouchRipple
      {...props}
      disabled={disabled || loading}
      style={[
        styles.base,
        styles[mode],
        style,
        defualtStyle.buttonStyle,
        disabled && styles.disabled,
      ]}
    >
      <View style={[styles.container, containerStyle]}>
        {loading ? (
          <ActivityIndicator size={16} color={defualtStyle.textStyle.color} />
        ) : (
          iconPosition === "leading" &&
          icon &&
          icon({
            size: 16,
            color: defualtStyle.textStyle.color,
          })
        )}
        <Text style={[styles.textStyle, defualtStyle.textStyle, textStyle]}>
          {children}
        </Text>
        {iconPosition === "trailing" &&
          icon &&
          icon({
            size: 16,
            color: defualtStyle.textStyle.color,
          })}
      </View>
    </TouchRipple>
  );
};

const styles = StyleSheet.create({
  base: {
    alignItems: "center",
    borderRadius: 20,
    justifyContent: "center",
    overflow: "hidden",
  },
  contained: {
    backgroundColor: "#645ff5",
    borderColor: "#645ff5",
  },
  container: {
    alignItems: "center",
    flexDirection: "row",
    gap: 8,
    justifyContent: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  disabled: {
    opacity: 0.5,
  },
  elevated: {
    backgroundColor: "#f2f7f6",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.3)",
    elevation: 0,
  },
  outlined: {
    backgroundColor: "transparent",
    borderColor: "#ccc",
    borderWidth: 1,
  },
  text: {
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderWidth: 0,
  },
  textStyle: {
    fontSize: 14,
    fontWeight: "500",
  },
});

export default Button;
