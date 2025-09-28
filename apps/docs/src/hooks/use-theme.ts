import { useContext } from "react";
import { AppThemeProviderContext } from "../providers/app-theme-provider";

export function useTheme() {
  return useContext(AppThemeProviderContext);
}
