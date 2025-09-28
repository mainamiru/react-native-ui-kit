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
import { FlexView } from "../flex-view";
import { Row } from "../row";
import { Text } from "../text";
import TouchRipple from "../touch-ripple";

export interface ListAccordionProps {
  title: string;
  expanded?: boolean;
  description?: string;
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
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
  contentStyle,
  expanded = false,
  descriptionStyle,
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
        <Row alignItems="center" padding={10}>
          <FlexView>
            <Text variant="titleMedium" style={titleStyle}>
              {title}
            </Text>
            {description && <Text style={descriptionStyle}>{description}</Text>}
          </FlexView>
          <Animated.Text style={[styles.arrow, { transform: [{ rotate }] }]}>
            ⌵
          </Animated.Text>
        </Row>
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
