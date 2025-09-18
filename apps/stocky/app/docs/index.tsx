import { ContextMenu, Text } from "@mainamiru/react-native-ui-kit";
import React from "react";
import { View } from "react-native";

const Installation = () => {
  return (
    <View>
      <Text variant="titleMedium">Installation</Text>
      <ContextMenu
        options={[
          { label: "Option 1", onPress: () => console.log("Option 1") },
          { label: "Option 2", onPress: () => console.log("Option 2") },
        ]}
      >
        <Text variant="titleMedium">Right click me</Text>
      </ContextMenu>
    </View>
  );
};

export default Installation;
