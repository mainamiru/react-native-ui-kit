import { useContext } from "react";
import { StyleSheet, View } from "react-native";
import ToastItem from "./toast-item";
import {
  Position,
  Toast,
  ToastType,
  ToasterContext,
  ToasterContextProps,
} from "./utils";

interface ToastContainerProps {
  toasts: Toast[];
  position: Position;
  onRemove: (id: number) => void;
  onPause: (id: number) => void;
  onResume: (toast: Toast) => void;
}

const ToastContainer: React.FC<ToastContainerProps> = ({
  toasts,
  position,
  onRemove,
  onPause,
  onResume,
}) => {
  const align = position.includes("left")
    ? "flex-start"
    : position.includes("right")
      ? "flex-end"
      : "center";
  const verticalStyle = position.includes("top") ? { top: 40 } : { bottom: 40 };

  return (
    <View style={[styles.container, verticalStyle, { alignItems: align }]}>
      {toasts.map((toast, index) => (
        <ToastItem
          toast={toast}
          index={index}
          key={toast.id}
          position={position}
          onResume={() => onResume(toast)}
          onPause={() => onPause(toast.id)}
          onRemove={() => onRemove(toast.id)}
          backgroundColor={COLORS[toast.type]}
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

export const useToaster = (): ToasterContextProps => {
  const ctx = useContext(ToasterContext);
  if (!ctx) throw new Error("useToaster must be used inside <Toaster>");
  return ctx;
};

const styles = StyleSheet.create({
  container: {
    left: 0,
    padding: 15,
    position: "absolute",
    right: 0,
  },
  text: {
    color: "#fff",
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

export default ToastContainer;
