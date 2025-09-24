import { RNUIKitTheme } from "../types";

export const DefaultTheme: RNUIKitTheme = {
  isDark: false,
  colors: {
    card: "#dfe6e5",
    text: "#000000",
    border: "#c7bfbf",
    primary: "#6055b5",
    secondary: "#00FF00",
    background: "#f5f5f5",
    surface: "#f5f5f5",
    placeholder: "#6e7a7a",
  },
};

export const DarkTheme: RNUIKitTheme = {
  isDark: true,
  colors: {
    card: "#292424",
    text: "#FFFFFF",
    border: "#c7bfbf",
    primary: "#6055b5",
    secondary: "#00FF00",
    background: "#000000",
    surface: "#292424",
    placeholder: "#6e7a7a",
  },
};
