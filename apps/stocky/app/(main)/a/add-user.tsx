import {
  Button,
  Picker,
  Spacer,
  TextInput,
} from "@mainamiru/react-native-ui-kit";
import React from "react";
import { KeyboardAvoidingView, ScrollView } from "react-native";

const AddUserScreen = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [salary, setSalary] = React.useState("");
  const [salaryType, setSalaryType] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [role, setRole] = React.useState("");

  const handleSubmit = () => {
    console.log({
      name,
      email,
      phone,
      salary,
      salaryType,
      address,
      role,
    });
  };
  return (
    <KeyboardAvoidingView
      behavior="height"
      style={{ flex: 1 }}
      keyboardVerticalOffset={100}
    >
      <ScrollView
        contentContainerStyle={{
          gap: 10,
          padding: 10,
          paddingBottom: 20,
        }}
      >
        <TextInput
          value={name}
          label="Name"
          placeholder="Name"
          onChangeText={setName}
          autoCapitalize="words"
        />
        <TextInput
          label="Email"
          value={email}
          placeholder="Email"
          onChangeText={setEmail}
          autoCapitalize="none"
        />
        <TextInput
          value={phone}
          label="Phone"
          placeholder="Phone"
          autoComplete="off"
          keyboardType="number-pad"
          onChangeText={(value) => {
            const numericValue = value.replace(/[^0-9]/g, "");
            setPhone(numericValue);
          }}
        />
        <Picker.Select
          label="Salary Type"
          selectedValue={salaryType}
          onValueChange={setSalaryType}
          // containerStyle={{ height: "50%" }}
        >
          <Picker.Item label="Hourly" value="hourly" />
          <Picker.Item label="Daily" value="daily" />
          <Picker.Item label="Weekly" value="weekly" />
          <Picker.Item label="Monthly" value="monthly" />
          <Picker.Item label="Yearly" value="yearly" />
        </Picker.Select>
        <TextInput
          value={salary}
          label="Salary Amount"
          placeholder="Salary Amount"
          keyboardType="number-pad"
          helperText={`Enter salary amount in ${salaryType}`}
          onChangeText={(value) => {
            const numericValue = value.replace(/[^0-9]/g, "");
            setSalary(numericValue);
          }}
        />
        <TextInput
          value={address}
          label="Address"
          placeholder="Address"
          onChangeText={setAddress}
        />
        <Picker.Select
          label="Role"
          selectedValue={role}
          onValueChange={setRole}
        >
          <Picker.Item label="Admin" value="admin" />
          <Picker.Item label="Staff" value="staff" />
          <Picker.Item label="Employee" value="employee" />
        </Picker.Select>
        <Spacer size={10} />
        <Button onPress={handleSubmit}>Submit</Button>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AddUserScreen;
