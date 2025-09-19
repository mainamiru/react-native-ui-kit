import { Stack } from "expo-router";
import React from "react";

const MainLayout = () => {
  return (
    <Stack initialRouteName="index">
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="a" options={{ headerShown: false }} />
      <Stack.Screen name="e" options={{ headerShown: false }} />
      <Stack.Screen name="s" options={{ headerShown: false }} />
    </Stack>
  );
};

export default MainLayout;
