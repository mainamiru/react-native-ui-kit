import { Button, KitIcon, Text } from "@mainamiru/react-native-ui-kit";
import { router } from "expo-router";
import React from "react";
import { View } from "react-native";

const HomeScreen = () => {
  return (
    <View style={{ gap: 10, padding: 10 }}>
      <View style={{ gap: 10 }}>
        <Text variant="titleMedium">Quick Access</Text>
        <Button onPress={() => router.push("/a/add-user")}>Add User</Button>
        <Button
          onPress={() => router.push("/a/add-employee")}
          icon={({ color }) => <KitIcon.Plus color={color} />}
        >
          Add Employee
        </Button>
        <Button onPress={() => router.push("/a/add-product")}>
          Add Product
        </Button>
      </View>
    </View>
  );
};

export default HomeScreen;
