import { DocsViewer } from "@/components";
import { Layout } from "@mainamiru/react-native-ui-kit";
import React from "react";
import { Text } from "react-native";

const LayoutDocsScreen = () => (
  <DocsViewer
    title="Layout"
    description="Responsive layout component with subcomponents for different screen sizes."
    usage="Use Layout and its subcomponents to render UI content only on specific screen sizes. Use `Layout.View` with `modes` prop to restrict visibility of a block."
    exampleCode={`import React from "react";
import { Text } from "react-native";
import { Layout } from "@mainamiru/react-native-ui-kit";

export default function App() {
  return (
    <Layout style={{ flex: 1 }}>
      
      <Layout.View>
        <Text>Always visible content</Text>
      </Layout.View>

      <Layout.View modes={["sm", "md"]} style={{ padding: 16 }}>
        <Layout.SmallView>
          <Text>Small screen content inside restricted BaseView</Text>
        </Layout.SmallView>
        <Layout.MediumView>
          <Text>Medium screen content inside restricted BaseView</Text>
        </Layout.MediumView>
      </Layout.View>

      <Layout.LargeView>
        <Text>Large screen content outside restricted BaseView</Text>
      </Layout.LargeView>

    </Layout>
  );
}`}
    props={{
      Layout: {
        type: "{ children: React.ReactNode; style?: StyleProp<ViewStyle>; modes?: LayoutMode[] }",
        required: true,
        description:
          "Base container that wraps subcomponents and provides layout context. Use `modes` to restrict rendering to specific screen sizes.",
      },
      "Layout.View": {
        type: "{ children: React.ReactNode; style?: StyleProp<ViewStyle>; modes?: LayoutMode[] }",
        required: false,
        description:
          "Always visible container or restrict visibility using `modes` prop.",
      },
      "Layout.SmallView": {
        type: "{ children: React.ReactNode; style?: StyleProp<ViewStyle> }",
        required: false,
        description: "Renders children only on small screens (`sm`).",
      },
      "Layout.MediumView": {
        type: "{ children: React.ReactNode; style?: StyleProp<ViewStyle> }",
        required: false,
        description: "Renders children only on medium screens (`md`).",
      },
      "Layout.LargeView": {
        type: "{ children: React.ReactNode; style?: StyleProp<ViewStyle> }",
        required: false,
        description: "Renders children only on large screens (`lg`).",
      },
      "Layout.XLargeView": {
        type: "{ children: React.ReactNode; style?: StyleProp<ViewStyle> }",
        required: false,
        description: "Renders children only on extra-large screens (`xlg`).",
      },
    }}
  >
    <Layout>
      <Layout.View>
        <Text>Always visible content</Text>
      </Layout.View>

      <Layout.View modes={["sm", "md"]} style={{ padding: 16 }}>
        <Layout.SmallView>
          <Text>Small screen content inside restricted BaseView</Text>
        </Layout.SmallView>
        <Layout.MediumView>
          <Text>Medium screen content inside restricted BaseView</Text>
        </Layout.MediumView>
      </Layout.View>
    </Layout>
  </DocsViewer>
);

export default LayoutDocsScreen;
