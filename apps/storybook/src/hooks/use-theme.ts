import { DarkTheme, DefaultTheme, Theme } from "@react-navigation/native";
import { useColorScheme } from "./use-color-scheme";
import { useLocalStorage } from "./use-local-storage";

export function useTheme(): Theme {
  const colorScheme = useColorScheme();
  const { value } = useLocalStorage("theme", colorScheme);
  const isDark = value === "dark";
  return isDark ? DarkTheme : DefaultTheme;
}
