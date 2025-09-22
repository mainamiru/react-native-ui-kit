import React, { useRef, useState } from "react";
import {
  Animated,
  Easing,
  GestureResponderEvent,
  LayoutChangeEvent,
  Pressable,
  PressableProps,
  StyleProp,
  View,
  ViewStyle,
} from "react-native";

export interface TouchRippleProps extends PressableProps {
  onPress?: () => void;
  rippleColor?: string;
  borderless?: boolean;
  rippleDuration?: number;
  style?: StyleProp<ViewStyle>;
  children: React.ReactElement;
}

export const TouchRipple: React.FC<TouchRippleProps> = ({
  style,
  onPress,
  children,
  borderless = false,
  rippleDuration = 400,
  rippleColor = "rgba(0,0,0,0.2)",
  ...props
}) => {
  const rippleX = useRef(new Animated.Value(0)).current;
  const rippleY = useRef(new Animated.Value(0)).current;
  const rippleAnim = useRef(new Animated.Value(0)).current;
  const rippleOpacity = useRef(new Animated.Value(0)).current;
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

  const handleLayout = (e: LayoutChangeEvent) => {
    const { width, height } = e.nativeEvent.layout;
    setContainerSize({ width, height });
  };

  const handlePressIn = (event: GestureResponderEvent) => {
    const { locationX, locationY } = event.nativeEvent;
    rippleAnim.setValue(0);
    rippleOpacity.setValue(1);
    rippleX.setValue(locationX);
    rippleY.setValue(locationY);

    Animated.timing(rippleAnim, {
      toValue: 1,
      duration: rippleDuration,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(rippleOpacity, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start();
    });
  };

  // max radius from touch to farthest corner
  const maxRadius = Math.sqrt(
    containerSize.width ** 2 + containerSize.height ** 2
  );

  const rippleSize = maxRadius * 2;

  const scale = rippleAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0.01, 1], // scale from tiny dot to full size
  });

  const rippleStyle: Animated.WithAnimatedObject<ViewStyle> = {
    position: "absolute",
    width: rippleSize,
    height: rippleSize,
    transform: [{ scale }],
    opacity: rippleOpacity,
    backgroundColor: rippleColor,
    borderRadius: rippleSize / 2,
  };

  return (
    <Pressable
      {...props}
      onPress={onPress}
      onPressIn={handlePressIn}
      style={({ pressed }) => [
        { borderRadius: 8 },
        style,
        !borderless && { overflow: "hidden" },
        pressed && { opacity: 0.98 },
      ]}
      onLayout={handleLayout}
    >
      <View style={{ flex: 1 }}>
        <Animated.View pointerEvents="none" style={rippleStyle} />
        {children}
      </View>
    </Pressable>
  );
};

export default TouchRipple;
