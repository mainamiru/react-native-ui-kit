import { DocsViewer } from "@/components";
import { Center, Icon, Tooltip } from "@mainamiru/react-native-ui-kit";
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
      color: {
        type: "string",
        required: false,
        description: "Icon color",
        default: "black",
      },
      size: {
        type: "number",
        required: false,
        description: "Icon size",
        default: "20",
      },
    }}
  >
    <View
      style={{
        gap: 10,
        padding: 10,
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      {Object.entries(Icon).map(([name, Component]) => (
        <Center flex={1} key={name} minWidth={50}>
          <Tooltip
            text="Got it 👍 — the issue you’re hitting is because measure gives absolute screen coordinates, but the tooltip itself is positioned absolutely inside the Portal host. That means your top and left offsets need to account for both tooltip size and the placement spacing (distance from the trigger)."
            placement="bottom"
          >
            <Component
              size={28}
              color="blue"
              onPress={() => {
                alert("Hello World");
              }}
            />
          </Tooltip>
        </Center>
      ))}
    </View>
  </DocsViewer>
);

export default IconDocsScreen;
