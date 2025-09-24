import { DocsViewer } from "@/components";
import { Button, Container, Text } from "@mainamiru/react-native-ui-kit";
import React from "react";
import { View } from "react-native";

const ContainerDocsScreen = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [isProcessing, setIsProcessing] = React.useState(false);

  React.useEffect(() => {
    if (!isLoading) return;
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, [isLoading]);

  React.useEffect(() => {
    if (!isProcessing) return;
    setTimeout(() => {
      setIsProcessing(false);
    }, 2000);
  }, [isProcessing]);

  return (
    <DocsViewer
      title="Container"
      description="A flexible layout wrapper that manages default, loading, and processing states for consistent UX patterns."
      usage="Wrap screens or sections in Container to provide consistent padding and built-in handling for loading or processing flows."
      exampleCode={`import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import { Container } from "@mainamiru/react-native-ui-kit";

export default function App() {
  const [loading, setLoading] = useState(false);
  const [processing, setProcessing] = useState(false);

  return (
    <Container
      isLoading={loading}
      isProcessing={processing}
      indicatorColor="#007AFF"
      indicatorSize={40}
      onRequestClose={() => setProcessing(false)}
    >
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center", gap: 16 }}>
        <Text>Hello World</Text>
        <Button title="Toggle Loading" onPress={() => setLoading(!loading)} />
        <Button title="Toggle Processing" onPress={() => setProcessing(!processing)} />
      </View>
    </Container>
  );
}`}
      props={{
        children: {
          type: "React.ReactNode",
          required: false,
          description:
            "Elements rendered inside the container when not loading.",
        },
        isLoading: {
          type: "boolean",
          required: false,
          default: "false",
          description: "If true, hides children and shows a loading indicator.",
        },
        isProcessing: {
          type: "boolean",
          required: false,
          default: "false",
          description:
            "If true, overlays a modal spinner while keeping children visible.",
        },
        indicatorColor: {
          type: "string",
          required: false,
          description: "Color for the loading or processing spinner.",
        },
        indicatorSize: {
          type: "number",
          required: false,
          description: "Size for the loading or processing spinner.",
        },
        style: {
          type: "StyleProp<ViewStyle>",
          required: false,
          description: "Custom styles for the container wrapper.",
        },
        onRequestClose: {
          type: "() => void",
          required: false,
          description:
            "Callback fired when the processing modal should close (Android back button).",
        },
      }}
    >
      <Container
        indicatorSize={36}
        isLoading={isLoading}
        indicatorColor="#007AFF"
        isProcessing={isProcessing}
        style={{ gap: 16, borderRadius: 16 }}
        onRequestClose={() => setIsProcessing(false)}
      >
        <View style={{ gap: 12 }}>
          <Text variant="titleMedium">Container States</Text>
          <Text variant="bodyMedium">
            Toggle the controls below to see loading and processing states in
            action.
          </Text>
        </View>
        <View style={{ flexDirection: "row", gap: 12 }}>
          <Button
            mode="contained"
            onPress={() => setIsLoading((prev) => !prev)}
          >
            {isLoading ? "Stop Loading" : "Start Loading"}
          </Button>
          <Button
            mode="outlined"
            onPress={() => setIsProcessing((prev) => !prev)}
          >
            {isProcessing ? "Stop Processing" : "Start Processing"}
          </Button>
        </View>
      </Container>
    </DocsViewer>
  );
};

export default ContainerDocsScreen;
