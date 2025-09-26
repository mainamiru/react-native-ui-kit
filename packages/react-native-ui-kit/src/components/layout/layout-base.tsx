import React from "react";
import { LayoutChangeEvent, StyleProp, View, ViewStyle } from "react-native";

export type LayoutMode = "sm" | "md" | "lg" | "xlg";

export interface LayoutContextType {
  mode?: LayoutMode;
}

export const LayoutContext = React.createContext<LayoutContextType>({
  mode: undefined,
});

export interface LayoutBaseProps {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

/**
 * LayoutBase - Provides responsive context (sm, md, lg, xlg)
 * based on container width.
 */
const LayoutBase: React.FC<LayoutBaseProps> = ({ children, style }) => {
  const [mode, setMode] = React.useState<LayoutMode>();

  const getMode = React.useCallback((width: number): LayoutMode => {
    if (width <= 540) return "sm";
    if (width <= 720) return "md";
    if (width <= 1080) return "lg";
    return "xlg";
  }, []);

  const handleLayout = React.useCallback(
    (e: LayoutChangeEvent) => {
      const { width } = e.nativeEvent.layout;
      const newMode = getMode(width);
      if (newMode !== mode) {
        setMode(newMode);
      }
    },
    [mode, getMode],
  );

  return (
    <LayoutContext.Provider value={{ mode }}>
      <View onLayout={handleLayout} style={style}>
        {children}
      </View>
    </LayoutContext.Provider>
  );
};

export default LayoutBase;
