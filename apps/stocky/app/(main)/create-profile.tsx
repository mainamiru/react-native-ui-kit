import { createProfile } from "@/actions";
import { useAuth } from "@/hooks/";
import {
  Avatar,
  Button,
  Center,
  Container,
  Spacer,
  Text,
  TextInput,
} from "@mainamiru/react-native-ui-kit";
import { useMutation } from "@tanstack/react-query";
import { Redirect } from "expo-router";
import React from "react";
import { KeyboardAvoidingView, ScrollView } from "react-native";

const CreateProfileScreen = () => {
  const { user, profile, isLoading, getProfile } = useAuth();
  const [email, setEmail] = React.useState(user?.email || "");
  const [name, setName] = React.useState(user?.displayName || "");
  const [phone, setPhone] = React.useState(user?.phoneNumber || "");

  const { mutateAsync, isPending } = useMutation({
    onSuccess: () => getProfile(),
    mutationFn: async () => {
      if (email && name && phone.length === 10 && user?.uid) {
        return await createProfile({
          email,
          name,
          phone,
          role: "admin",
          avatar: null,
          address: null,
          active: true,
          managerId: null,
          userId: user.uid,
        });
      } else {
        throw new Error("Please fill all the fields");
      }
    },
  });

  if (profile) return <Redirect href="/" />;
  return (
    <Container isLoading={isLoading} isProcessing={isPending}>
      <KeyboardAvoidingView style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ padding: 10, gap: 10 }}>
          <Center height={200} gap={10}>
            <Avatar fallback="S" size={80} />
            <Text variant="titleMedium">Create Profile</Text>
          </Center>

          <TextInput
            label="Name"
            value={name}
            placeholder="Name"
            autoCapitalize="words"
            onChangeText={(value) => {
              const formattedValue = value.trim();
              setName(formattedValue);
            }}
          />
          <TextInput
            label="Email"
            value={email}
            placeholder="Email"
            autoCapitalize="none"
            readOnly={!!user?.email}
            onChangeText={(value) => {
              const formattedValue = value.replace(/\s/g, "");
              setEmail(formattedValue);
            }}
          />
          <TextInput
            label="Phone"
            value={phone}
            placeholder="Phone"
            keyboardType="number-pad"
            readOnly={!!user?.phoneNumber}
            onChangeText={(value) => {
              const formattedValue = value.replace(/[^0-9]/g, "");
              setPhone(formattedValue);
            }}
          />
          <Spacer />
          <Button
            loading={isPending}
            onPress={() => {
              mutateAsync().catch((error) => {
                console.log("Error: ", error);
              });
            }}
          >
            Create Profile
          </Button>
        </ScrollView>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default CreateProfileScreen;
