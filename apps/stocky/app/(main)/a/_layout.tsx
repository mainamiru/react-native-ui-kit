import { Stack } from "expo-router";
import React from "react";

export const unstable_settings = {
  anchor: "(tabs)",
  initialRouteName: "(tabs)",
  tabs: {
    anchor: "index",
    initialRouteName: "index",
  },
};

const AdminLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="add-user" options={{ title: "Add User" }} />
      <Stack.Screen name="add-employee" options={{ title: "Add Employee" }} />
      <Stack.Screen name="add-product" options={{ title: "Add Product" }} />
    </Stack>
  );
};

export default AdminLayout;
