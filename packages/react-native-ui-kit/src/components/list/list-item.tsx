import React from "react";
import { StyleProp, TextStyle, View, ViewStyle } from "react-native";
import Text from "../text";
import TouchRipple, { TouchRippleProps } from "../touch-ripple";

export interface ListItemProps extends Omit<TouchRippleProps, "children"> {
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
  titleStyle,
  description,
  containerStyle,
  descriptionStyle,
  titleNumberOfLines = 2,
  descriptionNumberOfLines = 1,
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
            style={titleStyle}
            variant="titleMedium"
            numberOfLines={titleNumberOfLines}
          >
            {title}
          </Text>
          {description && (
            <Text
              variant="bodyMedium"
              style={descriptionStyle}
              numberOfLines={descriptionNumberOfLines}
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
