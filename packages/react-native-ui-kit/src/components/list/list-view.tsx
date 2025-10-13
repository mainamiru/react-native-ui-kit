import React from "react";
import {
  Pressable,
  PressableProps,
  StyleProp,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import { useThemeColor } from "../../hooks";

export interface ListViewProps extends PressableProps {
  title: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
  titleNumberOfLines?: number;
  description?: React.ReactNode;
  descriptionNumberOfLines?: number;
  titleStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  descriptionStyle?: StyleProp<TextStyle>;
  left?: () => React.ReactNode;
  right?: () => React.ReactNode;
}

const ListView: React.FC<ListViewProps> = ({
  left,
  right,
  title,
  style,
  children,
  titleStyle,
  description,
  containerStyle,
  descriptionStyle,
  titleNumberOfLines = 1,
  descriptionNumberOfLines = 2,
  ...props
}) => {
  const { text, placeholder } = useThemeColor();

  return (
    <Pressable
      style={[
        {
          gap: 10,
          padding: 10,
          maxWidth: "100%",
          flexDirection: "row",
          alignItems: "center",
        },
        style,
      ]}
      {...props}
    >
      {left && left()}
      <View style={[{ flex: 1 }, containerStyle]}>
        <Text
          numberOfLines={titleNumberOfLines}
          style={[
            {
              color: text,
              fontSize: 16,
              fontWeight: "600",
            },
            titleStyle,
          ]}
        >
          {title}
        </Text>
        {description && (
          <Text
            numberOfLines={descriptionNumberOfLines}
            style={[{ fontSize: 14, color: placeholder }, descriptionStyle]}
          >
            {description}
          </Text>
        )}
        {children}
      </View>
      {right && right()}
    </Pressable>
  );
};

export default ListView;
