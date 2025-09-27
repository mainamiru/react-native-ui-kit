import * as React from "react";

interface AnchorProps {
  open: () => void;
  close: () => void;
}

export interface DialogProps {
  open?: boolean;
  defaultValue?: boolean;
  children?: React.ReactNode;
  onValueChange?: (status: boolean) => void;
  anchor?: (props: AnchorProps) => React.ReactNode;
}

export interface DialogContextType {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export const DialogContext = React.createContext<DialogContextType>({
  isOpen: false,
  setIsOpen: () => {},
});
