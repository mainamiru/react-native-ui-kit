import React, { useCallback, useRef, useState } from "react";
import { Portal } from "../portal";
import ToastContainer from "./toast-container";
import {
  Position,
  Timeout,
  Toast,
  ToastType,
  ToasterContext,
  ToasterContextProps,
  ToasterOptions,
} from "./utils";
export * from "./utils";

export const Toaster: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const idRef = useRef<number>(1);
  const [toasts, setToasts] = useState<Toast[]>([]);
  const timers = useRef<Record<number, Timeout>>({});

  const defaultOptions: Required<ToasterOptions> = {
    position: "bottom-center",
    duration: 3000,
  };

  const removeToast = useCallback((id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
    if (timers.current[id]) {
      clearTimeout(timers.current[id]);
      delete timers.current[id];
    }
  }, []);

  const scheduleRemove = useCallback(
    (toast: Toast) => {
      timers.current[toast.id] = setTimeout(() => {
        removeToast(toast.id);
      }, toast.duration);
    },
    [removeToast],
  );

  const show = useCallback(
    (message: string, type: ToastType = "info", options?: ToasterOptions) => {
      const id = idRef.current++;
      const { duration, position } = { ...defaultOptions, ...options };
      const toast: Toast = { id, message, type, duration, position };
      setToasts((prev) => [...prev, toast]);
      scheduleRemove(toast);
    },
    [scheduleRemove],
  );

  const api: ToasterContextProps = {
    show,
    success: (msg, opt) => show(msg, "success", opt),
    error: (msg, opt) => show(msg, "error", opt),
    warn: (msg, opt) => show(msg, "warn", opt),
    info: (msg, opt) => show(msg, "info", opt),
  };

  return (
    <ToasterContext.Provider value={api}>
      {children}
      <Portal>
        {(
          [
            "top-left",
            "top-center",
            "top-right",
            "bottom-left",
            "bottom-center",
            "bottom-right",
          ] as Position[]
        ).map((pos) => {
          const filtered = toasts.filter((t) => t.position === pos);
          if (filtered.length === 0) return null;
          return (
            <ToastContainer
              key={pos}
              position={pos}
              toasts={filtered}
              onRemove={removeToast}
              onPause={(id) => {
                if (timers.current[id]) {
                  clearTimeout(timers.current[id]);
                  delete timers.current[id];
                }
              }}
              onResume={(toast) => scheduleRemove(toast)}
            />
          );
        })}
      </Portal>
    </ToasterContext.Provider>
  );
};

export default Toaster;
