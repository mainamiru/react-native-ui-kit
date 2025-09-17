import { useTheme } from "@/hooks";
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
  return (
    <SafeAreaProvider>
      <ThemeProvider value={theme}>
        <RootStack />
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
