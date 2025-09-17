import { useContext } from "react";
import { ReactNativeUIKitContext } from "../providers";
import { RNUIKitTheme, ThemeColor } from "../types";

export function useReactNativeUIKitTheme(): RNUIKitTheme {
  const context = useContext(ReactNativeUIKitContext);
  return context.theme;
}

export function useThemeColors(): ThemeColor {
  const theme = useReactNativeUIKitTheme();
  return theme.colors;
}
