import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import {
  AccessibilityRole,
  Animated,
  Easing,
  GestureResponderEvent,
  Platform,
  Pressable,
  StyleSheet,
  ViewStyle,
} from "react-native";

export type SwitchSize = "sm" | "md" | "lg";

export type SwitchProps = {
  value?: boolean; // controlled
  defaultValue?: boolean; // uncontrolled
  onValueChange?: (next: boolean) => void;
  disabled?: boolean;
  size?: SwitchSize;
  trackColor?: { true?: string; false?: string };
  thumbColor?: string;
  style?: ViewStyle;
  accessibilityLabel?: string;
  testID?: string;
};

export type SwitchRef = {
  toggle: () => void;
  setValue: (v: boolean) => void;
  getValue: () => boolean;
};

const SIZE_MAP = {
  sm: { width: 36, height: 20, thumb: 16, padding: 2 },
  md: { width: 48, height: 28, thumb: 24, padding: 2 },
  lg: { width: 60, height: 36, thumb: 30, padding: 3 },
};

const ANIM_DURATION = 160;

export const Switch = forwardRef<SwitchRef, SwitchProps>((props, ref) => {
  const {
    value: controlledValue,
    defaultValue = false,
    onValueChange,
    disabled = false,
    size = "md",
    trackColor = {
      true: "#34D399",
      false: "#E5E7EB",
    }, // green / gray default
    style,
    testID,
    thumbColor = "#FFFFFF",
    accessibilityLabel = "Toggle",
  } = props;

  const isControlled = typeof controlledValue === "boolean";
  const [internalValue, setInternalValue] = useState<boolean>(
    isControlled ? (controlledValue as boolean) : defaultValue
  );

  // Sync controlled prop -> state
  useEffect(() => {
    if (isControlled) {
      setInternalValue(controlledValue as boolean);
    }
  }, [controlledValue, isControlled]);

  // sizes
  const dims = SIZE_MAP[size] ?? SIZE_MAP.md;
  const trackWidth = dims.width;
  const trackHeight = dims.height;
  const thumbSize = dims.thumb;
  const padding = dims.padding;
  const travel = trackWidth - thumbSize - padding * 2;

  // Animated value: 0 -> off, 1 -> on
  const anim = useRef(new Animated.Value(internalValue ? 1 : 0)).current;

  // Animate when internalValue changes
  useEffect(() => {
    Animated.timing(anim, {
      toValue: internalValue ? 1 : 0,
      duration: ANIM_DURATION,
      easing: Easing.out(Easing.quad),
      useNativeDriver: true,
    }).start();
  }, [anim, internalValue]);

  // Derived animated styles
  const translateX = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, travel],
  });

  const interpolatedTrackColor = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [trackColor.false ?? "#E5E7EB", trackColor.true ?? "#34D399"],
  });

  // handle toggle
  const setValueInternal = useCallback(
    (next: boolean) => {
      if (!isControlled) setInternalValue(next);
      try {
        onValueChange?.(next);
      } catch {
        /* swallow */
      }
    },
    [isControlled, onValueChange]
  );

  const toggle = useCallback(() => {
    if (disabled) return;
    setValueInternal(!internalValue);
  }, [disabled, internalValue, setValueInternal]);

  // expose imperative ref
  useImperativeHandle(
    ref,
    () => ({
      toggle,
      setValue: (v: boolean) => setValueInternal(v),
      getValue: () =>
        isControlled ? (controlledValue as boolean) : internalValue,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [toggle, internalValue, isControlled, controlledValue]
  );

  const onPressHandler = (e?: GestureResponderEvent) => {
    // for accessibility and touch
    toggle();
  };

  // Accessibility role
  const role: AccessibilityRole = Platform.OS === "web" ? "switch" : "button";

  // Styles
  const containerStyle: ViewStyle = {
    width: trackWidth,
    height: trackHeight,
    borderRadius: trackHeight / 2,
    padding: padding,
    justifyContent: "center",
  };

  return (
    <Pressable
      onPress={onPressHandler}
      accessibilityRole={role}
      accessibilityState={{ disabled, checked: internalValue }}
      accessibilityLabel={accessibilityLabel}
      disabled={disabled}
      style={[styles.pressable, style]}
      testID={testID}
    >
      <Animated.View
        style={[
          containerStyle,
          styles.track,
          {
            backgroundColor: undefined, // use animated color below
            transform: [],
          },
        ]}
      >
        {/* Animated track color overlay */}
        <Animated.View
          style={[
            StyleSheet.absoluteFill,
            {
              borderRadius: trackHeight / 2,
              backgroundColor: interpolatedTrackColor,
            },
          ]}
        />
        <Animated.View
          pointerEvents="none"
          style={[
            {
              width: thumbSize,
              height: thumbSize,
              borderRadius: thumbSize / 2,
              backgroundColor: thumbColor,
              transform: [{ translateX }],
              // Shadow / elevation for thumb
              ...Platform.select({
                ios: {
                  shadowColor: "#000",
                  shadowOpacity: 0.12,
                  shadowRadius: 2,
                  shadowOffset: { width: 0, height: 1 },
                },
                android: {
                  elevation: 2,
                },
              }),
            },
          ]}
        />
      </Animated.View>
    </Pressable>
  );
});

Switch.displayName = "Switch";

const styles = StyleSheet.create({
  pressable: {
    alignSelf: "flex-start",
  },
  track: {
    overflow: "hidden",
  },
});

export default Switch;
