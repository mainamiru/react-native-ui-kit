import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import BottomSheet from "../bottom-sheet";
import { Dialog } from "../dialog";
import Sidebar from "../sidebar";
import { usePickerContext } from "./utils";

export interface PickerContentProps {
  /** Width of the sidebar (only applicable in sidebar mode) */
  sidebarWidth?: number;
  /** Child components to render inside the picker content */
  children: React.ReactNode;
  /** Optional custom styles for the content container */
  style?: StyleProp<ViewStyle>;
  /** Sidebar alignment when mode is 'sidebar' */
  sidebarPosition?: "left" | "right";
}

export const PickerContent: React.FC<PickerContentProps> = ({
  style,
  children,
  sidebarWidth,
  sidebarPosition = "right",
}) => {
  const { mode, isOpen, setIsOpen } = usePickerContext();

  if (mode === "dialog") {
    return (
      <Dialog open={isOpen} onValueChange={setIsOpen}>
        <Dialog.Content style={style}>{children}</Dialog.Content>
      </Dialog>
    );
  } else if (mode === "sidebar") {
    return (
      <Sidebar
        open={isOpen}
        width={sidebarWidth}
        onOpenChange={setIsOpen}
        position={sidebarPosition}
        style={[style, { maxHeight: "100%", height: "100%" }]}
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
