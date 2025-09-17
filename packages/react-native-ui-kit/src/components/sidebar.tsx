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
  Dimensions,
  Modal,
  Pressable,
  StyleSheet,
  ViewStyle,
} from "react-native";

export type SidebarPosition = "left" | "right";

export type SidebarProps = {
  open?: boolean; // controlled
  defaultOpen?: boolean; // uncontrolled
  onOpenChange?: (next: boolean) => void;
  position?: SidebarPosition;
  width?: number;
  backdropColor?: string;
  style?: ViewStyle;
  children?: React.ReactNode;
  animationDuration?: number;
};

export type SidebarRef = {
  open: () => void;
  close: () => void;
  toggle: () => void;
  isOpen: () => boolean;
};

// default width = 80% of screen
const SCREEN_WIDTH = Dimensions.get("window").width;

export const Sidebar = forwardRef<SidebarRef, SidebarProps>((props, ref) => {
  const {
    style,
    children,
    onOpenChange,
    position = "left",
    defaultOpen = false,
    open: controlledOpen,
    animationDuration = 250,
    width = SCREEN_WIDTH * 0.8,
    backdropColor = "rgba(0,0,0,0.4)",
  } = props;

  const isControlled = typeof controlledOpen === "boolean";
  const [internalOpen, setInternalOpen] = useState<boolean>(
    isControlled ? (controlledOpen as boolean) : defaultOpen
  );

  // Sync controlled → state
  useEffect(() => {
    if (isControlled) {
      setInternalOpen(controlledOpen as boolean);
    }
  }, [controlledOpen, isControlled]);

  // Animated value (0 = closed, 1 = open)
  const anim = useRef(new Animated.Value(internalOpen ? 1 : 0)).current;

  // Open on mount if defaultOpen
  React.useEffect(() => {
    Animated.timing(anim, {
      toValue: internalOpen ? 1 : 0,
      duration: animationDuration,
      useNativeDriver: true,
    }).start();
  }, [internalOpen, anim, animationDuration]);

  // Set internal open state
  const setValueInternal = useCallback(
    (next: boolean) => {
      if (!isControlled) setInternalOpen(next);
      onOpenChange?.(next);
    },
    [isControlled, onOpenChange]
  );

  // Start animation
  const startAnimation = (toValue: number) => {
    Animated.timing(anim, {
      toValue,
      duration: animationDuration,
      useNativeDriver: true,
    }).start(() => setValueInternal(toValue > 0));
  };

  // Open
  const openFn = useCallback(() => startAnimation(1), [startAnimation]);

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
    [openFn, closeFn, toggleFn, controlledOpen, isControlled, internalOpen]
  );

  // Interpolations
  const translateX = anim.interpolate({
    inputRange: [0, 1],
    outputRange: position === "left" ? [-width, 0] : [width, 0],
  });

  return (
    <Modal
      transparent={true}
      animationType="none"
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
  sidebar: {
    position: "absolute",
    top: 0,
    bottom: 0,
    backgroundColor: "white",
    elevation: 8,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  content: {
    flex: 1,
    padding: 16,
  },
});

export default Sidebar;
