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
  left?: (style: { marginLeft: number }) => React.ReactNode;
  right?: (style: { marginRight: number }) => React.ReactNode;
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
  const { text } = useThemeColor();

  return (
    <Pressable style={style} {...props}>
      <View
        style={[
          {
            gap: 10,
            maxWidth: "100%",
            flexDirection: "row",
            alignItems: "center",
          },
          containerStyle,
          { flexDirection: "row" },
        ]}
      >
        {left && left({ marginLeft: 10 })}
        <View style={{ flex: 1 }}>
          <Text
            numberOfLines={titleNumberOfLines}
            style={[
              {
                color: text,
                fontSize: 16,
                fontWeight: "500",
              },
              titleStyle,
            ]}
          >
            {title}
          </Text>
          {description && (
            <Text
              numberOfLines={descriptionNumberOfLines}
              style={[{ fontSize: 14, color: text }, descriptionStyle]}
            >
              {description}
            </Text>
          )}
        </View>
        {right && right({ marginRight: 10 })}
      </View>
      {children}
    </Pressable>
  );
};

export default ListView;
