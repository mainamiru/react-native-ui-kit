import * as React from "react";
import {
  Animated,
  GestureResponderEvent,
  ScrollView,
  StyleProp,
  StyleSheet,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import { Divider } from "../divider";
import { Text } from "../text";
import TouchRipple from "../touch-ripple";

export interface ListAccordionProps {
  /** Title displayed in the header */
  title: string;
  /** Optional subtitle text below the title */
  description?: string;
  /** Whether the accordion starts expanded */
  expanded?: boolean;
  /** Content inside the accordion */
  children: React.ReactNode;
  /** Callback when the accordion header is pressed */
  onPress?: (event: GestureResponderEvent) => void;
  /** Style overrides */
  style?: StyleProp<ViewStyle>;
  headerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  descriptionStyle?: StyleProp<TextStyle>;
  contentStyle?: StyleProp<ViewStyle>;
  /** Number of lines to show for title/description */
  titleNumberOfLines?: number;
  descriptionNumberOfLines?: number;
}

export const ListAccordion: React.FC<ListAccordionProps> = ({
  title,
  description,
  children,
  onPress,
  expanded = false,
  style,
  headerStyle,
  titleStyle,
  descriptionStyle,
  contentStyle,
  titleNumberOfLines = 2,
  descriptionNumberOfLines = 2,
}) => {
  const [isExpanded, setIsExpanded] = React.useState(expanded);
  const [contentHeight, setContentHeight] = React.useState(0);
  const rotationAnim = React.useRef(new Animated.Value(0)).current;
  const animatedHeight = React.useRef(new Animated.Value(0)).current;

  //handle animation
  React.useEffect(() => {
    Animated.parallel([
      Animated.timing(rotationAnim, {
        toValue: isExpanded ? 1 : 0,
        duration: 200,
        useNativeDriver: true,
      }),

      Animated.timing(animatedHeight, {
        toValue: isExpanded ? 1 : 0,
        duration: 200,
        useNativeDriver: false,
      }),
    ]).start();
  }, [isExpanded]);

  const toggleAccordion = (e: GestureResponderEvent) => {
    setIsExpanded((prev) => !prev);
    onPress?.(e);
  };

  const onContentLayout = (width: number, height: number) => {
    if (contentHeight !== height) setContentHeight(height);
  };

  const heightInterpolation = animatedHeight.interpolate({
    inputRange: [0, 1],
    outputRange: [0, contentHeight],
  });

  const rotateInterpolation = rotationAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });

  return (
    <View style={[styles.container, style]}>
      <TouchRipple onPress={toggleAccordion}>
        <View style={[styles.header, headerStyle]}>
          <View style={{ flex: 1 }}>
            <Text
              style={[styles.title, titleStyle]}
              numberOfLines={titleNumberOfLines}
              variant="titleMedium"
            >
              {title}
            </Text>
            {description && (
              <Text
                style={[styles.description, descriptionStyle]}
                numberOfLines={descriptionNumberOfLines}
                variant="body"
              >
                {description}
              </Text>
            )}
          </View>
          <Animated.Text
            style={[
              styles.arrow,
              { transform: [{ rotate: rotateInterpolation }] },
            ]}
          >
            ⌵
          </Animated.Text>
        </View>
      </TouchRipple>

      {isExpanded && <Divider margin={0} />}

      <Animated.View
        style={{ height: heightInterpolation, overflow: "hidden" }}
      >
        <ScrollView
          scrollEnabled={false}
          contentContainerStyle={contentStyle}
          showsVerticalScrollIndicator={false}
          onContentSizeChange={onContentLayout}
        >
          {children}
        </ScrollView>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  arrow: {
    fontSize: 16,
    marginLeft: 8,
  },
  container: {
    backgroundColor: "#fff",
    borderColor: "#ddd",
    borderRadius: 8,
    borderWidth: 1,
    overflow: "hidden",
  },
  description: {
    color: "#666",
    fontSize: 14,
  },
  header: {
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
  },
});

export default ListAccordion;
