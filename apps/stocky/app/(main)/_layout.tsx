import { useAuth } from "@/hooks";
import { Container } from "@mainamiru/react-native-ui-kit";
import { Stack, router } from "expo-router";
import * as React from "react";

export const unstable_settings = {
  anchor: "index",
};

const MainLayout = () => {
  const { user, isLoading } = useAuth();

  React.useEffect(() => {
    if (isLoading) return;
    if (!user) {
      router.replace("/(auth)/login");
    }
  }, [user, isLoading]);

  return (
    <Container isLoading={isLoading}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="a" options={{ headerShown: false }} />
        <Stack.Screen name="e" options={{ headerShown: false }} />
        <Stack.Screen name="s" options={{ headerShown: false }} />
        <Stack.Screen
          name="create-profile"
          options={{ title: "Create Profile" }}
        />
      </Stack>
    </Container>
  );
};

export default MainLayout;
