import { createContext, useContext } from "react";
export type Timeout = ReturnType<typeof setTimeout>;
export interface Toast {
  id: number;
  message: string;
  type: ToastType;
  duration: number;
  position: Position;
}

export interface ToasterOptions {
  position?: Position;
  duration?: number;
}

export type ToastType = "success" | "error" | "warn" | "info";
export type Position =
  | "top-left"
  | "top-center"
  | "top-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right";

export interface ToasterContextProps {
  show: (message: string, type?: ToastType, options?: ToasterOptions) => void;
  success: (message: string, options?: ToasterOptions) => void;
  error: (message: string, options?: ToasterOptions) => void;
  warn: (message: string, options?: ToasterOptions) => void;
  info: (message: string, options?: ToasterOptions) => void;
}

export const ToasterContext = createContext<ToasterContextProps | undefined>(
  undefined,
);

export const useToaster = (): ToasterContextProps => {
  const ctx = useContext(ToasterContext);
  if (!ctx) throw new Error("useToaster must be used inside <Toaster>");
  return ctx;
};
