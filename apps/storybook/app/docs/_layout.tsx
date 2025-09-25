import { DrawerContents } from "@/components";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Row } from "@mainamiru/react-native-ui-kit";
import { Drawer } from "expo-router/drawer";
import React from "react";
import { useWindowDimensions } from "react-native";

const DocsLayout = () => {
  const { width } = useWindowDimensions();
  const isDesktop = width >= 1024;
  return (
    <Drawer
      drawerContent={(props: any) => <DrawerContents {...props} />}
      screenOptions={{
        // headerShown: !isDesktop,
        drawerType: isDesktop ? "permanent" : "front",
        drawerStyle: { width: 300 },
        drawerItemStyle: {
          padding: 0,
          borderRadius: 10,
          paddingVertical: 0,
          paddingHorizontal: 0,
        },
        headerRight: ({ tintColor }) => (
          <Row gap={10} alignItems="center" marginRight={15}>
            <MaterialCommunityIcons
              size={24}
              color={tintColor}
              name="bell-outline"
            />
            <MaterialCommunityIcons
              size={24}
              color={tintColor}
              name="theme-light-dark"
            />
            <MaterialCommunityIcons name="github" size={24} color={tintColor} />
          </Row>
        ),
      }}
    >
      <Drawer.Screen name="index" options={{ title: "Get Started" }} />
      <Drawer.Screen
        name="activity-indicator"
        options={{ title: "Activity Indicator" }}
      />
      <Drawer.Screen name="bottom-sheet" options={{ title: "Bottom Sheet" }} />
      <Drawer.Screen name="badge" options={{ title: "Badge" }} />
      <Drawer.Screen name="button" options={{ title: "Button" }} />
      <Drawer.Screen name="card" options={{ title: "Card" }} />
      <Drawer.Screen name="checkbox" options={{ title: "Checkbox" }} />
      <Drawer.Screen name="picker" options={{ title: "Picker" }} />
      <Drawer.Screen name="radio" options={{ title: "Radio" }} />
      <Drawer.Screen name="switch" options={{ title: "Switch" }} />
      <Drawer.Screen name="tab-bar" options={{ title: "Tab Bar" }} />
      <Drawer.Screen name="toaster" options={{ title: "Toaster" }} />
    </Drawer>
  );
};

export default DocsLayout;
