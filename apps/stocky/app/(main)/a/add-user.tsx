import { createProfile } from "@/actions";
import { useAuth } from "@/hooks";
import { UserRole } from "@/schema";
import {
  Button,
  Container,
  Picker,
  Spacer,
  TextInput,
  useToaster,
} from "@mainamiru/react-native-ui-kit";
import { useMutation } from "@tanstack/react-query";
import { router } from "expo-router";
import React from "react";
import { KeyboardAvoidingView, ScrollView } from "react-native";

const AddUserScreen = () => {
  const toast = useToaster();
  const { user } = useAuth();
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [role, setRole] = React.useState<UserRole>("staff");

  const { mutateAsync: handleSubmit, isPending } = useMutation({
    mutationFn: async () => {
      return await createProfile({
        name,
        role,
        email,
        phone,
        address,
        avatar: null,
        active: true,
        userId: null,
        managerId: user?.uid || null,
      });
    },
    onSuccess: () => {
      router.back();
      toast.success("New user has been added successfully");
    },
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
            containerStyle={{ height: "50%" }}
          >
            <Picker.Item label="Admin" value="admin" />
            <Picker.Item label="Staff" value="staff" />
          </Picker.Select>
          <Spacer size={10} />
          <Button
            onPress={() => {
              handleSubmit().catch((error) => {
                toast.error(error.message);
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

export default AddUserScreen;
