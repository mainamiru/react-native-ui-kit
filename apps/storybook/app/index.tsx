import { MobileView } from "@/mobile";
import { Button, FlexView } from "@mainamiru/react-native-ui-kit";
import { router } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const HomeScreen = () => {
  return (
    <View style={{ flexDirection: "row", padding: 20, gap: 20 }}>
      <FlexView>
        <Text>Home Screen</Text>
        <Button onPress={() => router.push("/docs")}>Get Started</Button>
      </FlexView>
      <MobileView>
        <Button onPress={() => router.push("/docs")}>Get Started</Button>
      </MobileView>
    </View>
  );
};

export default HomeScreen;
