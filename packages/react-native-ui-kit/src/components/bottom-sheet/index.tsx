import * as React from "react";
import {
  Animated,
  LayoutChangeEvent,
  Modal,
  Pressable,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from "react-native";

export interface BottomSheetRef {
  open: () => void;
  close: () => void;
}

export interface BottomSheetProps {
  open?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  backdropOpacity?: number;
  children: React.ReactNode;
  statusBarTranslucent?: boolean;
  contentStyle?: StyleProp<ViewStyle>;
}

export const BottomSheet = React.forwardRef<BottomSheetRef, BottomSheetProps>(
  (
    {
      open,
      onOpen,
      onClose,
      children,
      contentStyle,
      backdropOpacity = 0.3,
      statusBarTranslucent = true,
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [contentHeight, setContentHeight] = React.useState(0);
    const [hasMeasured, setHasMeasured] = React.useState(false);
    const translateY = React.useRef(new Animated.Value(0)).current;

    // handle content layout
    const handleContentLayout = React.useCallback(
      (event: LayoutChangeEvent) => {
        const { height } = event.nativeEvent.layout;
        if (contentHeight === height) return;
        setHasMeasured(true);
        setContentHeight(height);

        // If already open, re-adjust
        if (hasMeasured && isOpen) {
          requestAnimationFrame(() => {
            Animated.timing(translateY, {
              toValue: 0,
              duration: 200,
              useNativeDriver: true,
            }).start();
          });
        } else {
          translateY.setValue(height);
        }
      },
      [contentHeight, hasMeasured, isOpen, translateY]
    );

    // close modal
    const closeModal = React.useCallback(() => {
      Animated.timing(translateY, {
        toValue: contentHeight,
        duration: 250,
        useNativeDriver: true,
      }).start(() => {
        setIsOpen(false);
        onClose?.();
      });
    }, [contentHeight, onClose, translateY]);

    // open modal
    const openModal = React.useCallback(() => {
      setIsOpen(true);
      if (!hasMeasured) return;

      Animated.timing(translateY, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start(onOpen);
    }, [hasMeasured, onOpen, translateY]);

    // sync external "open" prop
    React.useEffect(() => {
      if (open) {
        openModal();
      } else if (open === false) {
        closeModal();
      }
    }, [open, openModal, closeModal]);

    // handle ref
    React.useImperativeHandle(ref, () => ({
      open: openModal,
      close: closeModal,
    }));

    return (
      <Modal
        transparent
        visible={isOpen}
        animationType="none"
        onRequestClose={closeModal}
        statusBarTranslucent={statusBarTranslucent}
      >
        <Pressable
          onPress={closeModal}
          style={[
            styles.backdrop,
            { backgroundColor: `rgba(0,0,0,${backdropOpacity})` },
          ]}
        >
          <Animated.View
            pointerEvents="box-none"
            onLayout={handleContentLayout}
            style={[
              styles.content,
              contentStyle,
              { transform: [{ translateY }] },
            ]}
          >
            {children}
          </Animated.View>
        </Pressable>
      </Modal>
    );
  }
);

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    position: "relative",
    justifyContent: "flex-end",
  },
  content: {
    overflow: "hidden",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    backgroundColor: "white",
  },
});

export default BottomSheet;
