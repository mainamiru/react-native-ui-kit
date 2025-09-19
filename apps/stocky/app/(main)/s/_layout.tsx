import { Tabs } from "expo-router";
import React from "react";

const StaffLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "Home" }} />
    </Tabs>
  );
};

export default StaffLayout;
