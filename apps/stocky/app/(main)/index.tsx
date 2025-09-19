import { Button, Center } from "@mainamiru/react-native-ui-kit";
import { router } from "expo-router";
import React from "react";

const AuthCheckScreen = () => {
  return (
    <Center flex={1} gap={10}>
      <Button buttonStyle={{ width: 150 }} onPress={() => router.push("/a")}>
        Go to Admin
      </Button>
      <Button buttonStyle={{ width: 150 }} onPress={() => router.push("/s")}>
        Go to Staff
      </Button>
      <Button buttonStyle={{ width: 150 }} onPress={() => router.push("/e")}>
        Go to Employee
      </Button>
    </Center>
  );
};

export default AuthCheckScreen;
