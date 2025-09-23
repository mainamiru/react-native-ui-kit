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
  hoverColor?: string;
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

const TouchRipple: React.FC<TouchRippleProps> = ({
  style,
  children,
  onHoverOut,
  onHoverIn,
  onPressOut,
  onPressIn,
  hoverColor = "rgba(0,0,0,0.1)",
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
      outputRange: ["transparent", hoverColor],
    });
  }, [isHovered, animatedValue, hoverColor]);

  // Handle hover events
  const handleHoverIn = (event: any) => {
    setIsHovered(true);
    onHoverIn?.(event);
    onPressIn?.(event);
  };

  const handleHoverOut = (event: any) => {
    setIsHovered(false);
    onHoverOut?.(event);
    onPressOut?.(event);
  };

  return (
    <Pressable
      {...props}
      onHoverIn={handleHoverIn}
      onHoverOut={handleHoverOut}
      onPressIn={handleHoverIn}
      onPressOut={handleHoverOut}
      style={[{ position: "relative" }, style]}
    >
      <Animated.View
        style={[
          StyleSheet.absoluteFillObject,
          {
            top: 0,
            left: 0,
            zIndex: 0,
            width: "100%",
            height: "100%",
            backgroundColor,
            position: "absolute",
          },
        ]}
      />
      {children}
    </Pressable>
  );
};

export default TouchRipple;
