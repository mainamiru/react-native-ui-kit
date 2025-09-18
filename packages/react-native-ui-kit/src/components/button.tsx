import React from "react";
import {
  ActivityIndicator,
  StyleProp,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from "react-native";
import { useThemeColor } from "..";
import Text from "./text";

export type ButtonVariant = "contained" | "outlined" | "text";

export interface ButtonIconProps {
  size: number;
  color: string;
}

export interface ButtonProps extends TouchableOpacityProps {
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
  variant,
  loading,
  children,
  disabled,
  textStyle,
  buttonStyle,
  buttonColor,
  containerStyle,
  textColor = "white",
  activeOpacity = 0.7,
  ...props
}) => {
  const { border, primary } = useThemeColor();
  const defaultButtonStyle: ViewStyle = React.useMemo(() => {
    if (variant === "text") {
      return {
        borderWidth: 0,
        borderRadius: 0,
      };
    } else if (variant == "outlined") {
      return {
        borderWidth: 1,
        borderColor: border,
        backgroundColor: "transparent",
      };
    } else {
      return {
        borderWidth: 0,
        backgroundColor: buttonColor || primary,
      };
    }
  }, [variant, border]);

  return (
    <TouchableOpacity
      {...props}
      disabled={disabled || loading}
      activeOpacity={activeOpacity}
      style={[
        {
          padding: 10,
          borderRadius: 20,
          overflow: "hidden",
          alignItems: "center",
          justifyContent: "center",
        },
        defaultButtonStyle,
        buttonStyle,
      ]}
    >
      <View
        style={[
          {
            gap: 10,
            flexDirection: "row",
            alignItems: "center",
          },
          containerStyle,
        ]}
      >
        {loading ? (
          <ActivityIndicator size={20} color={textColor} />
        ) : (
          icon && icon({ size: 20, color: textColor })
        )}
        <Text
          style={[
            {
              color: textColor,
              fontWeight: "600",
              textAlign: "center",
            },
            textStyle,
          ]}
        >
          {children}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
