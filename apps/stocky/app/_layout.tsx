import { useTheme } from "@/hooks";
import {
  DarkTheme,
  DefaultTheme,
  ReactNativeUIKitProvider,
} from "@mainamiru/react-native-ui-kit";
import { ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import React from "react";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

export const unstable_settings = {
  anchor: "(tabs)",
  tabs: {
    anchor: "index",
  },
};

const RootLayout = () => {
  const theme = useTheme();
  const colors = theme.dark ? DarkTheme.colors : DefaultTheme.colors;
  return (
    <SafeAreaProvider>
      <ThemeProvider value={theme}>
        <ReactNativeUIKitProvider theme={{ colors, isDark: theme.dark }}>
          <RootStack />
        </ReactNativeUIKitProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

const RootStack = () => {
  const { bottom } = useSafeAreaInsets();
  return (
    <Stack screenOptions={{ contentStyle: { paddingBottom: bottom } }}>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
};

export default RootLayout;
