import { Drawer } from "expo-router/drawer";
import { useWindowDimensions } from "react-native";

export default function DocsLayout() {
  const { width } = useWindowDimensions();
  const isLandscape = width > 768;
  return (
    <Drawer
      defaultStatus="closed"
      screenOptions={{
        drawerStyle: { width: 300 },
        drawerType: isLandscape ? "permanent" : "front",
      }}
    >
      <Drawer.Screen name="index" options={{ title: "Installation" }} />
    </Drawer>
  );
}
