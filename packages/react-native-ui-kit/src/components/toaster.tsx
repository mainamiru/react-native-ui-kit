import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  Animated,
  Easing,
  PanResponder,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Portal } from "./portal";

type ToastType = "success" | "error" | "warn" | "info";
type Position =
  | "top-left"
  | "top-center"
  | "top-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right";

type Toast = {
  id: number;
  message: string;
  type: ToastType;
  duration: number;
  position: Position;
};

type ToasterOptions = {
  position?: Position;
  duration?: number;
};

type ToasterContextProps = {
  show: (message: string, type?: ToastType, options?: ToasterOptions) => void;
  success: (message: string, options?: ToasterOptions) => void;
  error: (message: string, options?: ToasterOptions) => void;
  warn: (message: string, options?: ToasterOptions) => void;
  info: (message: string, options?: ToasterOptions) => void;
};

const ToasterContext = createContext<ToasterContextProps | undefined>(
  undefined,
);

export const Toaster: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const idRef = useRef(1);
  const timers = useRef<Record<number, number>>({});

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
    [scheduleRemove, defaultOptions],
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
        {[
          "top-left",
          "top-center",
          "top-right",
          "bottom-left",
          "bottom-center",
          "bottom-right",
        ].map((pos) => {
          const filtered = toasts.filter((t) => t.position === pos);
          if (filtered.length === 0) return null;
          return (
            <ToastContainer
              key={pos}
              toasts={filtered}
              position={pos as Position}
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

const ToastContainer: React.FC<{
  toasts: Toast[];
  position: Position;
  onRemove: (id: number) => void;
  onPause: (id: number) => void;
  onResume: (toast: Toast) => void;
}> = ({ toasts, position, onRemove, onPause, onResume }) => {
  const align = position.includes("left")
    ? "flex-start"
    : position.includes("right")
      ? "flex-end"
      : "center";

  const verticalStyle = position.includes("top") ? { top: 40 } : { bottom: 40 };

  return (
    <View style={[styles.container, verticalStyle, { alignItems: align }]}>
      {toasts.map((toast) => (
        <ToastItem
          key={toast.id}
          toast={toast}
          onRemove={() => onRemove(toast.id)}
          onPause={() => onPause(toast.id)}
          onResume={() => onResume(toast)}
        />
      ))}
    </View>
  );
};

const COLORS: Record<ToastType, string> = {
  success: "#22c55e",
  error: "#ef4444",
  warn: "#f59e0b",
  info: "#3b82f6",
};

const ToastItem: React.FC<{
  toast: Toast;
  onRemove: () => void;
  onPause: () => void;
  onResume: () => void;
}> = ({ toast, onRemove, onPause, onResume }) => {
  const translateY = useRef(new Animated.Value(20)).current;
  const opacity = useRef(new Animated.Value(0)).current;
  const translateX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(translateY, {
        toValue: 0,
        duration: 200,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();
  }, [opacity, translateY]);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        // pause timer when touched
        onPause();
      },
      onPanResponderMove: (_, g) => {
        translateX.setValue(g.dx);
      },
      onPanResponderRelease: (_, g: any) => {
        if (Math.abs(g.dx) > 100) {
          Animated.timing(translateX, {
            toValue: g.dx > 0 ? 500 : -500,
            duration: 180,
            useNativeDriver: true,
          }).start(onRemove);
        } else {
          Animated.spring(translateX, {
            toValue: 0,
            useNativeDriver: true,
          }).start(() => {
            // resume timer if not swiped out
            onResume();
          });
        }
      },
    }),
  ).current;

  const handleTap = () => {
    // quick taps (no move) → dismiss
    onRemove();
  };

  return (
    <Animated.View
      {...panResponder.panHandlers}
      style={[
        styles.toast,
        {
          backgroundColor: COLORS[toast.type],
          opacity,
          transform: [{ translateY }, { translateX }],
        },
      ]}
      onTouchEnd={handleTap}
    >
      <Text style={styles.text}>{toast.message}</Text>
    </Animated.View>
  );
};

export const useToaster = () => {
  const ctx = useContext(ToasterContext);
  if (!ctx) throw new Error("useToaster must be used inside Toaster");
  return ctx;
};

const styles = StyleSheet.create({
  container: {
    left: 0,
    paddingHorizontal: 16,
    position: "absolute",
    right: 0,
  },
  text: {
    color: "white",
    flexShrink: 1,
    fontWeight: "500",
  },
  toast: {
    borderRadius: 8,
    elevation: 4,
    marginVertical: 6,
    minWidth: "60%",
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
});

export default Toaster;
