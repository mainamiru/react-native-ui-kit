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

export interface AnchorProps {
  open: () => void;
  close: () => void;
}

export interface BottomSheetProps {
  open?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  defaultOpen?: boolean;
  backdropOpacity?: number;
  children: React.ReactNode;
  closeOnPressBack?: boolean;
  statusBarTranslucent?: boolean;
  closeOnPressBackdrop?: boolean;
  contentStyle?: StyleProp<ViewStyle>;
  anchor?: (props: AnchorProps) => void;
}

export const BottomSheet = React.forwardRef<BottomSheetRef, BottomSheetProps>(
  (
    {
      open,
      onOpen,
      anchor,
      onClose,
      children,
      contentStyle,
      defaultOpen = false,
      backdropOpacity = 0.5,
      closeOnPressBack = true,
      statusBarTranslucent = true,
      closeOnPressBackdrop = true,
    },
    ref,
  ) => {
    const [isOpen, setIsOpen] = React.useState(defaultOpen);
    const [contentHeight, setContentHeight] = React.useState(0);
    const [hasMeasured, setHasMeasured] = React.useState(false);
    const translateY = React.useRef(new Animated.Value(0)).current;

    // handle content layout
    const handleContentLayout = (event: LayoutChangeEvent) => {
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
    };

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
    }, [contentHeight, translateY]);

    // open modal
    const openModal = React.useCallback(() => {
      setIsOpen(true);
      Animated.timing(translateY, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start(onOpen);
    }, [translateY]);

    // handle ref
    React.useImperativeHandle(
      ref,
      () => ({
        open: openModal,
        close: closeModal,
      }),
      [closeModal, openModal],
    );

    //handle open prop
    React.useEffect(() => {
      if (open === undefined) return;
      if (open) {
        openModal();
      } else if (open === false) {
        closeModal();
      }
    }, [open]);

    //handle auto open
    React.useEffect(() => {
      if (isOpen && hasMeasured) {
        openModal();
      }
    }, [isOpen, hasMeasured]);

    return (
      <>
        {anchor && anchor({ open: openModal, close: closeModal })}
        <Modal
          transparent
          visible={isOpen}
          animationType="fade"
          statusBarTranslucent={statusBarTranslucent}
          onRequestClose={() => {
            if (closeOnPressBack) {
              closeModal();
            }
          }}
        >
          <Pressable
            onPress={closeModal}
            disabled={!closeOnPressBackdrop}
            style={[
              StyleSheet.absoluteFillObject,
              { backgroundColor: `rgba(0,0,0,${backdropOpacity})` },
            ]}
          />
          <Animated.View
            onLayout={handleContentLayout}
            style={[
              styles.content,
              contentStyle,
              { transform: [{ translateY }] },
            ]}
          >
            {children}
          </Animated.View>
        </Modal>
      </>
    );
  },
);

BottomSheet.displayName = "BottomSheet";

const styles = StyleSheet.create({
  content: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    bottom: 0,
    left: 0,
    overflow: "hidden",
    position: "absolute",
    right: 0,
  },
});

export default BottomSheet;
