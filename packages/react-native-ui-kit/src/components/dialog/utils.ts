import * as React from "react";

export interface DialogContextType {
  isOpen: boolean;
  animation: "fade" | "none";
  setIsOpen: (open: boolean) => void;
}

export const DialogContext = React.createContext<DialogContextType>({
  isOpen: false,
  animation: "none",
  setIsOpen: () => {},
});
