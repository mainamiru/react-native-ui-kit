import { Button, Picker, TextInput } from "@mainamiru/react-native-ui-kit";
import React from "react";
import { KeyboardAvoidingView, ScrollView } from "react-native";

const AddUserScreen = () => {
  return (
    <KeyboardAvoidingView
      behavior="height"
      style={{ flex: 1 }}
      keyboardVerticalOffset={100}
    >
      <ScrollView contentContainerStyle={{ padding: 10, gap: 10 }}>
        <TextInput label="Name" placeholder="Name" />
        <TextInput label="Email" placeholder="Email" />
        <TextInput label="Mobile" placeholder="Mobile" />
        <TextInput label="Salary" placeholder="Salary" />
        <TextInput label="Salary Type" placeholder="e.g. Monthly" />
        <TextInput label="Address" placeholder="Address" />
        <Picker.Select label="Role">
          <Picker.Item label="Admin" value="admin" />
          <Picker.Item label="Staff" value="staff" />
          <Picker.Item label="Employee" value="employee" />
        </Picker.Select>
        <Button>Submit</Button>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AddUserScreen;
