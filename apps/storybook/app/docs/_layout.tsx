import { Drawer } from "expo-router/drawer";
import React from "react";
import { useWindowDimensions } from "react-native";

const DocsLayout = () => {
  const { width } = useWindowDimensions();
  const isDesktop = width >= 768;
  return (
    <Drawer
      screenOptions={{
        drawerType: isDesktop ? "permanent" : "front",
      }}
    >
      <Drawer.Screen name="index" options={{ title: "Get Started" }} />
    </Drawer>
  );
};

export default DocsLayout;
