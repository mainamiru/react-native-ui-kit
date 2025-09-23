import * as React from "react";
import { Animated, Easing, View } from "react-native";

export interface ActivityIndicatorProps {
  size?: number;
  color?: string;
}

export const ActivityIndicator: React.FC<ActivityIndicatorProps> = ({
  size = 40,
  color = "#007bff",
}) => {
  const bars = Array.from({ length: 12 });
  const progress = React.useRef(new Animated.Value(0)).current;

  //handle animation
  React.useEffect(() => {
    const loop = Animated.loop(
      Animated.timing(progress, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    );
    loop.start();
    return () => loop.stop();
  }, [progress]);

  return (
    <View
      style={{
        width: size,
        height: size,
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {bars.map((_, i) => {
        // instead of sharp single highlight, give each bar a wider fade curve
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
};

export default ActivityIndicator;
