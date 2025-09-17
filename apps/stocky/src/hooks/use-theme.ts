import { DarkTheme, DefaultTheme, Theme } from "@react-navigation/native";
import { useColorScheme } from "./use-color-scheme";

export function useTheme(): Theme {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";
  return isDark ? DarkTheme : DefaultTheme;
}
