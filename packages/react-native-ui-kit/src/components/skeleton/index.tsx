import React, { useEffect, useRef } from "react";
import {
  Animated,
  DimensionValue,
  Platform,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";

export interface SkeletonProps {
  height?: number;
  width?: DimensionValue;
  borderRadius?: number;
  style?: StyleProp<ViewStyle>;
}

export const Skeleton: React.FC<SkeletonProps> = ({
  height = 16,
  width = "100%",
  borderRadius = 8,
  style,
}) => {
  const shimmer = useRef(new Animated.Value(-1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(shimmer, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: Platform.OS !== "web",
      }),
    ).start();
  }, [shimmer]);

  const translateX = shimmer.interpolate({
    inputRange: [-1, 1],
    outputRange: [-200, 200],
  });

  return (
    <View
      style={[
        styles.container,
        {
          width,
          height,
          borderRadius,
        },
        style,
      ]}
    >
      <Animated.View
        style={[
          styles.shimmer,
          {
            transform: [{ translateX }],
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e0e0e0",
    overflow: "hidden",
  },
  shimmer: {
    backgroundColor: "#f6f6f6",
    height: "100%",
    left: 0,
    opacity: 0.5,
    position: "absolute",
    top: 0,
    width: "50%",
  },
});

export default Skeleton;
