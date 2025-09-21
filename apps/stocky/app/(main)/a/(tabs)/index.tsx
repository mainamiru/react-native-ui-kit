import { Button, Checkbox, List, Text } from "@mainamiru/react-native-ui-kit";
import { router } from "expo-router";
import React from "react";
import { View } from "react-native";

const HomeScreen = () => {
  const [checked, setChecked] = React.useState(false);
  return (
    <View style={{ gap: 10, padding: 10 }}>
      <Checkbox
        label="Add User"
        status={checked ? "checked" : "unchecked"}
        onChange={(status) => setChecked(status === "checked")}
      />
      <Button onPress={() => router.push("/a/add-user")}>Add User</Button>
      <Button onPress={() => router.push("/a/add-product")}>Add Product</Button>
      <List.Accordion
        title="Super"
        description="The quick brown fox jumps over the lazy dog"
      >
        <Text>Hello World</Text>
        <Text>Hello World</Text>
        <Text>Hello World</Text>
        <Text>Hello World</Text>
        <Text>Hello World</Text>
        <Text>Hello World</Text>
        <Text>Hello World</Text>
        <Text>Hello World</Text>
        <Text>Hello World</Text>
        <Text>Hello World</Text>
        <Text>Hello World</Text>
        <Text>Hello World</Text>
        <Text>Hello World</Text>
        <Text>Hello World</Text>
        <Text>Hello World</Text>
        <Text>Hello World</Text>
        <Text>Hello World</Text>
        <Text>Hello World</Text>
        <Text>Hello World</Text>
        <Text>Hello World</Text>
        <Text>Hello World</Text>
        <Text>Hello World</Text>
        <Text>Hello World</Text>
        <Text>Hello World</Text>
      </List.Accordion>
    </View>
  );
};

export default HomeScreen;
