import { useAuth } from "@/hooks";
import { Container } from "@mainamiru/react-native-ui-kit";
import { Redirect, router } from "expo-router";
import React from "react";

const AuthCheckScreen = () => {
  const { profile, isLoading } = useAuth();

  //check if profile exists
  React.useEffect(() => {
    if (isLoading || profile) return;
    router.replace("/create-profile");
  }, [isLoading, profile]);

  if (profile) return <Redirect href="/a" />;
  return <Container isLoading={true} />;
};

export default AuthCheckScreen;
