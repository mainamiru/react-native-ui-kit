import { DocsViewer } from "@/components";
import { List } from "@mainamiru/react-native-ui-kit";
import React from "react";
import { View } from "react-native";

const ListAccordionDocsScreen = () => {
  return (
    <DocsViewer
      title="List Accordion"
      description="Expandable/collapsible container to group related list items under a header."
      usage="Use List.Accordion to create grouped sections in lists (e.g., categories, filters). The `expanded` prop sets the initial open state; tapping the header toggles it."
      exampleCode={`import React from "react";
import { View } from "react-native";
import { List } from "@mainamiru/react-native-ui-kit";

export default function App() {
  return (
    <View style={{ padding: 12 }}>
      <List.Accordion
        title="Fruits"
        description="Popular seasonal fruits"
        expanded
        style={{ marginBottom: 12 }}
        contentStyle={{ paddingVertical: 8 }}
        onPress={() => console.log("Fruits toggled")}
      >
        <List.Item title="Apple" description="Red delicious" />
        <List.Item title="Banana" description="High in potassium" />
        <List.Item title="Orange" description="Rich in vitamin C" />
      </List.Accordion>

      <List.Accordion
        title="Vegetables"
        description="Green and leafy"
        style={{ marginBottom: 12 }}
        contentStyle={{ paddingVertical: 8 }}
      >
        <List.Item title="Spinach" description="Iron-rich" />
        <List.Item title="Broccoli" description="Great steamed" />
        <List.Item title="Carrot" description="Beta-carotene" />
      </List.Accordion>
    </View>
  );
}
`}
      props={{
        "List.Accordion": {
          type: "{ title: string; expanded?: boolean; description?: string; children: React.ReactNode; style?: StyleProp<ViewStyle>; titleStyle?: StyleProp<TextStyle>; contentStyle?: StyleProp<ViewStyle>; descriptionStyle?: StyleProp<TextStyle>; onPress?: (e: GestureResponderEvent) => void }",
          required: true,
          description:
            "Accordion header with optional description. `expanded` sets the initial open state. Children are rendered inside a non-scrollable container with animated height.",
        },
        "List.Item": {
          type: "{ title: React.ReactNode; description?: React.ReactNode; left?: () => React.ReactNode; right?: () => React.ReactNode; style?: StyleProp<ViewStyle>; containerStyle?: StyleProp<ViewStyle>; titleStyle?: StyleProp<TextStyle>; descriptionStyle?: StyleProp<TextStyle>; titleNumberOfLines?: number; descriptionNumberOfLines?: number }",
          required: false,
          description:
            "Row element typically used inside an accordion, with optional left/right renderers and styled title/description.",
        },
      }}
    >
      <View style={{ gap: 12, margin: 10 }}>
        <List.Accordion
          expanded={true}
          title="Account Settings"
          description="Manage your profile and preferences"
          contentStyle={{ paddingVertical: 8 }}
        >
          <List.Item title="Profile" description="Name, photo, and bio" />
          <List.Item title="Security" description="Password and 2FA" />
          <List.Item title="Notifications" description="Email and push" />
        </List.Accordion>

        <List.Accordion
          title="App Preferences"
          description="Themes and behavior"
          contentStyle={{ paddingVertical: 8 }}
        >
          <List.Item title="Theme" description="Light / Dark" />
          <List.Item title="Language" description="Change app language" />
          <List.Item title="Privacy" description="Permissions and data" />
        </List.Accordion>
      </View>
    </DocsViewer>
  );
};

export default ListAccordionDocsScreen;
