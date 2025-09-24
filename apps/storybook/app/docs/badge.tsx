import { DocsViewer } from "@/components";
import { Badge } from "@mainamiru/react-native-ui-kit";
import React from "react";
import { View } from "react-native";

const BadgeDocsScreen = () => (
  <DocsViewer
    title="Badge"
    description="A simple badge component that displays text or custom children inside a pill-shaped container."
    usage="Use Badge to surface short statuses, counts, or tags alongside other UI elements."
    exampleCode={`import React from "react";
import { Badge } from "@mainamiru/react-native-ui-kit";

export default function App() {
  return (
    <>
      <Badge>New</Badge>
      <Badge backgroundColor="#34C759">Active</Badge>
      <Badge backgroundColor="#FF3B30" color="#fff">
        99+
      </Badge>
    </>
  );
}`}
    props={{
      children: {
        type: "React.ReactNode",
        required: true,
        description: "Content rendered inside the badge.",
      },
      color: {
        type: "string",
        required: false,
        default: "#fff",
        description: "Text color for the badge contents.",
      },
      backgroundColor: {
        type: "string",
        required: false,
        default: "#007AFF",
        description: "Background color of the badge pill.",
      },
      style: {
        type: "StyleProp<ViewStyle>",
        required: false,
        description: "Custom styles for the badge container.",
      },
    }}
  >
    <View style={{ gap: 12, flexDirection: "row" }}>
      <Badge>New</Badge>
      <Badge backgroundColor="#34C759">Active</Badge>
      <Badge backgroundColor="#FF3B30" color="#fff">
        99+
      </Badge>
    </View>
  </DocsViewer>
);

export default BadgeDocsScreen;
