import { ThemeScheme, useLocalTheme } from "@/hooks";
import {
  Container,
  DarkTheme,
  DefaultTheme as DefaultThemeUIKit,
  ReactNativeUIKitProvider,
} from "@mainamiru/react-native-ui-kit";
import { DefaultTheme, Theme, ThemeProvider } from "@react-navigation/native";
import React from "react";

export interface AppThemeProviderProps {
  children: React.ReactNode;
}

export interface AppThemeProviderState {
  theme: Theme;
  setTheme: (scheme: ThemeScheme) => void;
}

export const AppThemeProviderContext =
  React.createContext<AppThemeProviderState>({
    theme: DefaultTheme,
    setTheme: () => {},
  });

export const AppThemeProvider = ({ children }: AppThemeProviderProps) => {
  const { theme, isLoading, setTheme } = useLocalTheme();
  const isDark = theme.dark;
  const uiKitTheme = isDark ? DarkTheme : DefaultThemeUIKit;
  return (
    <AppThemeProviderContext.Provider value={{ theme, setTheme }}>
      <Container isLoading={isLoading}>
        <ThemeProvider value={theme}>
          <ReactNativeUIKitProvider
            theme={{
              isDark: theme.dark,
              colors: uiKitTheme.colors,
            }}
          >
            {children}
          </ReactNativeUIKitProvider>
        </ThemeProvider>
      </Container>
    </AppThemeProviderContext.Provider>
  );
};
