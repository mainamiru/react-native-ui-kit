import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import BottomSheet from "../bottom-sheet";
import { Dialog } from "../dialog";
import Sidebar from "../sidebar";
import { usePickerContext } from "./utils";

export interface PickerContentProps {
  sidebarWidth?: number;
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  sidebarPosition?: "left" | "right";
}

const PickerContent = ({
  style,
  children,
  sidebarPosition = "right",
}: PickerContentProps) => {
  const { mode, isOpen, setIsOpen } = usePickerContext();

  //render
  if (mode === "dialog") {
    return (
      <Dialog open={isOpen} onValueChange={(value) => setIsOpen(value)}>
        <Dialog.Content style={style}>{children}</Dialog.Content>
      </Dialog>
    );
  } else if (mode === "sidebar") {
    return (
      <Sidebar
        open={isOpen}
        style={style}
        position={sidebarPosition}
        onOpenChange={(value) => setIsOpen(value)}
      >
        {children}
      </Sidebar>
    );
  } else {
    return (
      <BottomSheet
        open={isOpen}
        contentStyle={style}
        onOpen={() => setIsOpen(true)}
        onClose={() => setIsOpen(false)}
      >
        {children}
      </BottomSheet>
    );
  }
};

export default PickerContent;
