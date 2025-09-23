import { DrawerContents } from "@/components";
import { Drawer } from "expo-router/drawer";
import React from "react";
import { useWindowDimensions } from "react-native";

const DocsLayout = () => {
  const { width } = useWindowDimensions();
  const isDesktop = width >= 768;
  return (
    <Drawer
      drawerContent={(props: any) => <DrawerContents {...props} />}
      screenOptions={{
        headerShown: !isDesktop,
        drawerType: isDesktop ? "permanent" : "front",
        drawerStyle: { width: 300 },
        drawerItemStyle: {
          padding: 0,
          borderRadius: 10,
          paddingVertical: 0,
          paddingHorizontal: 0,
        },
      }}
    >
      <Drawer.Screen name="index" options={{ title: "Get Started" }} />
      <Drawer.Screen name="button" options={{ title: "Button" }} />
    </Drawer>
  );
};

export default DocsLayout;
