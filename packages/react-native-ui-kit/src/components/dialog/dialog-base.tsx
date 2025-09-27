import * as React from "react";
import { DialogContext, DialogProps } from "./utils";

const DialogBase = ({ open, children, defaultValue = false }: DialogProps) => {
  const [isOpen, setIsOpen] = React.useState(defaultValue);

  // Handle open prop
  React.useEffect(() => {
    if (open === undefined) {
      setIsOpen(false);
    }
  }, [open]);

  return (
    <DialogContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </DialogContext.Provider>
  );
};

export default DialogBase;
