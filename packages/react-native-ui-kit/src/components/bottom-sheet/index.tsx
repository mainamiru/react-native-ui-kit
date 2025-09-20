import React, { forwardRef } from "react";
import {
  Animated,
  LayoutChangeEvent,
  Modal,
  Pressable,
  StyleProp,
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

export const BottomSheet = forwardRef<BottomSheetRef, BottomSheetProps>(
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
    const [isOpen, setIsOpen] = React.useState<boolean>(false);
    const [contentHeight, setContentHeight] = React.useState(0);
    const translateY = React.useRef(new Animated.Value(contentHeight)).current;

    //handle content layout
    const handleContentLayout = (event: LayoutChangeEvent) => {
      const { height } = event.nativeEvent.layout;
      setContentHeight(height);
    };

    //close modal
    const closeModal = () => {
      Animated.timing(translateY, {
        toValue: contentHeight,
        duration: 250,
        useNativeDriver: true,
      }).start(() => {
        setIsOpen(false);
        onClose && onClose();
      });
    };

    //open modal
    const openModal = () => {
      setIsOpen(true);
      Animated.timing(translateY, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start(onOpen);
    };

    //handle auto open and close
    React.useEffect(() => {
      if (open) {
        openModal();
      } else {
        closeModal();
      }
    }, [open]);

    //handle ref
    React.useImperativeHandle(
      ref,
      () => ({
        open: () => openModal(),
        close: () => closeModal(),
      }),
      []
    );

    return (
      <Modal
        transparent
        visible={isOpen}
        animationType="none"
        onRequestClose={() => closeModal()}
        statusBarTranslucent={statusBarTranslucent}
      >
        <Pressable
          onPress={() => closeModal()}
          style={{
            flex: 1,
            position: "relative",
            justifyContent: "flex-end",
            backgroundColor: `rgba(0,0,0,${backdropOpacity})`,
          }}
        >
          <Animated.View
            pointerEvents="box-none"
            onLayout={handleContentLayout}
            style={[
              {
                overflow: "hidden",
                borderTopLeftRadius: 12,
                borderTopRightRadius: 12,
                backgroundColor: "white",
              },
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
