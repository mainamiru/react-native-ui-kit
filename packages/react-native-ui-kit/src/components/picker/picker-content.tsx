import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import BottomSheet from "../bottom-sheet";
import { Dialog } from "../dialog";
import Sidebar from "../sidebar";
import { usePickerContext } from "./utils";

export interface PickerContentProps {
  children: React.ReactNode;
  sidebarWidth?: number;
  style?: StyleProp<ViewStyle>;
  mode?: "dialog" | "sidebar" | "bottom-sheet";
}

const PickerContent = ({
  style,
  children,
  mode = "bottom-sheet",
}: PickerContentProps) => {
  const { isOpen, setIsOpen } = usePickerContext();

  //render
  if (mode === "dialog") {
    return (
      <Dialog open={isOpen} onValueChange={(value) => setIsOpen(value)}>
        <Dialog.Content style={style}>{children}</Dialog.Content>
      </Dialog>
    );
  } else if (mode === "sidebar") {
    return (
      <Sidebar open={isOpen} onOpenChange={(value) => setIsOpen(value)}>
        {children}
      </Sidebar>
    );
  } else {
    return (
      <BottomSheet
        open={isOpen}
        onOpen={() => setIsOpen(true)}
        onClose={() => setIsOpen(false)}
      >
        {children}
      </BottomSheet>
    );
  }
};

export default PickerContent;
