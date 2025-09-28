import { DocsViewer } from "@/components";
import { Checkbox } from "@mainamiru/react-native-ui-kit";
import React from "react";

const CheckboxDocsScreen = () => {
  return (
    <DocsViewer
      title="Checkbox"
      description="An animated tri-state checkbox that supports controlled and uncontrolled modes."
      usage="Use Checkbox to handle binary or indeterminate selection states. Supports label and programmatic control via ref."
      exampleCode={`import React, { useRef } from "react";
import { Checkbox, CheckboxRef } from "@mainamiru/react-native-ui-kit";
import { View } from "react-native";

export default function App() {
  const ref = useRef<CheckboxRef>(null);

  return (
    <View style={{ padding: 20 }}>
      <Checkbox
        label="Accept Terms"
        defaultStatus="unchecked"
        onChange={(s) => console.log("Changed to:", s)}
      />

      <Checkbox
        ref={ref}
        label="Controlled Example"
        status="checked"
        onChange={(s) => console.log("Controlled:", s)}
      />
    </View>
  );
}`}
      props={{
        status: {
          type: `"checked" | "unchecked" | "indeterminate"`,
          required: false,
          description: "Controlled state of the checkbox.",
        },
        defaultStatus: {
          type: `"checked" | "unchecked" | "indeterminate"`,
          required: false,
          description: "Initial state for uncontrolled mode.",
        },
        onChange: {
          type: "(next: CheckboxStatus) => void",
          required: false,
          description: "Callback fired when status changes.",
        },
        disabled: {
          type: "boolean",
          required: false,
          description: "Disables interaction when true.",
        },
        size: {
          type: "number",
          required: false,
          description: "Size of the checkbox box.",
        },
        color: {
          type: "string",
          required: false,
          description: "Active (checked/indeterminate) color.",
        },
        uncheckedColor: {
          type: "string",
          required: false,
          description: "Border color when unchecked.",
        },
        style: {
          type: "ViewStyle",
          required: false,
          description: "Custom style for container.",
        },
        label: {
          type: "string",
          required: false,
          description: "Optional label displayed beside checkbox.",
        },
      }}
      style={{ padding: 10, gap: 10 }}
    >
      <Checkbox label="Accept Terms" />
      <Checkbox label="Indeterminate" defaultStatus="indeterminate" />
    </DocsViewer>
  );
};

export default CheckboxDocsScreen;
