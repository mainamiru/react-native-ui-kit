import React, { useEffect, useRef } from "react";
import { Animated, StyleProp, StyleSheet, View, ViewStyle } from "react-native";

export interface ProgressBarProps {
  progress: number; // value between 0 and 1
  height?: number;
  fillColor?: string;
  animated?: boolean;
  borderRadius?: number;
  backgroundColor?: string;
  animationDuration?: number;
  style?: StyleProp<ViewStyle>;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  height = 10,
  backgroundColor = "#e0e0e0",
  fillColor = "#3b82f6",
  borderRadius = 8,
  style,
  animated = true,
  animationDuration = 500,
}) => {
  const animatedValue = useRef(new Animated.Value(progress)).current;

  useEffect(() => {
    if (animated) {
      Animated.timing(animatedValue, {
        toValue: progress,
        duration: animationDuration,
        useNativeDriver: false,
      }).start();
    } else {
      animatedValue.setValue(progress);
    }
  }, [progress, animated, animationDuration]);

  const widthInterpolated = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0%", "100%"],
  });

  return (
    <View
      style={[
        styles.container,
        { height, backgroundColor, borderRadius },
        style,
      ]}
    >
      <Animated.View
        style={[
          styles.fill,
          {
            width: widthInterpolated,
            backgroundColor: fillColor,
            borderRadius,
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    width: "100%",
  },
  fill: {
    height: "100%",
  },
});

export default ProgressBar;
