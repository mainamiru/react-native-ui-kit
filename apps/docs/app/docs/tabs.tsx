import { DocsViewer } from "@/components";
import { Tabs } from "@mainamiru/react-native-ui-kit";
import React from "react";
import { Text } from "react-native";

const TabsDocsScreen = () => (
  <DocsViewer
    title="Tabs"
    description="A compound Tabs component with Header, Trigger, and Content to organize content into tabbed views. Supports both controlled and uncontrolled state management."
    usage="Use Tabs when you want to separate related content into multiple tab panels. You can either let Tabs manage its own state (uncontrolled) or fully control it via props (controlled)."
    exampleCode={`import React from "react";
import { Text } from "react-native";
import { Tabs } from "@mainamiru/react-native-ui-kit";

export default function App() {
  return (
    <Tabs defaultValue="home" activeIndicatorColor="blue">
      <Tabs.Header>
        <Tabs.Trigger value="home">Home</Tabs.Trigger>
        <Tabs.Trigger value="profile">Profile</Tabs.Trigger>
      </Tabs.Header>

      <Tabs.Content value="home">
        <Text>Welcome to the home screen</Text>
      </Tabs.Content>
      <Tabs.Content value="profile">
        <Text>This is your profile</Text>
      </Tabs.Content>
    </Tabs>
  );
}`}
    props={{
      Tabs: {
        type: "{ defaultValue: string; value?: string; onValueChange?: (val: string) => void; activeIndicatorColor?: string; activeTabStyle?: StyleProp<ViewStyle>; children: React.ReactNode }",
        required: true,
        description:
          "Root container that provides context and manages the active tab. Supports controlled and uncontrolled usage.",
      },
      "Tabs.Header": {
        type: "{ children: React.ReactNode; style?: StyleProp<ViewStyle> }",
        required: true,
        description:
          "Container for tab triggers. Usually rendered as a row of buttons.",
      },
      "Tabs.Trigger": {
        type: "{ value: string; label: string; style?: StyleProp<ViewStyle>; textStyle?: StyleProp<TextStyle> }",
        required: true,
        description:
          "Interactive tab button. Clicking it changes the active tab.",
      },
      "Tabs.Content": {
        type: "{ value: string; style?: StyleProp<ViewStyle>; children: React.ReactNode }",
        required: true,
        description:
          "Content region that is shown only when its value matches the active tab.",
      },
    }}
    style={{ padding: 10 }}
  >
    <Tabs defaultValue="home" activeIndicatorColor="blue">
      <Tabs.Header>
        <Tabs.Trigger value="home">Home</Tabs.Trigger>
        <Tabs.Trigger value="profile">Profile</Tabs.Trigger>
      </Tabs.Header>

      <Tabs.Content value="home">
        <Text>Welcome to the home screen</Text>
      </Tabs.Content>
      <Tabs.Content value="profile">
        <Text>This is your profile</Text>
      </Tabs.Content>
    </Tabs>
  </DocsViewer>
);

export default TabsDocsScreen;
