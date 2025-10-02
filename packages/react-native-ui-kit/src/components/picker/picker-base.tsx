import React from "react";
import { PickerContext } from "./utils";

export interface PickerBaseProps {
  open?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  children: React.ReactNode;
  mode?: "dialog" | "sidebar" | "bottom-sheet";
}

const PickerBase = ({
  onOpen,
  onClose,
  children,
  open = false,
  mode = "bottom-sheet",
}: PickerBaseProps) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(open);

  //handle open and close
  React.useEffect(() => {
    if (isOpen === open) return;
    if (isOpen && onOpen) {
      onOpen();
    } else if (!isOpen && onClose) {
      onClose();
    }
  }, [isOpen]);

  return (
    <PickerContext.Provider value={{ mode, isOpen, setIsOpen }}>
      {children}
    </PickerContext.Provider>
  );
};

export default PickerBase;
