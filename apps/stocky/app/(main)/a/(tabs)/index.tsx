import { Button } from "@mainamiru/react-native-ui-kit";
import { router } from "expo-router";
import React from "react";
import { View } from "react-native";

const HomeScreen = () => {
  return (
    <View style={{ gap: 10, padding: 10 }}>
      <Button onPress={() => router.push("/a/add-user")}>Add User</Button>
      <Button onPress={() => router.push("/a/add-product")}>Add Product</Button>
    </View>
  );
};

export default HomeScreen;
