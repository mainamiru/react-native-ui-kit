import { Button } from "@mainamiru/react-native-ui-kit";
import { router } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const HomeScreen = () => {
  return (
    <View style={{ padding: 10 }}>
      <Text>Home Screen</Text>
      <Button onPress={() => router.push("/a/add-user")}>Add User</Button>
    </View>
  );
};

export default HomeScreen;
