import { useTheme } from "@/hooks";
import {
  DarkTheme,
  DefaultTheme,
  ReactNativeUIKitProvider,
} from "@mainamiru/react-native-ui-kit";
import { ThemeProvider } from "@react-navigation/native";
import { Slot } from "expo-router";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

const RootLayout = () => {
  const theme = useTheme();
  const isDark = theme.dark;
  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <ThemeProvider value={theme}>
        <ReactNativeUIKitProvider
          theme={{
            isDark: isDark,
            colors: isDark ? DarkTheme.colors : DefaultTheme.colors,
          }}
        >
          <Slot />
        </ReactNativeUIKitProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default RootLayout;
