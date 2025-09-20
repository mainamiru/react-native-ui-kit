import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Link, Tabs } from "expo-router";
import React from "react";

const TabsLayout = () => {
  return (
    <Tabs initialRouteName="index">
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="attendance"
        options={{
          title: "Attendance",
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons size={size} color={color} name="calendar" />
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
            />
          ),
          headerRight: ({ tintColor }) => (
            <Link href="/a/add-product" style={{ marginRight: 15 }}>
              <MaterialCommunityIcons
                size={24}
                color={tintColor}
                name="plus-circle"
              />
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="employees"
        options={{
          title: "Employees",
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              size={size}
              color={color}
              name="account-tie"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons size={size} color={color} name="account" />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
