import { Stack } from "expo-router";
import React from "react";

export const unstable_settings = {
  anchor: "index",
};

const MainLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="a" options={{ headerShown: false }} />
      <Stack.Screen name="e" options={{ headerShown: false }} />
      <Stack.Screen name="s" options={{ headerShown: false }} />
    </Stack>
  );
};

export default MainLayout;
