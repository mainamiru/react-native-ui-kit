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
import Text from "./text";
import TouchRipple from "./touch-ripple";

export type ButtonVariant = "contained" | "outlined" | "text";

export interface ButtonIconProps {
  size: number;
  color: string;
}

export interface ButtonProps extends PressableProps {
  children: string;
  textColor?: string;
  loading?: boolean;
  buttonColor?: string;
  variant?: ButtonVariant;
  textStyle?: StyleProp<TextStyle>;
  buttonStyle?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  icon?: (props: ButtonIconProps) => React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  icon,
  loading,
  children,
  disabled,
  textStyle,
  textColor,
  buttonStyle,
  buttonColor,
  containerStyle,
  variant = "text",
  ...props
}) => {
  return (
    <TouchRipple
      {...props}
      disabled={disabled}
      style={[
        styles.base,
        styles[variant],
        buttonStyle,
        disabled && styles.disabled,
      ]}
    >
      <View style={[styles.container, containerStyle]}>
        {loading ? (
          <ActivityIndicator size={20} color={textColor} />
        ) : (
          icon && icon({ size: 20, color: textColor })
        )}
        <Text style={[{ color: textColor, fontWeight: "500" }, textStyle]}>
          {children}
        </Text>
      </View>
    </TouchRipple>
  );
};

const styles = StyleSheet.create({
  base: {
    padding: 10,
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
    gap: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  disabled: {
    opacity: 0.5,
  },
  hovered: {
    opacity: 1,
    width: "100%",
    height: "100%",
    position: "absolute",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
});

export default Button;
