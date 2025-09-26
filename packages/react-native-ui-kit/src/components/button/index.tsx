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
          leadingIcon &&
          leadingIcon({
            size: 16,
            color: defualtStyle.textStyle.color,
          })
        )}
        <Text style={[styles.textStyle, defualtStyle.textStyle, textStyle]}>
          {children}
        </Text>
        {trailingIcon &&
          trailingIcon({
            size: 16,
            color: defualtStyle.textStyle.color,
          })}
      </View>
    </TouchRipple>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 14,
    fontWeight: "500",
  },
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
  elevated: {
    elevation: 0,
    backgroundColor: "#f2f7f6",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.3)",
  },
});

export default Button;
