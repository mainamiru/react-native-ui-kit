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
  title: string;
  expanded?: boolean;
  description?: string;
  children: React.ReactNode;
  titleNumberOfLines?: number;
  descriptionNumberOfLines?: number;
  style?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  headerStyle?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<ViewStyle>;
  descriptionStyle?: StyleProp<TextStyle>;
  onPress?: (event: GestureResponderEvent) => void;
}

export const ListAccordion: React.FC<ListAccordionProps> = ({
  title,
  style,
  onPress,
  children,
  titleStyle,
  description,
  headerStyle,
  contentStyle,
  expanded = false,
  descriptionStyle,
  titleNumberOfLines = 2,
  descriptionNumberOfLines = 2,
}) => {
  const [contentHeight, setContentHeight] = React.useState(0);
  const [isExpanded, setIsExpanded] = React.useState(expanded);
  const animatedHeight = React.useRef(new Animated.Value(0)).current;
  const rotationAnim = React.useRef(new Animated.Value(0)).current;

  //animate arrow
  React.useEffect(() => {
    Animated.timing(rotationAnim, {
      toValue: isExpanded ? 1 : 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [isExpanded, rotationAnim]);

  //toggle accordion
  const toggleAccordion = (e: GestureResponderEvent) => {
    Animated.timing(animatedHeight, {
      toValue: isExpanded ? 0 : contentHeight,
      duration: 200,
      useNativeDriver: false,
    }).start();
    setIsExpanded(!isExpanded);
    onPress?.(e);
  };

  //handle content size change
  const onContentSizeChange = (width: number, height: number) => {
    if (contentHeight !== height) {
      setContentHeight(height);
    }
  };

  const rotate = rotationAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });

  return (
    <View style={[styles.container, style]}>
      <TouchRipple onPress={toggleAccordion}>
        <View
          style={[
            {
              padding: 10,
              alignItems: "center",
              flexDirection: "row",
            },
            headerStyle,
          ]}
        >
          <View style={{ flex: 1 }}>
            <Text
              style={titleStyle}
              variant="titleMedium"
              numberOfLines={titleNumberOfLines}
            >
              {title}
            </Text>
            {description && (
              <Text
                variant="body"
                style={descriptionStyle}
                numberOfLines={descriptionNumberOfLines}
              >
                {description}
              </Text>
            )}
          </View>
          <Animated.Text style={[styles.arrow, { transform: [{ rotate }] }]}>
            ⌵
          </Animated.Text>
        </View>
      </TouchRipple>
      {isExpanded && <Divider margin={0} />}
      <Animated.View
        style={{
          overflow: "hidden",
          height: animatedHeight,
        }}
      >
        <ScrollView
          scrollEnabled={false}
          contentContainerStyle={contentStyle}
          showsVerticalScrollIndicator={false}
          onContentSizeChange={onContentSizeChange}
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
  },
  container: {
    backgroundColor: "#fff",
    borderColor: "#ccc",
    borderRadius: 8,
    borderWidth: 1,
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  titleContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
  },
  titleText: {
    fontSize: 16,
    fontWeight: "600",
  },
});

export default ListAccordion;
