import React from "react";
import {
  GestureResponderEvent,
  Image,
  ImageProps,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import { EvilIcons } from "..";
import { assets, isImageSource } from "../../utils";
import { IconSource } from "../icon";
import { TouchRipple, TouchRippleProps } from "../touch-ripple";

export type ChipMode = "filled" | "outlined" | "elevated";

export interface ChipProps extends Omit<TouchRippleProps, "children"> {
  label: string;
  mode?: ChipMode;
  selected?: boolean;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  onClose?: (event: GestureResponderEvent) => void;
  icon?: IconSource;
}

export const Chip: React.FC<ChipProps> = ({
  label,
  style,
  icon,
  onClose,
  textStyle,
  mode = "filled",
  selected = false,
  disabled = false,
  ...restProps
}) => {
  const getBackgroundColor = () => {
    if (disabled) return "#f0f0f0";
    if (selected && mode === "filled") return "#007AFF";
    if (mode === "outlined") return "transparent";
    if (mode === "elevated") return "#fff";
    return "#e0e0e0";
  };

  const getBorderColor = () => {
    if (disabled) return "#ddd";
    if (selected) return "#007AFF";
    return "#ccc";
  };

  const getTextColor = () => {
    if (disabled) return "#aaa";
    if (selected && mode === "filled") return "#fff";
    if (selected && mode === "outlined") return "#007AFF";
    return "#333";
  };

  //render custom
  const renderCustomIcon = React.useCallback((source: any) => {
    const CustomIcon = source as React.ComponentType<ImageProps>;
    return <CustomIcon style={{ width: 16, height: 16 }} />;
  }, []);

  return (
    <TouchRipple
      {...restProps}
      disabled={disabled}
      style={[
        styles.chip,
        {
          backgroundColor: getBackgroundColor(),
          borderColor: getBorderColor(),
          shadowOpacity: mode === "elevated" ? 0.2 : 0,
          elevation: mode === "elevated" ? 2 : 0,
        },
        style,
      ]}
    >
      {typeof icon === "string" && (
        <EvilIcons name={icon} size={16} color={getTextColor()} />
      )}
      {isImageSource(icon) && (
        <Image
          source={icon}
          resizeMode="contain"
          style={{ height: 16, width: 16 }}
        />
      )}
      {typeof icon === "function" && renderCustomIcon(icon)}

      <Text style={[styles.label, { color: getTextColor() }, textStyle]}>
        {label}
      </Text>
      {selected && (
        <TouchableOpacity onPress={onClose} activeOpacity={0.7}>
          <Image
            resizeMode="contain"
            source={assets.images.close}
            style={{
              width: 10,
              height: 10,
              tintColor: getTextColor(),
            }}
          />
        </TouchableOpacity>
      )}
    </TouchRipple>
  );
};

const styles = StyleSheet.create({
  chip: {
    alignItems: "center",
    borderRadius: 20,
    borderWidth: 1,
    flexDirection: "row",
    gap: 8,
    margin: 4,
    overflow: "hidden",
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
  },
});

export default Chip;
