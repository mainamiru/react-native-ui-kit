import React from "react";
import { StyleProp, Text, TextStyle, View, ViewStyle } from "react-native";
import TouchRipple, { TouchRippleProps } from "../touch-ripple";

export interface ListItemProps extends TouchRippleProps {
  title: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  description?: React.ReactNode;
  titleNumberOfLines?: number;
  descriptionNumberOfLines?: number;
  titleStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  descriptionStyle?: StyleProp<TextStyle>;
  left?: () => React.ReactNode;
  right?: () => React.ReactNode;
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
  titleNumberOfLines = 1,
  descriptionNumberOfLines = 2,
  ...props
}) => {
  return (
    <TouchRipple {...props}>
      <View
        style={[
          {
            gap: 10,
            padding: 10,
            maxWidth: "100%",
          },
          style,
          {
            alignItems: "center",
            flexDirection: "row",
          },
        ]}
      >
        {left && left()}
        <View style={[{ flex: 1 }, containerStyle]}>
          <Text
            numberOfLines={titleNumberOfLines}
            style={[{ fontSize: 16, fontWeight: "500" }, titleStyle]}
          >
            {title}
          </Text>
          {description && (
            <Text
              numberOfLines={descriptionNumberOfLines}
              style={[{ fontSize: 14, color: "gray" }, descriptionStyle]}
            >
              {description}
            </Text>
          )}
        </View>
        {right && right()}
      </View>
    </TouchRipple>
  );
};

export default ListItem;
