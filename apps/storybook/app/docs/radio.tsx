import { DocsViewer } from "@/components";
import { Radio, Text } from "@mainamiru/react-native-ui-kit";
import React from "react";
import { View } from "react-native";

const RadioButtonDocsScreen = () => {
  const [selected, setSelected] = React.useState("option1");

  return (
    <DocsViewer
      title="Radio"
      description="A customizable radio button with label support for single selection lists."
      usage="Use RadioButton to allow users to choose a single option from a list. Combine multiple RadioButton components and manage selection state externally."
      exampleCode={`import React, { useState } from "react";
import { View } from "react-native";
import { Radio } from "@mainamiru/react-native-ui-kit";

export default function App() {
  const [selected, setSelected] = useState("option1");

  return (
    <View style={{ padding: 20 }}>
      <Radio
        selected={selected === "option1"}
        onPress={() => setSelected("option1")}
      />
      <Radio.Item
        label="Option 2"
        selected={selected === "option2"}
        onPress={() => setSelected("option2")}
      />
    </View>
  );
}`}
      props={{
        label: {
          type: "string",
          required: true,
          description: "Text displayed next to the radio button.",
        },
        selected: {
          type: "boolean",
          required: true,
          description: "Controls whether the radio button is filled.",
        },
        onPress: {
          type: "() => void",
          required: true,
          description: "Callback fired when the radio button is pressed.",
        },
        containerStyle: {
          type: "StyleProp<ViewStyle>",
          required: false,
          description: "Custom style applied to the outer container.",
        },
        labelStyle: {
          type: "StyleProp<TextStyle>",
          required: false,
          description: "Custom style applied to the label text.",
        },
      }}
    >
      <View style={{ gap: 16 }}>
        <Text variant="titleMedium">Select an option</Text>
        <Radio
          value="option 1"
          selected={selected === "option1"}
          onChange={() => setSelected("option1")}
        />
        <Radio.Item
          value="option"
          label="Option 2"
          selected={selected === "option2"}
          onChange={() => setSelected("option2")}
        />
      </View>
    </DocsViewer>
  );
};

export default RadioButtonDocsScreen;
