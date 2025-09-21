import { useTheme } from "@/hooks";
import {
  DarkTheme,
  DefaultTheme,
  ReactNativeUIKitProvider,
} from "@mainamiru/react-native-ui-kit";
import { ThemeProvider } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Slot } from "expo-router";
import React from "react";
import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: true,
      refetchOnReconnect: true,
      refetchOnWindowFocus: true,
    },
  },
});

const RootLayout = () => {
  const theme = useTheme();
  const colors = theme.dark ? DarkTheme.colors : DefaultTheme.colors;
  return (
    <>
      <StatusBar
        translucent={true}
        barStyle={theme.dark ? "light-content" : "dark-content"}
      />
      <SafeAreaProvider style={{ flex: 1 }}>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider value={theme}>
            <ReactNativeUIKitProvider theme={{ colors, isDark: theme.dark }}>
              <Slot />
            </ReactNativeUIKitProvider>
          </ThemeProvider>
        </QueryClientProvider>
      </SafeAreaProvider>
    </>
  );
};

// const RootStack = () => {
//   const { bottom } = useSafeAreaInsets();
//   return (
//     <Stack
//       screenOptions={{
//         headerShown: false,
//         contentStyle: { paddingBottom: bottom },
//       }}
//     >
//       <Stack.Screen name="(auth)" options={{ headerShown: false }} />
//       <Stack.Screen name="(main)" options={{ headerShown: false }} />
//     </Stack>
//   );
// };

export default RootLayout;
