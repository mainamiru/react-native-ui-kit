import { DocsViewer } from "@/components";
import { Ionicons } from "@expo/vector-icons";
import { Button } from "@mainamiru/react-native-ui-kit";
import React from "react";

const ButtonDocsScreen = () => (
  <DocsViewer
    title="Button"
    description="A flexible button component with multiple modes, loading states, and optional icons."
    usage="Use Button for user actions. It supports 'contained', 'outlined', and 'text' modes."
    exampleCode={`import React from "react";
import { Button } from "@mainamiru/react-native-ui-kit";
import { Ionicons } from "@expo/vector-icons";

export default function App() {
  return (
    <>
      <Button mode="contained">Save</Button>
      <Button mode="outlined">Cancel</Button>
      <Button mode="text">Skip</Button>
      <Button mode="contained" loading>Loading</Button>
      <Button
        mode="contained"
        icon={({ size, color }) => <Ionicons name="add" size={size} color={color} />}
      >
        Add Item
      </Button>
    </>
  );
}`}
    props={{
      children: {
        type: "string",
        required: true,
        description: "The button label text.",
      },
      textColor: {
        type: "string",
        required: false,
        description: "Custom text color. Defaults based on mode.",
      },
      loading: {
        type: "boolean",
        required: false,
        description: "If true, shows a spinner instead of text or icon.",
      },
      mode: {
        type: `"contained" | "outlined" | "text"`,
        required: false,
        description: "The visual style of the button.",
      },
      buttonColor: {
        type: "string",
        required: false,
        description: "Background/border color depending on mode.",
      },
      style: {
        type: "StyleProp<ViewStyle>",
        required: false,
        description: "Custom style for button wrapper.",
      },
      containerStyle: {
        type: "StyleProp<ViewStyle>",
        required: false,
        description: "Custom style for inner container.",
      },
      textStyle: {
        type: "StyleProp<TextStyle>",
        required: false,
        description: "Custom style for button label.",
      },
      leadingIcon: {
        type: "(props: { size: number; color: string }) => JSX.Element",
        required: false,
        description: "Function that renders an icon inside the button.",
      },
      trailingIcon: {
        type: "(props: { size: number; color: string }) => JSX.Element",
        required: false,
        description: "Function that renders an icon inside the button.",
      },
      disabled: {
        type: "boolean",
        required: false,
        description: "Disables the button.",
      },
    }}
    style={{ padding: 10, gap: 15 }}
  >
    <Button mode="contained">Save</Button>
    <Button mode="outlined" buttonColor="#ff6347">
      Cancel
    </Button>
    <Button mode="elevated">Elevated</Button>
    <Button mode="text">Skip</Button>
    <Button mode="contained" loading>
      Loading
    </Button>
    <Button
      mode="contained"
      leadingIcon={({ size, color }) => (
        <Ionicons name="add" size={size} color={color} />
      )}
    >
      Add Item
    </Button>
  </DocsViewer>
);

export default ButtonDocsScreen;
