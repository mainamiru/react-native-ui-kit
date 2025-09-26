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
  Modal,
  Pressable,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from "react-native";

export type SidebarPosition = "left" | "right";

export type SidebarProps = {
  open?: boolean;
  width?: number;
  defaultOpen?: boolean;
  backdropColor?: string;
  children?: React.ReactNode;
  animationDuration?: number;
  position?: SidebarPosition;
  style?: StyleProp<ViewStyle>;
  type?: "default" | "permanent";
  onOpenChange?: (next: boolean) => void;
};

export type SidebarRef = {
  open: () => void;
  close: () => void;
  toggle: () => void;
  isOpen: () => boolean;
};

export const Sidebar = forwardRef<SidebarRef, SidebarProps>((props, ref) => {
  const {
    style,
    children,
    width = 300,
    onOpenChange,
    type = "default",
    position = "left",
    defaultOpen = false,
    open: controlledOpen,
    animationDuration = 250,
    backdropColor = "rgba(0,0,0,0.4)",
  } = props;

  const isControlled = typeof controlledOpen === "boolean";
  const [internalOpen, setInternalOpen] = useState<boolean>(
    isControlled ? (controlledOpen as boolean) : defaultOpen,
  );
  const anim = useRef(new Animated.Value(internalOpen ? 1 : 0)).current;

  // Sync controlled → state
  useEffect(() => {
    if (isControlled) {
      setInternalOpen(controlledOpen as boolean);
    }
  }, [controlledOpen, isControlled]);

  // Open on mount if defaultOpen
  React.useEffect(() => {
    requestAnimationFrame(() => {
      Animated.timing(anim, {
        toValue: internalOpen ? 1 : 0,
        duration: animationDuration,
        useNativeDriver: true,
      }).start();
    });
  }, [internalOpen, anim, animationDuration]);

  // Set internal open state
  const setValueInternal = useCallback(
    (next: boolean) => {
      if (!isControlled) setInternalOpen(next);
      onOpenChange?.(next);
    },
    [isControlled, onOpenChange],
  );

  // Start animation
  const startAnimation = React.useCallback(
    (toValue: number) => {
      Animated.timing(anim, {
        toValue,
        useNativeDriver: true,
        duration: animationDuration,
      }).start(() => setValueInternal(toValue > 0));
    },
    [anim, animationDuration],
  );

  // Open
  const openFn = useCallback(() => {
    setInternalOpen(true);
    requestAnimationFrame(() => startAnimation(1));
  }, [startAnimation]);

  // Close
  const closeFn = useCallback(() => startAnimation(0), [startAnimation]);

  // Toggle
  const toggleFn = useCallback(() => {
    if (internalOpen) return startAnimation(0);
    setValueInternal(true);
  }, [internalOpen, startAnimation]);

  useImperativeHandle(
    ref,
    () => ({
      open: openFn,
      close: closeFn,
      toggle: toggleFn,
      isOpen: () => (isControlled ? (controlledOpen as boolean) : internalOpen),
    }),
    [openFn, closeFn, toggleFn, controlledOpen, isControlled, internalOpen],
  );

  // Interpolations
  const translateX = anim.interpolate({
    inputRange: [0, 1],
    outputRange: position === "left" ? [-width, 0] : [width, 0],
  });

  if (type === "permanent") {
    return (
      <Animated.View
        style={[
          styles.sidebar,
          {
            width,
            transform: [{ translateX }],
          },
          style,
        ]}
      >
        {children}
      </Animated.View>
    );
  }

  return (
    <Modal
      transparent={true}
      animationType="fade"
      onRequestClose={closeFn}
      visible={internalOpen}
    >
      {/* Backdrop */}
      <Pressable
        style={[StyleSheet.absoluteFill, { backgroundColor: backdropColor }]}
        onPress={closeFn}
      />

      {/* Sidebar */}
      <Animated.View
        style={[
          styles.sidebar,
          {
            width,
            [position]: 0,
            transform: [{ translateX }],
          },
          style,
        ]}
      >
        {children}
      </Animated.View>
    </Modal>
  );
});

Sidebar.displayName = "Sidebar";

const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: 16,
  },
  sidebar: {
    backgroundColor: "white",
    bottom: 0,
    elevation: 8,
    position: "absolute",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    top: 0,
  },
});

export default Sidebar;
