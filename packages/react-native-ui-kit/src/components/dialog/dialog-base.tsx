import * as React from "react";
import { DialogContext } from "./utils";
interface AnchorProps {
  open: () => void;
  close: () => void;
}

export interface DialogProps {
  open?: boolean;
  defaultValue?: boolean;
  animation?: "fade" | "none";
  children?: React.ReactNode;
  onValueChange?: (status: boolean) => void;
  anchor?: (props: AnchorProps) => React.ReactNode;
}

const DialogBase = ({
  open,
  anchor,
  children,
  onValueChange,
  animation = "none",
  defaultValue = false,
}: DialogProps) => {
  const [isOpen, setIsOpen] = React.useState(defaultValue);

  // Handle open prop
  React.useEffect(() => {
    if (open !== undefined) {
      setIsOpen(open);
    }
  }, [open]);

  //handle change
  React.useEffect(() => {
    if (onValueChange) {
      onValueChange(isOpen);
    }
  }, [isOpen, onValueChange]);

  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);

  return (
    <>
      {anchor && anchor({ open: openDialog, close: closeDialog })}
      <DialogContext.Provider value={{ isOpen, setIsOpen, animation }}>
        {children}
      </DialogContext.Provider>
    </>
  );
};

export default DialogBase;
