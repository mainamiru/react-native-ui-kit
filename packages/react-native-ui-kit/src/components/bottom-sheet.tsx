import React, { forwardRef, useCallback, useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  Modal,
  PanResponder,
  Pressable,
  StyleSheet,
  View,
} from "react-native";

export type BottomSheetProps = {
  open?: boolean; // controlled
  defaultOpen?: boolean; // uncontrolled
  onOpenChange?: (next: boolean) => void;
  height?: number; // sheet height
  backdropColor?: string;
  children?: React.ReactNode;
  animationDuration?: number;
};

export type BottomSheetRef = {
  open: () => void;
  close: () => void;
  toggle: () => void;
  isOpen: () => boolean;
};

const SCREEN_HEIGHT = Dimensions.get("window").height;

const BottomSheetBase = forwardRef<BottomSheetRef, BottomSheetProps>(
  (props, ref) => {
    const {
      children,
      onOpenChange,
      open: controlledOpen,
      defaultOpen = false,
      animationDuration = 250,
      height = SCREEN_HEIGHT * 0.6,
      backdropColor = "rgba(0,0,0,0.4)",
    } = props;

    const isControlled = typeof controlledOpen === "boolean";
    const [internalOpen, setInternalOpen] = useState<boolean>(
      isControlled ? (controlledOpen as boolean) : defaultOpen
    );

    // Animated value (translateY)
    const translateY = React.useRef(
      new Animated.Value(internalOpen ? 0 : height)
    ).current;

    // Pan gesture
    const pan = React.useRef(new Animated.Value(0)).current;
    const panResponder = useRef(
      PanResponder.create({
        onMoveShouldSetPanResponder: (_, gesture) => gesture.dy > 5,
        onPanResponderMove: (_, gesture) => {
          if (gesture.dy > 0) {
            pan.setValue(gesture.dy);
          }
        },
        onPanResponderRelease: (_, gesture) => {
          if (gesture.dy > height / 3) {
            closeAnimation();
          } else {
            openAnimation();
          }
        },
      })
    ).current;

    // sync controlled → state
    React.useEffect(() => {
      if (isControlled) setInternalOpen(controlledOpen as boolean);
    }, [controlledOpen, isControlled]);

    const setValueInternal = useCallback(
      (next: boolean) => {
        if (!isControlled) setInternalOpen(next);
        onOpenChange?.(next);
      },
      [isControlled, onOpenChange]
    );

    // Start animation
    const openAnimation = React.useCallback(() => {
      Animated.timing(translateY, {
        toValue: 0,
        useNativeDriver: true,
        duration: animationDuration,
      }).start(() => setValueInternal(true));
    }, [translateY, animationDuration]);

    const closeAnimation = React.useCallback(() => {
      Animated.timing(translateY, {
        toValue: height,
        useNativeDriver: true,
        duration: animationDuration,
      }).start(() => setValueInternal(false));
    }, [translateY, animationDuration, height]);

    const closeFn = () => closeAnimation();
    const openFn = useCallback(() => {
      setInternalOpen(true);
      openAnimation();
    }, []);

    const toggleFn = useCallback(() => {
      if (internalOpen) return closeAnimation();
      setValueInternal(true);
      openAnimation();
    }, [internalOpen, closeAnimation, openAnimation]);

    React.useImperativeHandle(
      ref,
      () => ({
        open: openFn,
        close: closeFn,
        toggle: toggleFn,
        isOpen: () =>
          isControlled ? (controlledOpen as boolean) : internalOpen,
      }),
      [openFn, closeFn, toggleFn, controlledOpen, isControlled, internalOpen]
    );

    // Animation
    React.useEffect(() => {
      Animated.timing(translateY, {
        toValue: defaultOpen ? 0 : height,
        useNativeDriver: true,
        duration: animationDuration,
      }).start();
    }, [defaultOpen, height, translateY, animationDuration]);

    const sheetTranslateY = Animated.add(translateY, pan);

    return (
      <Modal
        transparent
        animationType="none"
        visible={internalOpen}
        onRequestClose={closeFn}
      >
        {/* Backdrop */}
        <Pressable
          style={[StyleSheet.absoluteFill, { backgroundColor: backdropColor }]}
          onPress={closeFn}
        />

        {/* BottomSheet */}
        <Animated.View
          style={[
            styles.sheet,
            {
              height,
              transform: [{ translateY: sheetTranslateY }],
            },
          ]}
          {...panResponder.panHandlers}
        >
          {/* drag indicator */}
          <View style={styles.dragIndicator} />
          {children}
        </Animated.View>
      </Modal>
    );
  }
);

BottomSheetBase.displayName = "BottomSheet";

export const BottomSheet = Object.assign(BottomSheetBase, {
  Trigger: ({
    children,
    bottomSheetRef,
  }: {
    children: React.ReactNode;
    bottomSheetRef: React.RefObject<BottomSheetRef>;
  }) => (
    <Pressable onPress={() => bottomSheetRef.current?.toggle()}>
      {children}
    </Pressable>
  ),
  Content: ({ children }: { children: React.ReactNode }) => (
    <View>{children}</View>
  ),
});

const styles = StyleSheet.create({
  sheet: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "white",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    overflow: "hidden",
    elevation: 8,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: -2 },
  },
  dragIndicator: {
    width: 40,
    height: 4,
    borderRadius: 2,
    backgroundColor: "#ccc",
    alignSelf: "center",
    marginVertical: 8,
  },
  content: {
    padding: 16,
  },
});

export default BottomSheet;
