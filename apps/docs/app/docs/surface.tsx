import { DocsViewer } from "@/components";
import { Row, Surface } from "@mainamiru/react-native-ui-kit";
import React from "react";
import { Text } from "react-native";

const SurfaceDocsScreen = () => (
  <DocsViewer
    title="Surface"
    description="A versatile container that can appear flat or elevated, following Material Design principles."
    usage="Use Surface for wrapping content with subtle depth or visual distinction. Use `variant='elevated'` for raised cards and dialogs."
    exampleCode={`import React from "react";
import { Text } from "react-native";
import { Surface } from "@mainamiru/react-native-ui-kit";

export default function Example() {
  return (
    <>
      <Surface variant="flat">
        <Text>Flat Surface</Text>
      </Surface>

      <Surface variant="elevated" style={{ marginTop: 16 }}>
        <Text>Elevated Surface</Text>
      </Surface>
    </>
  );
}`}
    props={{
      mode: {
        type: '"flat" | "elevated"',
        required: false,
        default: '"flat"',
        description: "Determines whether the surface is flat or raised.",
      },
      backgroundColor: {
        type: "ColorValue",
        required: false,
        default: '"#fff"',
        description: "Background color of the surface.",
      },
      style: {
        type: "StyleProp<ViewStyle>",
        required: false,
        description: "Custom style overrides.",
      },
      children: {
        type: "React.ReactNode",
        required: false,
        description: "Elements to render inside the surface.",
      },
    }}
  >
    <Row style={{ padding: 10, gap: 10 }}>
      <Surface mode="flat" style={{ height: 100, aspectRatio: 1 }}>
        <Text>Flat Surface</Text>
      </Surface>

      <Surface
        mode="elevated"
        style={{
          height: 100,
          aspectRatio: 1,
        }}
      >
        <Text>Elevated Surface</Text>
      </Surface>
    </Row>
  </DocsViewer>
);

export default SurfaceDocsScreen;
