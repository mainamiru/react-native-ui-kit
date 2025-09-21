import * as React from "react";
import {
  Animated,
  ScrollView,
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { Divider } from "../divider";
import { FlexView } from "../flex-view";
import { Row } from "../row";
import { Text } from "../text";

export interface ListAccordionProps {
  title: string;
  expanded?: boolean;
  description?: string;
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  contentStyle?: StyleProp<ViewStyle>;
  descriptionStyle?: StyleProp<TextStyle>;
}

export const ListAccordion: React.FC<ListAccordionProps> = ({
  title,
  style,
  children,
  titleStyle,
  description,
  contentStyle,
  expanded = false,
  descriptionStyle,
}) => {
  const [isExpanded, setIsExpanded] = React.useState(expanded);
  const [contentHeight, setContentHeight] = React.useState(0);
  const animatedHeight = React.useRef(new Animated.Value(0)).current;
  const rotationAnim = React.useRef(new Animated.Value(0)).current;

  //animate arrow
  React.useEffect(() => {
    Animated.timing(rotationAnim, {
      toValue: isExpanded ? 1 : 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [isExpanded]);

  //toggle accordion
  const toggleAccordion = () => {
    Animated.timing(animatedHeight, {
      toValue: isExpanded ? 0 : contentHeight,
      duration: 200,
      useNativeDriver: false,
    }).start();
    setIsExpanded(!isExpanded);
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
      <TouchableOpacity onPress={toggleAccordion}>
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
      </TouchableOpacity>
      {isExpanded && <Divider margin={0} />}
      <Animated.View
        style={{
          overflow: "hidden",
          height: animatedHeight,
        }}
      >
        <ScrollView
          scrollEnabled={false}
          showsVerticalScrollIndicator={false}
          onContentSizeChange={onContentSizeChange}
          contentContainerStyle={[{ padding: 10 }, contentStyle]}
        >
          {children}
        </ScrollView>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#ccc",
    backgroundColor: "#fff",
  },
  titleContainer: {
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titleText: {
    fontSize: 16,
    fontWeight: "600",
  },
  arrow: {
    fontSize: 16,
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
});

export default ListAccordion;
