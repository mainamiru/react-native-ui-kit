import * as React from "react";
import { StyleProp, ViewStyle } from "react-native";
import { EvilIcons } from "../evil-icons";
import { IconName } from "../icon";
import TouchRipple, { TouchRippleProps } from "../touch-ripple";

export interface IconButtonProps extends TouchRippleProps {
  size?: number;
  name: IconName;
  color?: string;
  backgroundColor?: string;
  style?: StyleProp<ViewStyle>;
}

export const IconButton = ({
  name,
  style,
  size = 30,
  color = "black",
  backgroundColor = "white",
  ...restProps
}: IconButtonProps) => {
  return (
    <TouchRipple
      {...restProps}
      style={[
        {
          width: size,
          height: size,
          backgroundColor,
          borderRadius: 5,
          overflow: "hidden",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
        },
        style,
      ]}
    >
      <EvilIcons name={name} size={size / 1.5} color={color} />
    </TouchRipple>
  );
};

export default IconButton;
