import React from "react";
import {
  Animated,
  Pressable,
  PressableProps,
  StyleProp,
  ViewStyle,
} from "react-native";

export interface TouchRippleProps extends PressableProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

const TouchRipple: React.FC<TouchRippleProps> = ({
  children,
  onFocus,
  onBlur,
  onHoverOut,
  onHoverIn,
  onPressOut,
  onPressIn,
  ...props
}) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const animatedValue = React.useRef(new Animated.Value(0)).current;

  // Animate the background color
  React.useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: isHovered ? 1 : 0,
      duration: 250,
      useNativeDriver: false,
    }).start();
  }, [isHovered]);

  // Interpolate the background color
  const backgroundColor = React.useMemo(() => {
    return animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: ["transparent", "rgba(0,0,0,0.1)"],
    });
  }, [isHovered, animatedValue]);

  const handleHoverIn = (event: any) => {
    setIsHovered(true);
    onFocus?.(event);
    onHoverIn?.(event);
    onPressIn?.(event);
  };

  const handleHoverOut = (event: any) => {
    setIsHovered(false);
    onBlur?.(event);
    onHoverOut?.(event);
    onPressOut?.(event);
  };

  return (
    <Pressable
      {...props}
      onFocus={handleHoverIn}
      onBlur={handleHoverOut}
      onHoverIn={handleHoverIn}
      onHoverOut={handleHoverOut}
      onPressIn={handleHoverIn}
      onPressOut={handleHoverOut}
    >
      <Animated.View
        style={{
          top: 0,
          left: 0,
          zIndex: 0,
          width: "100%",
          height: "100%",
          backgroundColor,
          position: "absolute",
        }}
      />
      {children}
    </Pressable>
  );
};

export default TouchRipple;
