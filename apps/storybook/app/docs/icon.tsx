import { DocsViewer } from "@/components";
import { Icon } from "@mainamiru/react-native-ui-kit";
import React from "react";
import { View } from "react-native";

const IconDocsScreen = () => (
  <DocsViewer
    title="Icon"
    description="Wrapper around EvilIcons exposing ~70 pre-mapped subcomponents."
    usage="Use Icon.[Name] instead of remembering string names from EvilIcons."
    exampleCode={`import React from "react";
import { View } from "react-native";
import { Icon } from "@mainamiru/react-native-ui-kit";

export default function App() {
  return (
    <View style={{ flexDirection: "row", gap: 16 }}>
      <Icon.ChevronLeft size={32} color="black" />
      <Icon.Search size={28} color="blue" />
      <Icon.Heart size={28} color="red" />
    </View>
  );
}`}
    props={{
      "Icon.[Name]": {
        type: "{ size?: number; color?: string; style?: TextStyle }",
        required: false,
        description:
          "Renders a specific EvilIcon by mapped name, such as Icon.ChevronLeft or Icon.Search.",
      },
    }}
  >
    <View style={{ flexDirection: "row", gap: 16 }}>
      <Icon.ChevronLeft size={32} color="black" />
      <Icon.Search size={28} color="blue" />
      <Icon.Heart size={28} color="red" />
    </View>
  </DocsViewer>
);

export default IconDocsScreen;
