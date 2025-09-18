import React from "react";
import {
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from "react-native";
import { useThemeColor } from "../../hooks";

export interface ListItemProps extends TouchableOpacityProps {
  title: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  description?: React.ReactNode;
  titleNumberOfLines?: number;
  descriptionNumberOfLines?: number;
  titleStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  descriptionStyle?: StyleProp<TextStyle>;
  left?: (style: { marginLeft: number }) => React.ReactNode;
  right?: (style: { marginRight: number }) => React.ReactNode;
}

const ListItem: React.FC<ListItemProps> = ({
  left,
  right,
  title,
  style,
  children,
  titleStyle,
  description,
  containerStyle,
  descriptionStyle,
  activeOpacity = 1,
  titleNumberOfLines = 1,
  descriptionNumberOfLines = 2,
  ...props
}) => {
  const { text } = useThemeColor();

  return (
    <TouchableOpacity {...props} activeOpacity={activeOpacity}>
      <View
        style={[
          style,
          {
            maxWidth: "100%",
            flexDirection: "row",
            alignItems: "center",
          },
        ]}
      >
        {left && left({ marginLeft: 10 })}
        <View style={[{ flex: 1, padding: 10 }, containerStyle]}>
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
    </TouchableOpacity>
  );
};

export default ListItem;
