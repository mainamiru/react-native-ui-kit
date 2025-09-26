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
  PanResponder,
  PanResponderGestureState,
  Platform,
  Pressable,
  StyleSheet,
  ViewStyle,
} from "react-native";

export type SwitchSize = "sm" | "md" | "lg" | number;

export type SwitchProps = {
  value?: boolean; // controlled
  defaultValue?: boolean; // uncontrolled
  onValueChange?: (next: boolean) => void;
  disabled?: boolean;
  size?: SwitchSize;
  thumbColor?: string;
  style?: ViewStyle;
  accessibilityLabel?: string;
  testID?: string;
  activeTrackColor?: string;
  inactiveTrackColor?: string;
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
    style,
    testID,
    size = "md",
    onValueChange,
    disabled = false,
    defaultValue = false,
    value: controlledValue,
    thumbColor = "#FFFFFF",
    activeTrackColor = "green",
    inactiveTrackColor = "grey",
    accessibilityLabel = "Toggle",
  } = props;

  const isControlled = typeof controlledValue === "boolean";
  const [internalValue, setInternalValue] = useState<boolean>(
    isControlled ? (controlledValue as boolean) : defaultValue,
  );

  useEffect(() => {
    if (isControlled) {
      setInternalValue(controlledValue as boolean);
    }
  }, [controlledValue, isControlled]);

  const dims = SIZE_MAP[size] ?? size;
  const trackWidth = dims.width;
  const trackHeight = dims.height;
  const thumbSize = dims.thumb;
  const padding = dims.padding;
  const travel = trackWidth - thumbSize - padding * 2;

  const anim = useRef(new Animated.Value(internalValue ? 1 : 0)).current;

  useEffect(() => {
    Animated.timing(anim, {
      toValue: internalValue ? 1 : 0,
      duration: ANIM_DURATION,
      easing: Easing.out(Easing.quad),
      useNativeDriver: true,
    }).start();
  }, [anim, internalValue]);

  const translateX = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, travel],
  });

  // ✅ proper color fade
  const inactiveOpacity = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0],
  });
  const activeOpacity = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const setValueInternal = useCallback(
    (next: boolean) => {
      if (!isControlled) setInternalValue(next);
      onValueChange?.(next);
    },
    [isControlled, onValueChange],
  );

  const toggle = useCallback(() => {
    if (!disabled) setValueInternal(!internalValue);
  }, [disabled, internalValue, setValueInternal]);

  useImperativeHandle(
    ref,
    () => ({
      toggle,
      setValue: (v: boolean) => setValueInternal(v),
      getValue: () =>
        isControlled ? (controlledValue as boolean) : internalValue,
    }),
    [toggle, internalValue, isControlled, controlledValue],
  );

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => !disabled,
      onStartShouldSetPanResponder: () => !disabled,
      onPanResponderMove: (_, gesture: PanResponderGestureState) => {
        const ratio = Math.min(Math.max(gesture.dx / travel, -1), 1);
        const base = internalValue ? 1 : 0;
        anim.setValue(Math.min(Math.max(base + ratio, 0), 1));
      },
      onPanResponderRelease: (_, gesture: PanResponderGestureState) => {
        const movedRatio = gesture.dx / travel;
        const next = movedRatio + (internalValue ? 1 : 0) >= 0.5;
        setValueInternal(next);
      },
      onPanResponderTerminate: () => {
        Animated.timing(anim, {
          toValue: internalValue ? 1 : 0,
          duration: ANIM_DURATION,
          easing: Easing.out(Easing.quad),
          useNativeDriver: true,
        }).start();
      },
    }),
  ).current;

  const containerStyle: ViewStyle = {
    width: trackWidth,
    height: trackHeight,
    borderRadius: trackHeight / 2,
    padding,
    justifyContent: "center",
  };

  const role: AccessibilityRole = "switch";

  return (
    <Pressable
      testID={testID}
      disabled={disabled}
      onPress={toggle}
      accessibilityRole={role}
      accessibilityLabel={accessibilityLabel}
      style={[{ alignSelf: "flex-start" }, style]}
      accessibilityState={{ disabled, checked: internalValue }}
    >
      <Animated.View style={[containerStyle, { overflow: "hidden" }]}>
        {/* track layers */}
        <Animated.View
          style={[
            StyleSheet.absoluteFill,
            {
              borderRadius: trackHeight / 2,
              backgroundColor: inactiveTrackColor,
              opacity: inactiveOpacity,
            },
          ]}
        />
        <Animated.View
          style={[
            StyleSheet.absoluteFill,
            {
              opacity: activeOpacity,
              borderRadius: trackHeight / 2,
              backgroundColor: activeTrackColor,
            },
            disabled && { backgroundColor: "grey" },
          ]}
        />

        {/* thumb */}
        <Animated.View
          {...panResponder.panHandlers}
          style={{
            width: thumbSize,
            height: thumbSize,
            borderRadius: thumbSize / 2,
            backgroundColor: thumbColor,
            transform: [{ translateX }],
            ...Platform.select({
              ios: {
                shadowColor: "#000",
                shadowOpacity: 0.12,
                shadowRadius: 2,
                shadowOffset: { width: 0, height: 1 },
              },
              android: { elevation: 2 },
            }),
          }}
        />
      </Animated.View>
    </Pressable>
  );
});

Switch.displayName = "Switch";

export default Switch;
