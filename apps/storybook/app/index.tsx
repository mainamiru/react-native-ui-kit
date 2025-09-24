import { MobileView } from "@/mobile";
import { Button, FlexView } from "@mainamiru/react-native-ui-kit";
import { router } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const HomeScreen = () => {
  return (
    <View
      style={{
        gap: 20,
        flexWrap: "wrap",
        flexDirection: "row",
      }}
    >
      <FlexView padding={10} minWidth={250}>
        <Text>Home Screen</Text>
        <Button onPress={() => router.push("/docs")}>Get Started</Button>
      </FlexView>
      <FlexView alignItems="center" minWidth={280}>
        <MobileView>
          <View>
            <Button onPress={() => router.push("/docs")}>Get Started</Button>
          </View>
        </MobileView>
      </FlexView>
    </View>
  );
};

export default HomeScreen;
