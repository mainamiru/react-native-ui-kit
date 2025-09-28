import { DocsViewer } from "@/components";
import { Spacer, Text } from "@mainamiru/react-native-ui-kit";
import React from "react";
import { View } from "react-native";

const SpacerDocsScreen = () => (
  <DocsViewer
    title="Spacer"
    description="A lightweight helper for adding consistent vertical or horizontal spacing between elements."
    usage="Use Spacer to compose layouts without hardcoding margin values on neighboring components. Combine vertical and horizontal spacers for granular control."
    exampleCode={`import React from "react";
import { Spacer } from "@mainamiru/react-native-ui-kit";

export default function App() {
  return (
    <>
      <Spacer size={16} />
      <Spacer size={12} horizontal />
    </>
  );
}`}
    props={{
      size: {
        type: "number",
        required: false,
        default: "8",
        description: "Spacing size in pixels applied along the chosen axis.",
      },
      horizontal: {
        type: "boolean",
        required: false,
        default: "false",
        description: "If true, applies spacing horizontally (width). Otherwise adds vertical height.",
      },
    }}
  >
    <View style={{ gap: 8 }}>
      <Text variant="titleMedium">Vertical spacing</Text>
      <Text>Item A</Text>
      <Spacer size={16} />
      <Text>Item B</Text>
      <Text variant="titleMedium">Horizontal spacing</Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text>A</Text>
        <Spacer size={24} horizontal />
        <Text>B</Text>
        <Spacer size={24} horizontal />
        <Text>C</Text>
      </View>
    </View>
  </DocsViewer>
);

export default SpacerDocsScreen;
