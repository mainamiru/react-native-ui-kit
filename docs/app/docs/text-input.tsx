import { DocsViewer } from "@/components";
import { Icon, TextInput } from "@mainamiru/react-native-ui-kit";
import React from "react";
import { View } from "react-native";

const TextInputDocsScreen = () => {
  const [value, setValue] = React.useState("");

  const handleChange = (text: string) => {
    setValue(text);
  };

  return (
    <DocsViewer
      title="TextInput"
      description="A customizable, accessible text field with labels, helper text, validation, adornments, and animated focus states."
      usage="Use TextInput for forms where you need validation feedback and optional left/right icons. Control the value via state and provide helper text for guidance."
      exampleCode={`import React, { useState } from "react";
import { View, Button } from "react-native";
import { Icon, TextInput } from "@mainamiru/react-native-ui-kit";

export default function App() {
  const [value, setValue] = useState("");

  return (
    <View style={{ padding: 10 }}>
      <TextInput
        label="Email"
        placeholder="Enter your email"
        helperText="We'll never share your email."
        validate={(text) =>
          !text.includes("@") ? new Error("Invalid email address") : null
        }
        left={({ color }) => (
          <Icon.Envelope color={color} size={20} />
        )}
        value={value}
        onChangeText={setValue}
      />
    </View>
  );
}`}
      props={{
        label: {
          type: "string | null",
          required: false,
          description: "Label displayed above the input field.",
        },
        helperText: {
          type: "string",
          required: false,
          description: "Support text shown below the input.",
        },
        style: {
          type: "StyleProp<ViewStyle>",
          href: "https://reactnative.dev/docs/view-style-props",
          required: false,
          description: "Wrapper style for the component.",
        },
        containerStyle: {
          type: "StyleProp<ViewStyle>",
          href: "https://reactnative.dev/docs/view-style-props",
          required: false,
          description: "Custom style for the input container.",
        },
        inputStyle: {
          type: "StyleProp<TextStyle>",
          href: "https://reactnative.dev/docs/text-style-props",
          required: false,
          description: "Style applied to the native TextInput.",
        },
        mode: {
          type: '"outlined" | "underline"',
          required: false,
          default: '"outlined"',
          description: "Determines the visual style of the input border.",
        },
        validate: {
          type: "(text: string) => Error | null",
          required: false,
          description:
            "Validation function returning an Error when input is invalid.",
        },
        left: {
          type: "(props: { color: string; }) => React.ReactNode",
          required: false,
          description:
            "Render prop to display an element on the left side of the input.",
        },
        right: {
          type: "(props: { color: string; }) => React.ReactNode",
          required: false,
          description:
            "Render prop to display an element on the right side of the input.",
        },
      }}
    >
      <View style={{ gap: 16, padding: 10 }}>
        <TextInput
          label="Email"
          placeholder="Enter your email"
          helperText="We'll never share your email."
          validate={(value) => {
            if (!value.includes("@")) {
              return new Error("Invalid Email. Please enter valid email");
            }
            return null;
          }}
          value={value}
          onChangeText={handleChange}
          left={({ color }) => <Icon.Envelope size={20} color={color} />}
        />
        <TextInput
          mode="underline"
          label="Password"
          placeholder="Enter password"
          secureTextEntry
          right={({ color }) => <Icon.Eye size={20} color={color} />}
          validate={(value) => {
            if (value.length < 6) {
              return new Error("Password must be at least 6 characters");
            }
            return null;
          }}
        />
      </View>
    </DocsViewer>
  );
};

export default TextInputDocsScreen;
