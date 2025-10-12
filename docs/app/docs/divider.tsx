import { DocsViewer } from "@/components";
import { Divider, Text } from "@mainamiru/react-native-ui-kit";
import React from "react";
import { View } from "react-native";

const DividerDocsScreen = () => (
  <DocsViewer
    title="Divider"
    description="A simple horizontal rule for separating content sections in your layouts."
    usage="Use Divider to create visual separation between related pieces of content or list items. Customize thickness, color, and margin to match your design system."
    exampleCode={`import { Divider } from "@mainamiru/react-native-ui-kit";

export default function App() {
  return (
    <>
      <Text>Section 1</Text>
      <Divider />
      <Text>Section 2</Text>
      <Divider thickness={2} color="#000" margin={16} />
      <Text>Section 3</Text>
    </>
  );
}`}
    props={{
      thickness: {
        type: "number",
        required: false,
        default: "1",
        description: "Height of the divider line in pixels.",
      },
      color: {
        type: "string",
        required: false,
        default: '"#e0e0e0"',
        description: "Color applied to the divider line.",
      },
      margin: {
        type: "number",
        required: false,
        default: "8",
        description: "Vertical margin applied above and below the divider.",
      },
      style: {
        type: "StyleProp<ViewStyle>",
        required: false,
        description: "Additional custom styles for the divider container.",
      },
    }}
  >
    <View style={{ gap: 12, padding: 10 }}>
      <Text variant="titleMedium">Profile</Text>
      <Text variant="bodyMedium">Account Details</Text>
      <Divider />
      <Text variant="bodyMedium">Notifications</Text>
      <Divider thickness={2} color="#4f46e5" margin={16} />
      <Text variant="bodyMedium">Privacy</Text>
    </View>
  </DocsViewer>
);

export default DividerDocsScreen;
