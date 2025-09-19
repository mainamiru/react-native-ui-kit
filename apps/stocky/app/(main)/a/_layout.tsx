import { Stack } from "expo-router";
import React from "react";

const AdminLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="add-user" options={{ title: "New User" }} />
    </Stack>
  );
};

export default AdminLayout;
