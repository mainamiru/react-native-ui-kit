import { DarkTheme, DefaultTheme, Theme } from "@react-navigation/native";
import { useLocalStorage } from "./use-local-storage";

export type ThemeScheme = "light" | "dark" | "system";

export function useLocalTheme() {
  const { value, isLoading, setValue } = useLocalStorage<ThemeScheme>(
    "theme",
    "system"
  );

  let theme: Theme = DefaultTheme;

  if (value === "light") {
    theme = DefaultTheme;
  } else if (value === "dark") {
    theme = DarkTheme;
  }

  return { theme, isLoading, setTheme: setValue } as const;
}
