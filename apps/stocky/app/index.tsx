import { Button } from "@react-navigation/elements";
import { router } from "expo-router";
import React from "react";
import { View } from "react-native";

const Home = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button onPress={() => router.push("/docs")}>Get Started</Button>
    </View>
  );
};

export default Home;
