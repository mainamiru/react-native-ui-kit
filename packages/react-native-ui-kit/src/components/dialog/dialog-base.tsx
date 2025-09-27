import * as React from "react";
import { DialogContext, DialogProps } from "./utils";

const DialogBase = ({
  open,
  anchor,
  children,
  onValueChange,
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
      <DialogContext.Provider value={{ isOpen, setIsOpen }}>
        {children}
      </DialogContext.Provider>
    </>
  );
};

export default DialogBase;
