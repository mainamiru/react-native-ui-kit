import { DocsViewer } from "@/components";
import { ActivityIndicator } from "@mainamiru/react-native-ui-kit";
import React from "react";
import { View } from "react-native";

const ActivityIndicatorDocsScreen = () => (
  <DocsViewer
    title="ActivityIndicator"
    description="A lightweight, customizable loading indicator for React Native. It animates 12 bars in a circular pattern with a smooth fade effect."
    usage="Use ActivityIndicator to communicate loading or processing states. Customize the size and color to match your brand guidelines."
    exampleCode={`import React from "react";
import { View } from "react-native";
import { ActivityIndicator } from "@mainamiru/react-native-ui-kit";

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", gap: 24 }}>
      <ActivityIndicator />
      <ActivityIndicator size={60} color="#ff5722" />
      <ActivityIndicator color="darkblue" indicator="ios" />
    </View>
  );
}`}
    props={{
      size: {
        type: "number",
        required: false,
        default: "40",
        description:
          "Sets the overall width and height of the spinner, affecting bar length and spacing.",
      },
      color: {
        type: "string",
        required: false,
        default: "#007bff",
        description:
          "Defines the color of the spinner bars. Accepts any valid React Native color string.",
      },
      indicator: {
        type: "'default' | 'ios'",
        required: false,
        default: "default",
        description:
          "Defines the type of the spinner. Accepts 'default' or 'ios'.",
      },
    }}
  >
    <View style={{ gap: 24, alignItems: "center", paddingVertical: 24 }}>
      <ActivityIndicator />
      <ActivityIndicator size={60} color="#ff5722" />
      <ActivityIndicator color="darkblue" indicator="ios" />
    </View>
  </DocsViewer>
);

export default ActivityIndicatorDocsScreen;
