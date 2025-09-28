import * as React from "react";
import { Modal, Pressable, StyleProp, ViewStyle } from "react-native";
import { DialogContext } from "./utils";

export interface DialogContentProps {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

const DialogContent = ({ children, style }: DialogContentProps) => {
  const { isOpen, animation, setIsOpen } = React.useContext(DialogContext);
  return (
    <Modal
      visible={isOpen}
      transparent={true}
      animationType={animation}
      statusBarTranslucent={true}
      onRequestClose={() => setIsOpen(false)}
    >
      <Pressable
        onPress={() => setIsOpen(false)}
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      >
        <Pressable
          style={[
            {
              gap: 15,
              width: "90%",
              padding: 10,
              cursor: "auto",
              maxWidth: 500,
              borderRadius: 10,
              overflow: "hidden",
              backgroundColor: "white",
              pointerEvents: "box-none",
            },
            style,
          ]}
        >
          {children}
        </Pressable>
      </Pressable>
    </Modal>
  );
};

export default DialogContent;
