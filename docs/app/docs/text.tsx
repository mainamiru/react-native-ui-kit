import { DocsViewer } from "@/components";
import { Text } from "@mainamiru/react-native-ui-kit";
import React from "react";

const TextDocsScreen = () => (
  <DocsViewer
    title="Text"
    description="A flexible Text component supporting multiple variants and theme-aware colors."
    usage="Use Text to render content with predefined typography styles (titles, body, captions) and apply theme-aware colors."
    exampleCode={`import React from "react";
import { View } from "react-native";
import { Text } from "@mainamiru/react-native-ui-kit";

export default function App() {
  return (
    <View style={{ padding: 16 }}>
      <Text variant="titleLarge">This is a Large Title</Text>
      <Text variant="bodyMedium">This is body text</Text>
      <Text variant="caption">This is a caption</Text>
    </View>
  );
}`}
    props={{
      variant: {
        type: "TextVariant",
        required: false,
        default: "text",
        description: "The text style variant to apply.",
      },
      style: {
        type: "TextStyle",
        required: false,
        description: "Custom style to override default styles.",
      },
      children: {
        type: "React.ReactNode",
        required: true,
        description: "The text content to display.",
      },
    }}
    style={{ padding: 10, gap: 10 }}
  >
    <Text variant="titleLarge">This is a Large Title</Text>
    <Text variant="bodyMedium">This is body text</Text>
    <Text variant="caption">This is a caption</Text>
  </DocsViewer>
);

export default TextDocsScreen;
