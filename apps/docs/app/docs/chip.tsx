import { DocsViewer } from "@/components";
import { Chip } from "@mainamiru/react-native-ui-kit";
import React, { useState } from "react";
import { View } from "react-native";

const ChipDocsScreen = () => {
  const [selected, setSelected] = useState(false);

  return (
    <DocsViewer
      title="Chip"
      description="A versatile chip component with support for filled, outlined, and elevated modes."
      usage="Use Chip to represent small blocks of information or quick filter options."
      exampleCode={`import React, { useState } from "react";
import { View } from "react-native";
import { Chip } from "@mainamiru/react-native-ui-kit";

export default function App() {
  const [selected, setSelected] = useState(false);

  return (
    <View style={{ flexDirection: "row", flexWrap: "wrap", padding: 16 }}>
      <Chip label="Filled" mode="filled" />
      <Chip label="Outlined" mode="outlined" />
      <Chip label="Elevated" mode="elevated" />
      <Chip
        label="Selectable"
        selected={selected}
        onPress={() => setSelected(!selected)}
      />
    </View>
  );
}`}
      props={{
        label: {
          type: "string",
          required: true,
          description: "Text displayed on the chip.",
        },
        mode: {
          type: `"filled" | "outlined" | "elevated"`,
          required: false,
          default: "filled",
          description: "Defines the chip's visual appearance.",
        },
        selected: {
          type: "boolean",
          required: false,
          default: "false",
          description: "Controls selected state appearance.",
        },
        disabled: {
          type: "boolean",
          required: false,
          default: "false",
          description: "Disables press events and changes color.",
        },
        onPress: {
          type: "() => void",
          required: false,
          description: "Triggered when the chip is pressed.",
        },
        onClose: {
          type: "() => void",
          required: false,
          description: "Triggered when the chip is closed.",
        },
      }}
    >
      <View style={{ flexDirection: "row", flexWrap: "wrap", padding: 16 }}>
        <Chip label="Filled" />
        <Chip label="Outlined" mode="outlined" />
        <Chip label="Elevated" mode="elevated" />
        <Chip
          label="Selectable"
          selected={selected}
          onClose={() => setSelected(false)}
          onPress={() => setSelected(true)}
        />
      </View>
    </DocsViewer>
  );
};

export default ChipDocsScreen;
