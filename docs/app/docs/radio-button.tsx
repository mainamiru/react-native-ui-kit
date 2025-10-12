import { DocsViewer } from "@/components";
import { RadioButton, Text } from "@mainamiru/react-native-ui-kit";
import React from "react";
import { View } from "react-native";

const RadioButtonDocsScreen = () => {
  const [selected, setSelected] = React.useState("option1");

  return (
    <DocsViewer
      title="RadioButton"
      description="A customizable radio button component that combines a tappable indicator with a label."
      usage="Use RadioButton to allow users to select a single choice from a short list. Pair multiple RadioButton components and manage the selected value in your state."
      exampleCode={`import React, { useState } from "react";
import { View } from "react-native";
import { RadioButton } from "@mainamiru/react-native-ui-kit";

export default function App() {
  const [selected, setSelected] = useState("option1");

  return (
    <View style={{ padding: 20 }}>
      <RadioButton
        label="Option 1"
        selected={selected === "option1"}
        onPress={() => setSelected("option1")}
      />
      <RadioButton
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
          description: "Text rendered beside the radio indicator.",
        },
        selected: {
          type: "boolean",
          required: true,
          description: "Controls whether the radio is filled and active.",
        },
        onPress: {
          type: "() => void",
          required: true,
          description: "Handler invoked when the radio is pressed.",
        },
        containerStyle: {
          type: "StyleProp<ViewStyle>",
          required: false,
          description: "Override styles for the outer touchable container.",
        },
        labelStyle: {
          type: "StyleProp<TextStyle>",
          required: false,
          description: "Override styles for the label text.",
        },
      }}
    >
      <View style={{ gap: 16 }}>
        <Text variant="titleMedium">Select an option</Text>
        <RadioButton
          label="Option 1"
          selected={selected === "option1"}
          onPress={() => setSelected("option1")}
        />
        <RadioButton
          label="Option 2"
          selected={selected === "option2"}
          onPress={() => setSelected("option2")}
        />
      </View>
    </DocsViewer>
  );
};

export default RadioButtonDocsScreen;
