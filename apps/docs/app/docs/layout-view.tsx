import { DocsViewer } from "@/components";
import { LayoutView } from "@mainamiru/react-native-ui-kit";
import React from "react";
import { Text } from "react-native";

const LayoutDocsScreen = () => (
  <DocsViewer
    title="Layout"
    description="Responsive layout component with subcomponents for different screen sizes."
    usage="Use Layout and its subcomponents to render UI content only on specific screen sizes. Use `LayoutView.View` with `modes` prop to restrict visibility of a block."
    exampleCode={`import React from "react";
import { Text } from "react-native";
import { LayoutView } from "@mainamiru/react-native-ui-kit";

export default function App() {
  return (
    <LayoutView style={{ flex: 1 }}>
      <LayoutView.View>
        <Text>Always visible content</Text>
      </LayoutView.View>

      <LayoutView.Small>
        <Text>Small screen content inside restricted BaseView</Text>
      </LayoutView.Small>

      <LayoutView.Medium>
        <Text>Medium screen content inside restricted BaseView</Text>
      </LayoutView.Medium>

      <LayoutView.Large>
        <Text>Large screen content outside restricted BaseView</Text>
      </LayoutView.Large>

    </LayoutView>
  );
}`}
    props={{
      LayoutView: {
        type: "{ children: React.ReactNode; style?: StyleProp<ViewStyle>; modes?: LayoutMode[] }",
        required: true,
        description:
          "Base container that wraps subcomponents and provides layout context. Use `modes` to restrict rendering to specific screen sizes.",
      },
      "LayoutView.View": {
        type: "{ children: React.ReactNode; style?: StyleProp<ViewStyle>; modes?: LayoutMode[] }",
        required: false,
        description:
          "Always visible container or restrict visibility using `modes` prop.",
      },
      "LayoutView.Small": {
        type: "{ children: React.ReactNode; style?: StyleProp<ViewStyle> }",
        required: false,
        description: "Renders children only on small screens (`sm`).",
      },
      "LayoutView.Medium": {
        type: "{ children: React.ReactNode; style?: StyleProp<ViewStyle> }",
        required: false,
        description: "Renders children only on medium screens (`md`).",
      },
      "LayoutView.Large": {
        type: "{ children: React.ReactNode; style?: StyleProp<ViewStyle> }",
        required: false,
        description: "Renders children only on large screens (`lg`).",
      },
      "LayoutView.XLarge": {
        type: "{ children: React.ReactNode; style?: StyleProp<ViewStyle> }",
        required: false,
        description: "Renders children only on extra-large screens (`xlg`).",
      },
    }}
  >
    <LayoutView>
      <LayoutView.View>
        <Text>Always visible content</Text>
      </LayoutView.View>

      <LayoutView.View modes={["sm", "md"]} style={{ padding: 16 }}>
        <LayoutView.Small>
          <Text>Small screen content inside restricted BaseView</Text>
        </LayoutView.Small>
        <LayoutView.Medium>
          <Text>Medium screen content inside restricted BaseView</Text>
        </LayoutView.Medium>
      </LayoutView.View>
    </LayoutView>
  </DocsViewer>
);

export default LayoutDocsScreen;
