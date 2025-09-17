import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import {
  Animated,
  Easing,
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  Text,
  ViewStyle,
} from "react-native";

export type CheckboxStatus = "checked" | "unchecked" | "indeterminate";

export type CheckboxProps = {
  status?: CheckboxStatus; // controlled
  defaultStatus?: CheckboxStatus; // uncontrolled
  onChange?: (next: CheckboxStatus) => void;
  disabled?: boolean;
  size?: number;
  color?: string; // active color
  uncheckedColor?: string; // inactive border
  style?: ViewStyle;
  label?: string;
  testID?: string;
};

export type CheckboxRef = {
  toggle: () => void;
  setStatus: (v: CheckboxStatus) => void;
  getStatus: () => CheckboxStatus;
};

const ANIM_DURATION = 160;

export const Checkbox = forwardRef<CheckboxRef, CheckboxProps>((props, ref) => {
  const {
    status: controlledStatus,
    defaultStatus = "unchecked",
    onChange,
    disabled = false,
    size = 24,
    color = "#2563eb", // blue-600
    uncheckedColor = "#d1d5db", // gray-300
    style,
    label,
    testID,
  } = props;

  const isControlled = typeof controlledStatus === "string";
  const [internalStatus, setInternalStatus] = useState<CheckboxStatus>(
    isControlled ? (controlledStatus as CheckboxStatus) : defaultStatus
  );

  // Sync controlled → state
  useEffect(() => {
    if (isControlled) {
      setInternalStatus(controlledStatus as CheckboxStatus);
    }
  }, [controlledStatus, isControlled]);

  // Animate scale for mark
  const scaleAnim = useRef(
    new Animated.Value(internalStatus === "unchecked" ? 0 : 1)
  ).current;

  useEffect(() => {
    Animated.timing(scaleAnim, {
      toValue: internalStatus === "unchecked" ? 0 : 1,
      duration: ANIM_DURATION,
      easing: Easing.out(Easing.quad),
      useNativeDriver: true,
    }).start();
  }, [internalStatus, scaleAnim]);

  // handle toggle (cycles: unchecked → checked → indeterminate → unchecked)
  const cycleStatus = (curr: CheckboxStatus): CheckboxStatus => {
    if (curr === "unchecked") return "checked";
    if (curr === "checked") return "indeterminate";
    return "unchecked";
  };

  const setValueInternal = useCallback(
    (next: CheckboxStatus) => {
      if (!isControlled) setInternalStatus(next);
      onChange?.(next);
    },
    [isControlled, onChange]
  );

  const toggle = useCallback(() => {
    if (disabled) return;
    const next = cycleStatus(internalStatus);
    setValueInternal(next);
  }, [disabled, internalStatus, setValueInternal]);

  // expose imperative ref
  useImperativeHandle(
    ref,
    () => ({
      toggle,
      setStatus: (v: CheckboxStatus) => setValueInternal(v),
      getStatus: () =>
        isControlled ? (controlledStatus as CheckboxStatus) : internalStatus,
    }),
    [toggle, internalStatus, isControlled, controlledStatus]
  );

  const onPressHandler = (e?: GestureResponderEvent) => {
    toggle();
  };

  // colors
  const active = internalStatus !== "unchecked";

  return (
    <Pressable
      onPress={onPressHandler}
      accessibilityRole="checkbox"
      accessibilityState={{ disabled, checked: internalStatus === "checked" }}
      disabled={disabled}
      style={[styles.container, style]}
      testID={testID}
    >
      <Animated.View
        style={[
          {
            width: size,
            height: size,
            borderRadius: 4,
            borderWidth: 2,
            borderColor: active ? color : uncheckedColor,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: active ? color : "transparent",
          },
        ]}
      >
        {internalStatus === "checked" && (
          <Animated.Text
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: size * 0.7,
              transform: [{ scale: scaleAnim }],
            }}
          >
            ✓
          </Animated.Text>
        )}
        {internalStatus === "indeterminate" && (
          <Animated.View
            style={{
              width: size * 0.6,
              height: 2,
              backgroundColor: "white",
              transform: [{ scale: scaleAnim }],
            }}
          />
        )}
      </Animated.View>
      {label ? (
        <Text style={[styles.label, disabled && { color: "#9ca3af" }]}>
          {label}
        </Text>
      ) : null}
    </Pressable>
  );
});

Checkbox.displayName = "Checkbox";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  label: {
    marginLeft: 8,
    fontSize: 16,
    color: "#111827",
  },
});

export default Checkbox;
