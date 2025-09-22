import { useTheme } from "@/hooks";
import { AuthProvider } from "@/providers";
import {
  DarkTheme,
  DefaultTheme,
  ReactNativeUIKitProvider,
} from "@mainamiru/react-native-ui-kit";
import { ThemeProvider } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import React from "react";
import { StatusBar } from "react-native";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

(globalThis as any).RNFB_SILENCE_MODULAR_DEPRECATION_WARNINGS = true;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnReconnect: true,
      refetchOnWindowFocus: true,
    },
  },
});

export const unstable_settings = {
  anchor: "(main)",
};

const RootLayout = () => {
  const theme = useTheme();
  const colors = theme.dark ? DarkTheme.colors : DefaultTheme.colors;
  return (
    <>
      <StatusBar
        translucent={true}
        barStyle={theme.dark ? "light-content" : "dark-content"}
      />
      <AuthProvider>
        <SafeAreaProvider style={{ flex: 1 }}>
          <QueryClientProvider client={queryClient}>
            <ThemeProvider value={theme}>
              <ReactNativeUIKitProvider theme={{ colors, isDark: theme.dark }}>
                <RootStack />
              </ReactNativeUIKitProvider>
            </ThemeProvider>
          </QueryClientProvider>
        </SafeAreaProvider>
      </AuthProvider>
    </>
  );
};

const RootStack = () => {
  const { bottom } = useSafeAreaInsets();
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { paddingBottom: bottom },
      }}
    >
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="(main)" options={{ headerShown: false }} />
    </Stack>
  );
};

export default RootLayout;
