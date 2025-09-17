import { RNUIKitTheme } from "../types";

export const DefaultTheme: RNUIKitTheme = {
  isDark: false,
  colors: {
    card: "#FFFFFF",
    text: "#000000",
    border: "#000000",
    primary: "#0000FF",
    secondary: "#00FF00",
    background: "#FFFFFF",
  },
};

export const DarkTheme: RNUIKitTheme = {
  isDark: true,
  colors: {
    card: "#000000",
    text: "#FFFFFF",
    border: "#FFFFFF",
    primary: "#0000FF",
    secondary: "#00FF00",
    background: "#000000",
  },
};
