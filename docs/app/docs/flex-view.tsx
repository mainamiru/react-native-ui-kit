import { DocsViewer } from "@/components";
import { FlexView, Text } from "@mainamiru/react-native-ui-kit";
import React from "react";

const FlexViewDocsScreen = () => (
  <DocsViewer
    title="FlexView"
    description="A simple wrapper component that takes full available space (flex: 1) and accepts standard View props."
    usage="Use FlexView to create layouts that fill the screen or parent container. Add styles or other View props as needed."
    exampleCode={`import React from "react";
import { Text } from "react-native";
import { FlexView } from "@mainamiru/react-native-ui-kit";

export default function App() {
  return (
    <FlexView style={{ padding: 16, backgroundColor: "#f0f0f0" }}>
      <Text>Hello, this is inside a FlexView!</Text>
    </FlexView>
  );
}`}
    props={{
      FlexView: {
        type: "{ children?: React.ReactNode; style?: StyleProp<ViewStyle>; ...props: ViewProps }",
        required: true,
        description:
          "A wrapper that fills available space and accepts all standard View props.",
      },
    }}
  >
    <FlexView style={{ padding: 16, backgroundColor: "#f0f0f0" }}>
      <Text>Hello, this is inside a FlexView!</Text>
    </FlexView>
  </DocsViewer>
);

export default FlexViewDocsScreen;
