import { createProfile } from "@/actions";
import { auth } from "@/firebase";
import MaterialIcons from "@expo/vector-icons/MaterialCommunityIcons";
import {
  Avatar,
  Button,
  Center,
  Checkbox,
  Container,
  FlexView,
  Row,
  Text,
  TextInput,
  TextInputRef,
  useToaster,
} from "@mainamiru/react-native-ui-kit";
import {
  createUserWithEmailAndPassword,
  updateProfile,
} from "@react-native-firebase/auth";
import { useMutation } from "@tanstack/react-query";
import { Link, router } from "expo-router";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
const emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const nameRef = React.createRef<TextInputRef>();
const phoneRef = React.createRef<TextInputRef>();
const emailRef = React.createRef<TextInputRef>();
const passwordRef = React.createRef<TextInputRef>();

const RegisterScreen = () => {
  const toast = useToaster();
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [password, setPassword] = React.useState("");

  // handle sign in
  const { mutateAsync: handleSignUp, isPending } = useMutation({
    onSuccess: () => {
      router.replace("/(main)/a/(tabs)");
      toast.success("User created successfully");
    },
    mutationFn: async () => {
      if (emailRegex.test(email) && password.length >= 6 && name.trim()) {
        const { user } = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        await updateProfile(user, { displayName: name });
        return await createProfile({
          name,
          email,
          active: true,
          address: null,
          phone: phone,
          userId: user.uid,
          role: "admin",
          avatar: null,
          managerId: null,
        });
      } else {
        throw new Error("Please fill all details to continue");
      }
    },
  });

  return (
    <Container isProcessing={isPending}>
      <SafeAreaView style={{ flex: 1 }}>
        <Center gap={5} height={200}>
          <Avatar fallback="S" size={80} />
          <Text variant="titleLarge">Stocky</Text>
          <Text variant="bodyMedium">Create your account</Text>
        </Center>
        <FlexView style={{ gap: 10, padding: 10 }}>
          <TextInput
            ref={nameRef}
            label="Name"
            value={name}
            placeholder="Name"
            enterKeyHint="next"
            autoCapitalize="words"
            onChangeText={(text) => setName(text.trimStart())}
            onSubmitEditing={() => emailRef.current?.focus()}
          />
          <TextInput
            ref={emailRef}
            label="Email"
            value={email}
            placeholder="Email"
            enterKeyHint="next"
            autoComplete="email"
            autoCapitalize="none"
            onChangeText={(text) => setEmail(text.trim())}
            onSubmitEditing={() => phoneRef.current?.focus()}
            validate={(text) => {
              if (!emailRegex.test(text)) {
                return new Error("Email must be in the format name@domain.com");
              }
              return null;
            }}
          />
          <TextInput
            ref={phoneRef}
            label="Phone"
            value={phone}
            placeholder="Phone"
            enterKeyHint="next"
            autoComplete="tel"
            onChangeText={(text) => {
              const formattedPhone = text.replace(/[^0-9]/g, "");
              setPhone(formattedPhone);
            }}
            onSubmitEditing={() => passwordRef.current?.focus()}
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
          <Button
            style={{ marginTop: 10 }}
            onPress={() => {
              handleSignUp().catch((error) => {
                toast.error(error.message);
              });
            }}
          >
            Sign Up
          </Button>
          <Center paddingVertical={20}>
            <Text>
              I have already an account.{" "}
              <Link href="/login" style={{ color: "green" }}>
                Sign In
              </Link>
            </Text>
          </Center>
        </FlexView>
      </SafeAreaView>
    </Container>
  );
};

export default RegisterScreen;
