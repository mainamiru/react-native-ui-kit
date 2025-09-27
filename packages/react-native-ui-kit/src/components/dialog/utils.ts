import * as React from "react";

export interface DialogProps {
  title: string;
  open?: boolean;
  description?: string;
  defaultValue?: boolean;
  children?: React.ReactNode;
}

export interface DialogContextType {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export const DialogContext = React.createContext<DialogContextType>({
  isOpen: false,
  setIsOpen: () => {},
});
