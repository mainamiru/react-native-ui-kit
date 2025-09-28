import { DocsViewer } from "@/components";
import { Tooltip } from "@mainamiru/react-native-ui-kit";
import React from "react";
import { Text, View } from "react-native";

const TooltipDocsScreen = () => (
  <DocsViewer
    title="Tooltip"
    description="A small popup with explanatory text that appears when pressing a target element."
    usage="Use Tooltip to provide contextual help or explanations without cluttering the interface."
    exampleCode={`import React from "react";
import { View, Text } from "react-native";
import { Tooltip } from "@mainamiru/react-native-ui-kit";

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Tooltip text="This is a helpful tooltip!" placement="bottom">
        <Text style={{ fontSize: 18, padding: 10 }}>Press me</Text>
      </Tooltip>
    </View>
  );
}`}
    props={{
      children: {
        type: "React.ReactNode",
        required: true,
        description: "The element that triggers the tooltip.",
      },
      text: {
        type: "string",
        required: true,
        description: "The text displayed inside the tooltip.",
      },
      textStyle: {
        type: "StyleProp<TextStyle>",
        required: false,
        description: "Custom styles for the tooltip text.",
      },
      tooltipStyle: {
        type: "StyleProp<ViewStyle>",
        required: false,
        description: "Custom styles for the tooltip container.",
      },
      placement: {
        type: `"top" | "bottom"`,
        required: false,
        description: "Position of the tooltip relative to the trigger element.",
      },
      visible: {
        type: "boolean",
        required: false,
        description: "Controls tooltip visibility (for controlled usage).",
      },
      onVisibleChange: {
        type: "(visible: boolean) => void",
        required: false,
        description: "Callback fired when tooltip visibility changes.",
      },
    }}
  >
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Tooltip text="This is a helpful tooltip!" placement="bottom">
        <Text style={{ fontSize: 18, padding: 10 }}>Hover me</Text>
      </Tooltip>
    </View>
  </DocsViewer>
);

export default TooltipDocsScreen;
