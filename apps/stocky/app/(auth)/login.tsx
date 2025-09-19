import MaterialIcons from "@expo/vector-icons/MaterialCommunityIcons";
import {
  Avatar,
  Button,
  Center,
  FlexView,
  Text,
  TextInput,
} from "@mainamiru/react-native-ui-kit";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const LoginScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Center gap={5} height={250}>
        <Avatar fallback="A" size={80} />
        <Text variant="titleLarge">Stocky</Text>
        <Text variant="bodyMedium">Login to your account</Text>
      </Center>
      <FlexView gap={10} padding={10}>
        <TextInput
          label="Email"
          placeholder="Email"
          helperText="Enter your email"
        />
        <TextInput
          label="Password"
          placeholder="Password"
          helperText="Enter your password"
          right={({ style, color }) => (
            <Center {...style} aspectRatio={1}>
              <MaterialIcons name="eye-off" size={20} color={color} />
            </Center>
          )}
          validate={(text) => {
            if (text.length < 6) {
              return new Error("Password must be at least 6 characters");
            }
            return null;
          }}
        />
        <Button buttonStyle={{ marginTop: 10 }}>Submit</Button>
      </FlexView>
    </SafeAreaView>
  );
};

export default LoginScreen;
