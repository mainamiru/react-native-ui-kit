import { useEffect, useRef } from "react";
import { Animated, Easing, PanResponder, StyleSheet, Text } from "react-native";
import { Position, Toast } from "./utils";

interface ToastItemProps {
  toast: Toast;
  index?: number;
  position: Position;
  onRemove: () => void;
  onPause: () => void;
  onResume: () => void;
  backgroundColor?: string;
}

const ToastItem: React.FC<ToastItemProps> = ({
  toast,
  onRemove,
  onPause,
  onResume,
  index = 0,
  position,
  backgroundColor = "white",
}) => {
  const translateY = useRef(new Animated.Value(20)).current;
  const opacity = useRef(new Animated.Value(0)).current;
  const translateX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(translateY, {
        toValue: 0,
        duration: 200,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: onPause,
      onPanResponderMove: (_, g) => translateX.setValue(g.dx),
      onPanResponderRelease: (_, g) => {
        if (Math.abs(g.dx) > 100) {
          Animated.timing(translateX, {
            toValue: g.dx > 0 ? 500 : -500,
            duration: 180,
            useNativeDriver: true,
          }).start(onRemove);
        } else {
          Animated.spring(translateX, {
            toValue: 0,
            useNativeDriver: true,
          }).start(onResume);
        }
      },
    }),
  ).current;

  return (
    <Animated.View
      {...panResponder.panHandlers}
      style={[
        styles.toast,
        {
          opacity,
          position: "absolute",
          backgroundColor: backgroundColor,
          top: position.includes("top") ? index * 10 : undefined,
          bottom: position.includes("bottom") ? index * 10 : undefined,
          transform: [{ translateY }, { translateX }],
        },
      ]}
    >
      <Text style={styles.text}>{toast.message}</Text>
    </Animated.View>
  );
};

export default ToastItem;

const styles = StyleSheet.create({
  text: {
    color: "#fff",
    flexShrink: 1,
    fontWeight: "500",
  },
  toast: {
    alignItems: "center",
    borderColor: "rgba(255,255,255,0.5)",
    borderRadius: 8,
    borderWidth: 1,
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    justifyContent: "center",
    marginVertical: 6,
    minWidth: "60%",
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
});
