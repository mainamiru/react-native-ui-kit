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

// export const unstable_settings = {
//   anchor: "(auth)",
// };

const RootLayout = () => {
  const theme = useTheme();
  const colors = theme.dark ? DarkTheme.colors : DefaultTheme.colors;
  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <ThemeProvider value={theme}>
        <ReactNativeUIKitProvider theme={{ colors, isDark: theme.dark }}>
          <Slot />
        </ReactNativeUIKitProvider>
      </ThemeProvider>
    </SafeAreaProvider>
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
