import React from "react";
import { StyleProp, Text, TextStyle, View, ViewStyle } from "react-native";
import { useThemeColor } from "../../hooks";
import { getContrastColor } from "../../utils/color.utils";

export interface AvatarTextProps {
  text: string;
  size?: number;
  textColor?: string;
  backgroundColor?: string;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

const AvatarText = ({
  text,
  size,
  style,
  textStyle,
  textColor,
  backgroundColor,
}: AvatarTextProps) => {
  const { primary } = useThemeColor();
  const bgColor = backgroundColor || primary;
  const txtColor = textColor || getContrastColor(bgColor);

  return (
    <View
      style={[
        style,
        {
          width: size,
          height: size,
          overflow: "hidden",
          alignItems: "center",
          borderRadius: size / 2,
          justifyContent: "center",
          backgroundColor: bgColor,
        },
      ]}
    >
      <Text
        style={[
          {
            color: txtColor,
            fontWeight: "bold",
            fontSize: size / 2,
          },
          textStyle,
        ]}
      >
        {text}
      </Text>
    </View>
  );
};

export default AvatarText;
