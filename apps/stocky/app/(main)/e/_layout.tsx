import { Tabs } from "expo-router";
import React from "react";

const EmployeeLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "Home" }} />
    </Tabs>
  );
};

export default EmployeeLayout;
