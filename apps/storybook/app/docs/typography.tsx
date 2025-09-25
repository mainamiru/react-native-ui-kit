import { DocsViewer } from "@/components";
import { Typography } from "@mainamiru/react-native-ui-kit";
import React from "react";
import { View } from "react-native";

const TypographyDocsScreen = () => (
  <DocsViewer
    title="Typography"
    description="A text component with multiple variants for headings, body, and captions."
    usage="Use Typography to display styled text consistently across your app."
    exampleCode={`import React from "react";
import { View } from "react-native";
import { Typography } from "@mainamiru/react-native-ui-kit";

export default function App() {
  return (
    <View style={{ padding: 20 }}>
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="body">Body text</Typography>
      <Typography variant="caption">Caption text</Typography>
    </View>
  );
}`}
    props={{
      variant: {
        type: `"h1" | "h2" | "h3" | "body" | "caption"`,
        required: false,
        description: "Specifies the text style variant.",
      },
      children: {
        type: "React.ReactNode",
        required: true,
        description: "The text content to display.",
      },
      style: {
        type: "StyleProp<TextStyle>",
        required: false,
        description: "Custom style for overriding default typography styles.",
      },
    }}
  >
    <View style={{ padding: 20 }}>
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="body">Body Text Example</Typography>
      <Typography variant="caption">Caption Example</Typography>
    </View>
  </DocsViewer>
);

export default TypographyDocsScreen;
