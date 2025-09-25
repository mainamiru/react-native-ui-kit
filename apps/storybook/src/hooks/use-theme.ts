import { Theme } from "@react-navigation/native";
import { useContext } from "react";
import { AppThemeProviderContext } from "../providers/app-theme-provider";

export function useTheme(): Theme {
  const context = useContext(AppThemeProviderContext);
  return context.theme;
}
