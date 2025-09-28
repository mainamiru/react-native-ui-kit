import * as React from "react";
import {
  Animated,
  ActivityIndicator as DefaultActivityIndicator,
  Easing,
  Platform,
  StyleProp,
  View,
  ViewStyle,
} from "react-native";

export interface ActivityIndicatorProps {
  size?: number;
  color?: string;
  style?: StyleProp<ViewStyle>;
  indicator?: "default" | "ios";
}

export const ActivityIndicator: React.FC<ActivityIndicatorProps> = ({
  style,
  size = 40,
  color = "#007bff",
  indicator = "default",
}) => {
  const bars = Array.from({ length: 12 });
  const progress = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    if (indicator === "default") return;
    const loop = Animated.loop(
      Animated.timing(progress, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: Platform.OS !== "web", // ✅ Fix for web
      }),
    );
    loop.start();
    return () => loop.stop();
  }, [progress]);

  if (indicator === "default") {
    return (
      <DefaultActivityIndicator
        size={size}
        color={color}
        style={style}
        animating={true}
      />
    );
  } else {
    return (
      <View
        style={[
          style,
          {
            width: size,
            height: size,
            alignSelf: "center",
            justifyContent: "center",
            alignItems: "center",
          },
        ]}
      >
        {bars.map((_, i) => {
          const inputRange = [
            (i - 2) / bars.length,
            (i - 1) / bars.length,
            i / bars.length,
            (i + 1) / bars.length,
            (i + 2) / bars.length,
          ];
          const outputRange = [0.2, 0.5, 1, 0.5, 0.2];

          const opacity = progress.interpolate({
            inputRange,
            outputRange,
            extrapolate: "clamp",
          });

          const angle = (i * 360) / bars.length;
          return (
            <Animated.View
              key={i}
              style={{
                position: "absolute",
                width: size * 0.1,
                height: size * 0.3,
                borderRadius: size * 0.05,
                backgroundColor: color,
                opacity,
                transform: [
                  { rotate: `${angle}deg` },
                  { translateY: -size * 0.35 },
                ],
              }}
            />
          );
        })}
      </View>
    );
  }
};

export default ActivityIndicator;
