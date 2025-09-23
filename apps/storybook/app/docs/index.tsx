import { Code, Container, Text } from "@mainamiru/react-native-ui-kit";
import React from "react";
import { ScrollView, View } from "react-native";

const Index = () => {
  return (
    <Container style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView contentContainerStyle={{ padding: 20, gap: 20 }}>
        <Text variant="titleLarge" style={{ fontSize: 40 }}>
          Get Started
        </Text>
        <Text variant="titleLarge" style={{ fontSize: 30 }}>
          Installation
        </Text>
        <Text variant="bodyLarge">
          ● Open a Terminal in your project&apos;s folder and run:
        </Text>
        <Code
          textColor="#000"
          backgroundColor="#f5f5f5"
          code="bun install @mainamiru/react-native-ui-kit @react-native-vector-icons"
        />
        <View style={{ gap: 20 }}>
          <Text variant="titleLarge" style={{ fontSize: 30 }}>
            Usage
          </Text>
          <Text variant="bodyLarge">
            Wrap your root component in ReactNativeUIKitProvider from
            @mainamiru/react-native-ui-kit(if you are using toaster). If you
            have a vanilla React Native project, it's a good idea to add it in
            the component which is passed to AppRegistry.registerComponent. This
            will usually be in the index.js file. If you have an Expo project,
            you can do this inside the exported component in the App.js file.
          </Text>
          <Code
            textColor="#000"
            backgroundColor="#f5f5f5"
            code={`import * as React from 'react';
import { AppRegistry } from 'react-native';
import { DefaultTheme, ReactNativeUIKitProvider } from '@mainamiru/react-native-ui-kit';
import { name as appName } from './app.json';
import App from './src/App';

export default function Main() {
  return (
    <ReactNativeUIKitProvider theme={DefaultTheme}>
      <App />
    </ReactNativeUIKitProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);`}
          />
        </View>
      </ScrollView>
    </Container>
  );
};

export default Index;
