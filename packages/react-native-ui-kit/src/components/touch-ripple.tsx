import React from "react";
import {
  Animated,
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from "react-native";

export interface TouchRippleProps extends PressableProps {
  children?: React.ReactNode;
  /**
   * Whether to use native driver for animation
   */
  useNativeDriver?: boolean;
  /**
   * Custom hover style using animated value
   */
  hoverStyle?: (
    animatedValue: Animated.Value
  ) => Animated.WithAnimatedObject<ViewStyle> | StyleProp<ViewStyle>;
}

export const TouchRipple: React.FC<TouchRippleProps> = ({
  style,
  children,
  onHoverIn,
  onHoverOut,
  onPressIn,
  onPressOut,
  hoverStyle,
  useNativeDriver = false,
  ...props
}) => {
  const animatedValue = React.useRef(new Animated.Value(0)).current;

  const animateTo = React.useCallback(
    (toValue: number) => {
      Animated.timing(animatedValue, {
        toValue,
        duration: 250,
        useNativeDriver,
      }).start();
    },
    [animatedValue, useNativeDriver]
  );

  const handleIn = React.useCallback(
    (event: any) => {
      animateTo(1);
      onHoverIn?.(event);
      onPressIn?.(event);
    },
    [animateTo, onHoverIn, onPressIn]
  );

  const handleOut = React.useCallback(
    (event: any) => {
      animateTo(0);
      onHoverOut?.(event);
      onPressOut?.(event);
    },
    [animateTo, onHoverOut, onPressOut]
  );

  const backgroundColor = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["transparent", "rgba(0,0,0,0.1)"],
  });

  return (
    <Pressable
      {...props}
      style={style}
      onHoverIn={handleIn}
      onHoverOut={handleOut}
      onPressIn={handleIn}
      onPressOut={handleOut}
    >
      <Animated.View
        pointerEvents="none"
        style={[
          StyleSheet.absoluteFill,
          !hoverStyle && { backgroundColor },
          hoverStyle?.(animatedValue),
        ]}
      />
      {children}
    </Pressable>
  );
};

export default TouchRipple;
