import { DocsViewer } from "@/components";
import { EvilIcons } from "@mainamiru/react-native-ui-kit";
import React from "react";

const EvilIconsDocsScreen = () => (
  <DocsViewer
    title="EvilIcons"
    description="A dynamic icon component that loads EvilIcons from supported icon libraries and falls back gracefully if unavailable."
    usage="Use EvilIcons to render vector icons that automatically adapt based on installed icon libraries."
    exampleCode={`import React from "react";
import { EvilIcons } from "@mainamiru/react-native-ui-kit";

export default function App() {
  return (
    <>
      <EvilIcons name="heart" size={48} color="red" />
      <EvilIcons name="user" size={32} color="#333" />
      <EvilIcons name="lock" size={28} color="purple" />
    </>
  );
}`}
    props={{
      name: {
        type: "ComponentProps<typeof import('@expo/vector-icons/EvilIcons').default>['name']",
        required: true,
        description: "Name of the icon from EvilIcons set.",
      },
      size: {
        type: "number",
        required: true,
        description: "The size of the icon in pixels.",
      },
      color: {
        type: "string",
        required: false,
        description: "The color of the icon.",
      },
      direction: {
        type: "'rtl' | 'ltr'",
        required: false,
        description:
          "Sets layout direction for right-to-left or left-to-right text environments.",
      },
      allowFontScaling: {
        type: "boolean",
        required: false,
        description: "Enables font scaling based on accessibility settings.",
      },
      style: {
        type: "StyleProp<TextStyle>",
        required: false,
        description: "Custom text style for the icon.",
      },
    }}
  >
    <EvilIcons name="heart" size={48} color="red" />
    <EvilIcons name="user" size={32} color="#333" />
    <EvilIcons name="lock" size={28} color="purple" />
  </DocsViewer>
);

export default EvilIconsDocsScreen;
