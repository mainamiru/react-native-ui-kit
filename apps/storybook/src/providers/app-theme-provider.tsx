import { useLocalTheme } from "@/hooks";
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
  toggleTheme: () => void;
}

export const AppThemeProviderContext =
  React.createContext<AppThemeProviderState>({
    theme: DefaultTheme,
    toggleTheme: () => {},
  });

export const AppThemeProvider = ({ children }: AppThemeProviderProps) => {
  const { theme, isLoading, toggleTheme } = useLocalTheme();
  const uiKitTheme = theme.dark ? DarkTheme : DefaultThemeUIKit;
  return (
    <AppThemeProviderContext.Provider value={{ theme, toggleTheme }}>
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
