import { DocsViewer } from "@/components";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TextInput } from "@mainamiru/react-native-ui-kit";
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
import { TextInput } from "@mainamiru/react-native-ui-kit";

export default function App() {
  const [value, setValue] = useState("");

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        label="Email"
        placeholder="Enter your email"
        helperText="We'll never share your email."
        validate={(text) =>
          !text.includes("@") ? new Error("Invalid email address") : null
        }
        left={({ color, style }) => (
          <KitIcon.Envelope color={color} size={20} style={style} />
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
          required: false,
          description: "Wrapper style for the component.",
        },
        containerStyle: {
          type: "StyleProp<ViewStyle>",
          required: false,
          description: "Custom style for the input container.",
        },
        inputStyle: {
          type: "StyleProp<TextStyle>",
          required: false,
          description: "Style applied to the native TextInput.",
        },
        mode: {
          type: '"outlined" | "underline"',
          required: false,
          default: '"outlined"',
          description: "Determines the visual style of the input border.",
        },
        focusedOutlineColor: {
          type: "string",
          required: false,
          default: '"orange"',
          description: "Border color when the input is focused.",
        },
        validate: {
          type: "(text: string) => Error | null",
          required: false,
          description:
            "Validation function returning an Error when input is invalid.",
        },
        left: {
          type: "(props: { color: string; style: ViewStyle }) => React.ReactNode",
          required: false,
          description:
            "Render prop to display an element on the left side of the input.",
        },
        right: {
          type: "(props: { color: string; style: ViewStyle }) => React.ReactNode",
          required: false,
          description:
            "Render prop to display an element on the right side of the input.",
        },
      }}
    >
      <View style={{ gap: 16 }}>
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
          left={({ color }) => (
            <MaterialCommunityIcons
              name="email"
              color={color}
              size={18}
              style={{ marginLeft: 10 }}
            />
          )}
        />
        <TextInput
          mode="underline"
          label="Password"
          placeholder="Enter password"
          secureTextEntry
          right={({ color }) => (
            <MaterialCommunityIcons
              name="eye"
              size={18}
              color={color}
              style={{ marginRight: 10 }}
            />
          )}
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
