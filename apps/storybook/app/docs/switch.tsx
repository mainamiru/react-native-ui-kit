import { DocsViewer } from "@/components";
import { Switch, SwitchRef } from "@mainamiru/react-native-ui-kit";
import React, { useRef, useState } from "react";
import { Button, Text, View } from "react-native";

export default function SwitchDocs() {
  const [controlledValue, setControlledValue] = useState(false);
  const ref = useRef<SwitchRef>(null);

  return (
    <DocsViewer
      title="Switch"
      description="A customizable and animated toggle switch with controlled/uncontrolled modes, sizes, colors, and accessibility."
      usage="Use the Switch component for binary on/off states like settings toggles."
      exampleCode={`import React, { useRef } from "react";
import { Switch, SwitchRef } from "@mainamiru/react-native-ui-kit";
import { View, Text } from "react-native";

export default function App() {
  const switchRef = useRef<SwitchRef>(null);

  return (
    <View style={{ padding: 20 }}>
      <Text>Enable Notifications</Text>
      <Switch
        ref={switchRef}
        defaultValue={true}
        size="lg"
        activeTrackColor="#22c55e"
        inactiveTrackColor="#9ca3af"
        onValueChange={(val) => console.log("Toggled:", val)}
      />
    </View>
  );
}`}
      props={{
        value: {
          type: "boolean",
          required: false,
          description: "Controlled state for the switch.",
        },
        defaultValue: {
          type: "boolean",
          required: false,
          description: "Initial value when uncontrolled.",
        },
        onValueChange: {
          type: "(next: boolean) => void",
          required: false,
          description: "Callback when the switch changes value.",
        },
        disabled: {
          type: "boolean",
          required: false,
          description: "Disables user interaction.",
        },
        size: {
          type: '"sm" | "md" | "lg" | number',
          required: false,
          description: "Defines the size of the switch.",
        },
        thumbColor: {
          type: "string",
          required: false,
          description: "Sets the thumb color.",
        },
        activeTrackColor: {
          type: "string",
          required: false,
          description: "Sets the active track color.",
        },
        inactiveTrackColor: {
          type: "string",
          required: false,
          description: "Sets the inactive track color.",
        },
      }}
    >
      <View style={{ flex: 1, padding: 10, gap: 20 }}>
        {/* 1. Uncontrolled usage */}
        <View>
          <Text style={{ marginBottom: 8, fontWeight: "600" }}>
            Uncontrolled (defaultValue)
          </Text>
          <Switch
            defaultValue={true}
            onValueChange={(v) => console.log("Uncontrolled:", v)}
          />
        </View>

        {/* 2. Controlled usage */}
        <View>
          <Text style={{ marginBottom: 8, fontWeight: "600" }}>Controlled</Text>
          <Switch
            value={controlledValue}
            onValueChange={setControlledValue}
            activeTrackColor="#4ade80"
            inactiveTrackColor="#d1d5db"
          />
          <Text>Value: {controlledValue ? "ON" : "OFF"}</Text>
          <Button
            title="Toggle"
            onPress={() => setControlledValue((prev) => !prev)}
          />
        </View>

        {/* 3. Different sizes */}
        <View>
          <Text style={{ marginBottom: 8, fontWeight: "600" }}>Sizes</Text>
          <View style={{ flexDirection: "row", gap: 16 }}>
            <Switch size="sm" defaultValue />
            <Switch size="md" defaultValue />
            <Switch size="lg" defaultValue />
          </View>
        </View>

        {/* 4. Disabled */}
        <View>
          <Text style={{ marginBottom: 8, fontWeight: "600" }}>Disabled</Text>
          <Switch value={true} disabled />
        </View>

        {/* 5. Ref API */}
        <View>
          <Text style={{ marginBottom: 8, fontWeight: "600" }}>
            Using Ref API
          </Text>
          <Switch ref={ref} defaultValue={false} />
          <View style={{ flexDirection: "row", gap: 12, marginTop: 8 }}>
            <Button title="Toggle" onPress={() => ref.current?.toggle()} />
            <Button
              title="Turn ON"
              onPress={() => ref.current?.setValue(true)}
            />
            <Button
              title="Turn OFF"
              onPress={() => ref.current?.setValue(false)}
            />
            <Button
              title="Get Value"
              onPress={() => alert("Value: " + ref.current?.getValue())}
            />
          </View>
        </View>
      </View>
    </DocsViewer>
  );
}
