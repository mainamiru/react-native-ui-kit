import { createEmployee } from "@/actions";
import { SalaryType } from "@/schema";
import {
  Button,
  Container,
  Picker,
  Spacer,
  TextInput,
  useToaster,
} from "@mainamiru/react-native-ui-kit";
import { useMutation } from "@tanstack/react-query";
import React from "react";
import { KeyboardAvoidingView, ScrollView } from "react-native";

const AddEmployeeScreen = () => {
  const toast = useToaster();
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [salary, setSalary] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [salaryType, setSalaryType] = React.useState<SalaryType>("daily");

  const { mutateAsync: handleSubmit, isPending } = useMutation({
    mutationFn: async () => {
      return await createEmployee({
        name,
        email,
        phone,
        address,
        salaryType,
        active: true,
        userId: null,
        managerId: null,
        role: "employee",
        salaryAmount: Number(salary),
      });
    },
    onError: () => toast.error("Failed to add employee"),
    onSuccess: () => toast.success("New employee has been added successfully"),
  });
  return (
    <Container isProcessing={isPending}>
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
          <Spacer size={10} />
          <Button
            onPress={() => {
              handleSubmit().catch((error) => {
                alert("Failed to add user");
              });
            }}
          >
            Submit
          </Button>
        </ScrollView>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default AddEmployeeScreen;
