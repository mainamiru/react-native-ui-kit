import React, { useRef, useState } from "react";
import {
  Animated,
  Easing,
  GestureResponderEvent,
  LayoutChangeEvent,
  Pressable,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";

type TouchableProps = {
  onPress?: () => void;
  rippleColor?: string;
  borderless?: boolean;
  rippleDuration?: number;
  style?: StyleProp<ViewStyle>;
  children: React.ReactElement;
};

export const Touchable: React.FC<TouchableProps> = ({
  style,
  onPress,
  children,
  borderless = false,
  rippleDuration = 400,
  rippleColor = "rgba(0,0,0,0.2)",
}) => {
  const rippleAnim = useRef(new Animated.Value(0)).current;
  const rippleOpacity = useRef(new Animated.Value(0)).current;
  const rippleX = useRef(new Animated.Value(0)).current;
  const rippleY = useRef(new Animated.Value(0)).current;

  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

  const handleLayout = (e: LayoutChangeEvent) => {
    const { width, height } = e.nativeEvent.layout;
    setContainerSize({ width, height });
  };

  const handlePressIn = (event: GestureResponderEvent) => {
    const { locationX, locationY } = event.nativeEvent;

    rippleX.setValue(locationX);
    rippleY.setValue(locationY);
    rippleAnim.setValue(0);
    rippleOpacity.setValue(1);

    Animated.timing(rippleAnim, {
      toValue: 1,
      duration: rippleDuration,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(rippleOpacity, {
        toValue: 0,
        duration: 150,
        useNativeDriver: true,
      }).start();
    });
  };

  // compute max radius (farthest corner distance)
  const radius = Math.sqrt(
    containerSize.width ** 2 + containerSize.height ** 2
  );

  const scale = rippleAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0.01, radius / 10], // adjust divisor for speed
  });

  const rippleStyle: ViewStyle = {
    position: "absolute" as const,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: rippleColor,
    transform: [
      { translateX: Animated.subtract(rippleX, 10) },
      { translateY: Animated.subtract(rippleY, 10) },
      { scale },
    ],
    opacity: rippleOpacity,
  };

  return (
    <Pressable
      onPress={onPress}
      onPressIn={handlePressIn}
      style={({ pressed }) => [
        styles.container,
        style,
        !borderless && { overflow: "hidden" },
        pressed && { opacity: 0.98 }, // slight feedback
      ]}
      onLayout={handleLayout}
    >
      <View style={styles.content}>
        <Animated.View pointerEvents="none" style={rippleStyle} />
        {children}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
  },
});
