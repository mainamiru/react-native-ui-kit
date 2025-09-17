import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Tabs } from "expo-router";
import React from "react";

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="home"
              size={size}
              color={color}
              style={{ marginBottom: -3 }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="products"
        options={{
          title: "Products",
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              size={size}
              color={color}
              name="dots-grid"
              style={{ marginBottom: -3 }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="attendance"
        options={{
          title: "Attendance",
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              size={size}
              color={color}
              name="calendar"
              style={{ marginBottom: -3 }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="stock-movement"
        options={{
          title: "Stock Movement",
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              size={size}
              color={color}
              name="chart-pie"
              style={{ marginBottom: -3 }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              size={size}
              color={color}
              name="account"
              style={{ marginBottom: -3 }}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
