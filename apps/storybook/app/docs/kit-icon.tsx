import { DocsViewer } from "@/components";
import { FlexView, KitIcon, Text } from "@mainamiru/react-native-ui-kit";
import React from "react";

const KitIconDocsScreen = () => (
  <DocsViewer
    title="KitIcon"
    description="The branded icon component that namespaces EvilIcons under KitIcon for a consistent design system API."
    usage="Use KitIcon when you need any of the provided EvilIcons with a typed, discoverable API. Access icons as properties such as KitIcon.ChevronDown."
    exampleCode={`import React from "react";
import { View } from "react-native";
import { KitIcon } from "@mainamiru/react-native-ui-kit";

export default function App() {
  return (
    <View style={{ flexDirection: "row", gap: 16, padding: 20 }}>
      <KitIcon.ChevronDown size={24} color="red" />
      <KitIcon.Search size={28} color="green" />
      <KitIcon.User size={28} color="blue" />
      <KitIcon.Heart size={28} color="pink" />
    </View>
  );
}`}
  >
    <FlexView gap={16} padding={16} alignItems="center">
      <Text variant="titleMedium">Popular Icons</Text>
      <FlexView gap={16} flexDirection="row">
        <KitIcon.ChevronDown size={32} color="#6366f1" />
        <KitIcon.Search size={32} color="#10b981" />
        <KitIcon.User size={32} color="#0ea5e9" />
        <KitIcon.Heart size={32} color="#ef4444" />
      </FlexView>
      <Text variant="bodyMedium" style={{ textAlign: "center" }}>
        Access 70+ EvilIcons instantly with shared props for color and sizing.
      </Text>
    </FlexView>
  </DocsViewer>
);

export default KitIconDocsScreen;
