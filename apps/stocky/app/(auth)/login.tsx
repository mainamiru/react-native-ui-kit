import MaterialIcons from "@expo/vector-icons/MaterialCommunityIcons";
import {
  Avatar,
  Button,
  Center,
  Checkbox,
  FlexView,
  Row,
  Text,
  TextInput,
  TextInputRef,
  useToaster,
} from "@mainamiru/react-native-ui-kit";
import { Link, router } from "expo-router";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
const emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const emailRef = React.createRef<TextInputRef>();
const passwordRef = React.createRef<TextInputRef>();

const LoginScreen = () => {
  const toast = useToaster();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  // handle sign in
  const handleSignIn = async () => {
    try {
      if (emailRegex.test(email) && password.length >= 6) {
        toast.success("Login successful");
        router.push("/(main)");
      } else {
        toast.error("Invalid email or password");
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Center gap={5} height={250}>
        <Avatar fallback="S" size={80} />
        <Text variant="titleLarge">Stocky</Text>
        <Text variant="bodyMedium">Login to your account</Text>
      </Center>
      <FlexView style={{ gap: 15, padding: 10 }}>
        <TextInput
          ref={emailRef}
          label="Email"
          value={email}
          placeholder="Email"
          enterKeyHint="next"
          autoComplete="email"
          autoCapitalize="none"
          onChangeText={(text) => setEmail(text.trim())}
          onSubmitEditing={() => passwordRef.current?.focus()}
          validate={(text) => {
            if (!emailRegex.test(text)) {
              return new Error("Email must be in the format name@domain.com");
            }
            return null;
          }}
        />
        <TextInput
          ref={passwordRef}
          label="Password"
          value={password}
          enterKeyHint="done"
          placeholder="Password"
          autoComplete="password"
          onChangeText={(text) => setPassword(text.trim())}
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
        <Row gap={10} alignItems="center">
          <Checkbox status="checked" />
          <FlexView>
            <Text>
              By continuing, I agree that I have read and accept the Terms of
              Service and Privacy Policy.
            </Text>
          </FlexView>
        </Row>
        <Button style={{ marginTop: 10 }} onPress={handleSignIn}>
          Sign In
        </Button>
        <Center paddingVertical={20}>
          <Text>
            I don&apos;t have an account.{" "}
            <Link href="/register" style={{ color: "green" }}>
              Sign Up
            </Link>
          </Text>
        </Center>
      </FlexView>
    </SafeAreaView>
  );
};

export default LoginScreen;
