import { AppThemeProvider } from "@/providers";
import { Slot } from "expo-router";
import Head from "expo-router/head";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

const RootLayout = () => {
  return (
    <>
      <Head>
        <title>
          React Native UI Kit – Prebuilt Components for Seamless App Design
        </title>
        <meta
          name="description"
          content="Accelerate your mobile app development with a complete React Native UI Kit. Features ready-to-use components, TypeScript support, and modern designs for scalable apps."
        />
        <meta name="author" content="Maina Miru" />
        <meta
          name="keywords"
          content="React Native UI Kit, React Native components, mobile app UI, React Native design system, TypeScript React Native, customizable UI components, fast app development, React Native templates, mobile UI library"
        />
        <link rel="icon" href="/images/favicon.png" sizes="512x512" />
      </Head>
      <SafeAreaProvider style={{ flex: 1 }}>
        <AppThemeProvider>
          <Slot />
        </AppThemeProvider>
      </SafeAreaProvider>
    </>
  );
};

export default RootLayout;
