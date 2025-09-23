import { Picker, TextInput } from "@mainamiru/react-native-ui-kit";
import React from "react";
import { View } from "react-native";

const PickerDocsScreen = () => {
  return (
    <View style={{ gap: 20, padding: 10, backgroundColor: "#fff" }}>
      <TextInput
        label="Name"
        mode="underline"
        placeholder="Name"
        style={{ marginBottom: 10 }}
        helperText="Enter your full name"
        validate={(value) => {
          const regex = /^[a-zA-Z ]+$/;
          if (!regex.test(value)) {
            return new Error("Please enter your valid name");
          }
          return null;
        }}
      />
      <Picker.Select position="right">
        <Picker.Item value="Hello" label="Hello" />
        <Picker.Item value="Hello" label="Hello" />
        <Picker.Item value="Hello" label="Hello" />
        <Picker.Item value="Hello" label="Hello" />
        <Picker.Item value="Hello" label="Hello" />
      </Picker.Select>
    </View>
  );
};

export default PickerDocsScreen;
