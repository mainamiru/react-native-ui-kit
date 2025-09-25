import { DrawerContents } from "@/components";
import { useTheme } from "@/hooks";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { Row } from "@mainamiru/react-native-ui-kit";
import { Drawer } from "expo-router/drawer";
import React from "react";
import { useWindowDimensions } from "react-native";

const DocsLayout = () => {
  const { width } = useWindowDimensions();
  const isDesktop = width >= 1024;
  const { theme, toggleTheme } = useTheme();
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
            <MaterialIcons
              size={24}
              color={tintColor}
              name={theme.dark ? "light-mode" : "dark-mode"}
              onPress={() => toggleTheme()}
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
      <Drawer.Screen name="avatar/index" options={{ title: "Avatar" }} />
      <Drawer.Screen name="avatar/image" options={{ title: "Avatar.Image" }} />
      <Drawer.Screen name="avatar/text" options={{ title: "Avatar.Text" }} />
      <Drawer.Screen name="bottom-sheet" options={{ title: "Bottom Sheet" }} />
      <Drawer.Screen name="badge" options={{ title: "Badge" }} />
      <Drawer.Screen name="container" options={{ title: "Container" }} />
      <Drawer.Screen name="button" options={{ title: "Button" }} />
      <Drawer.Screen name="card" options={{ title: "Card" }} />
      <Drawer.Screen name="checkbox" options={{ title: "Checkbox" }} />
      <Drawer.Screen name="code" options={{ title: "Code" }} />
      <Drawer.Screen name="divider" options={{ title: "Divider" }} />
      <Drawer.Screen name="list" options={{ title: "List" }} />
      <Drawer.Screen name="picker" options={{ title: "Picker" }} />
      <Drawer.Screen name="radio" options={{ title: "Radio" }} />
      <Drawer.Screen name="switch" options={{ title: "Switch" }} />
      <Drawer.Screen name="layout" options={{ title: "Layout" }} />
      <Drawer.Screen name="toaster" options={{ title: "Toaster" }} />
      <Drawer.Screen name="spinner" options={{ title: "Spinner" }} />
      <Drawer.Screen name="table" options={{ title: "Table" }} />
      <Drawer.Screen name="tabs" options={{ title: "Tabs" }} />
      <Drawer.Screen name="text" options={{ title: "Text" }} />
      <Drawer.Screen name="text-input" options={{ title: "Text Input" }} />
      <Drawer.Screen name="typography" options={{ title: "Typography" }} />
      <Drawer.Screen name="touch-ripple" options={{ title: "Touch Ripple" }} />
      <Drawer.Screen name="smart-image" options={{ title: "Smart Image" }} />
    </Drawer>
  );
};

export default DocsLayout;
