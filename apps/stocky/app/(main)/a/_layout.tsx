import { Stack } from "expo-router";
import React from "react";

const AdminLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="add-user" options={{ title: "New User" }} />
      <Stack.Screen name="add-product" options={{ title: "New Product" }} />
    </Stack>
  );
};

export default AdminLayout;
