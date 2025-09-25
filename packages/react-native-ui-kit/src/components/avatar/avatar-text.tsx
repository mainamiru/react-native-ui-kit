import React from "react";
import { StyleProp, Text, TextStyle, View, ViewStyle } from "react-native";
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
  backgroundColor = "#62bd6e",
}: AvatarTextProps) => {
  return (
    <View
      style={[
        style,
        {
          width: size,
          height: size,
          backgroundColor,
          overflow: "hidden",
          alignItems: "center",
          borderRadius: size / 2,
          justifyContent: "center",
        },
      ]}
    >
      <Text
        style={[
          {
            fontWeight: "bold",
            fontSize: size / 2,
            color: textColor || getContrastColor(backgroundColor),
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
