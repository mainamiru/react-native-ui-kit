import { AppThemeProvider } from "@/providers";
import { Slot } from "expo-router";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

const RootLayout = () => {
  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <AppThemeProvider>
        <Slot />
      </AppThemeProvider>
    </SafeAreaProvider>
  );
};

export default RootLayout;
