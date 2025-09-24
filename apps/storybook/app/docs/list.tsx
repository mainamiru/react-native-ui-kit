import { DocsViewer } from "@/components";
import { List, Text } from "@mainamiru/react-native-ui-kit";
import React from "react";
import { View } from "react-native";

const ListDocsScreen = () => (
  <DocsViewer
    title="List.Accordion"
    description="A dynamic accordion that measures content height for smooth expand and collapse animations."
    usage="Use List.Accordion to reveal additional information without navigating away or cluttering the screen. Great for FAQs, settings, and grouped content."
    exampleCode={`import React from "react";
import { List } from "@mainamiru/react-native-ui-kit";

export default function App() {
  return (
    <List.Accordion title="Click to Expand">
      <Text>This is the dynamic content of the accordion.</Text>
      <Text>Children height is measured automatically.</Text>
    </List.Accordion>
  );
}`}
    props={{
      title: {
        type: "string",
        required: true,
        description: "Title text displayed in the accordion header.",
      },
      children: {
        type: "React.ReactNode",
        required: true,
        description: "Content rendered inside the accordion when expanded.",
      },
      style: {
        type: "StyleProp<ViewStyle>",
        required: false,
        description: "Styles applied to the accordion container.",
      },
      titleStyle: {
        type: "StyleProp<ViewStyle>",
        required: false,
        description: "Custom styles for the title row.",
      },
      contentStyle: {
        type: "StyleProp<ViewStyle>",
        required: false,
        description: "Styles applied to the expanded content container.",
      },
    }}
  >
    <List.Accordion title="Click to Expand" style={{ width: "100%" }}>
      <View style={{ gap: 8 }}>
        <Text variant="bodyMedium">
          This accordion animates to match the height of its children.
        </Text>
        <View
          style={{ backgroundColor: "#eef2ff", padding: 12, borderRadius: 8 }}
        >
          <Text variant="bodySmall">Additional nested content</Text>
        </View>
      </View>
    </List.Accordion>
  </DocsViewer>
);

export default ListDocsScreen;
