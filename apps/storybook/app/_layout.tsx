import { Slot } from "expo-router";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const RootLayout = () => {
  return (
    <SafeAreaView style={{ flex: 1, position: "relative" }}>
      <Slot />
    </SafeAreaView>
  );
};

export default RootLayout;
