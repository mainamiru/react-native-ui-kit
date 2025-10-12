import { DocsViewer } from "@/components";
import {
  Button,
  Sidebar,
  SidebarRef,
  Text,
} from "@mainamiru/react-native-ui-kit";
import React, { useRef } from "react";
import { View } from "react-native";

const SidebarDocsScreen = () => {
  const sidebarRef = useRef<SidebarRef>(null);

  return (
    <DocsViewer
      title="Sidebar"
      description="A customizable sidebar (drawer) component that slides in from the left or right with animation."
      usage="Use Sidebar to provide navigation or contextual menus that slide in with animated transitions."
      exampleCode={`import React, { useRef } from "react";
import { Button, Text, View } from "react-native";
import { Sidebar, SidebarRef } from "@mainamiru/react-native-ui-kit";

export default function App() {
  const sidebarRef = useRef<SidebarRef>(null);

  return (
    <View style={{ flex: 1 }}>
      <Button onPress={() => sidebarRef.current?.open()}>Open Sidebar</Button>
      <Sidebar ref={sidebarRef} position="left">
        <View style={{ flex: 1, padding: 16 }}>
          <Text style={{ fontSize: 18, marginBottom: 12 }}>Sidebar Menu</Text>
          <Button onPress={() => sidebarRef.current?.close()}>Close</Button>
        </View>
      </Sidebar>
    </View>
  );
}`}
      props={{
        open: {
          type: "boolean",
          required: false,
          description: "Controlled state of sidebar open/closed.",
        },
        defaultOpen: {
          type: "boolean",
          required: false,
          description: "Initial open state (when uncontrolled).",
        },
        width: {
          type: "number",
          required: false,
          description: "Width of sidebar.",
        },
        backdropColor: {
          type: "string",
          required: false,
          description: "Backdrop overlay color when sidebar is open.",
        },
        position: {
          type: '"left" | "right"',
          required: false,
          description: "Which side of the screen the sidebar appears from.",
        },
        type: {
          type: '"default" | "permanent"',
          required: false,
          description: "Display mode of the sidebar.",
        },
        onOpenChange: {
          type: "(next: boolean) => void",
          required: false,
          description: "Callback when open state changes.",
        },
      }}
    >
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Button onPress={() => sidebarRef.current?.open()}>Open Sidebar</Button>
      </View>
      <Sidebar ref={sidebarRef} position="left">
        <View style={{ flex: 1, padding: 16 }}>
          <Text style={{ fontSize: 18, marginBottom: 12 }}>Sidebar Menu</Text>
          <Button onPress={() => sidebarRef.current?.close()}>Close</Button>
        </View>
      </Sidebar>
    </DocsViewer>
  );
};

export default SidebarDocsScreen;
