import { DocsViewer } from "@/components";
import { SearchBar, Text } from "@mainamiru/react-native-ui-kit";
import React from "react";
import { View } from "react-native";

const SearchBarDocsScreen = () => {
  const [value, setValue] = React.useState("");

  return (
    <DocsViewer
      title="SearchBar"
      description="A customizable search input with optional clear button and submission handling."
      usage="Use SearchBar at the top of lists or dashboards to let users filter content. Control the value externally for analytics or advanced filtering."
      exampleCode={`import React, { useState } from "react";
import { View } from "react-native";
import { SearchBar } from "@mainamiru/react-native-ui-kit";

export default function App() {
  const [value, setValue] = useState("");

  return (
    <View style={{ padding: 20 }}>
      <SearchBar
        value={value}
        onChangeText={setValue}
        placeholder="Search items..."
        onSubmitEditing={() => console.log("Search submitted")}
      />
    </View>
  );
}`}
      props={{
        placeholder: {
          type: "string",
          required: false,
          default: '"Search..."',
          description: "Placeholder text displayed inside the search bar.",
        },
        value: {
          type: "string",
          required: false,
          description: "Controlled value of the search input.",
        },
        onChangeText: {
          type: "(text: string) => void",
          required: false,
          description: "Callback fired when the text changes.",
        },
        onSubmitEditing: {
          type: "() => void",
          required: false,
          description: "Callback invoked when the user submits the search.",
        },
        style: {
          type: "StyleProp<ViewStyle>",
          required: false,
          description: "Custom styles for the outer search bar container.",
        },
        inputStyle: {
          type: "StyleProp<TextStyle>",
          required: false,
          description: "Custom styles for the TextInput element.",
        },
        showClearButton: {
          type: "boolean",
          required: false,
          default: "true",
          description: "Whether to display the clear (×) button.",
        },
      }}
    >
      <View style={{ gap: 16 }}>
        <Text variant="titleMedium">Try typing below</Text>
        <SearchBar
          value={value}
          placeholder="Search components..."
          onChangeText={setValue}
          onSubmitEditing={() => console.log("Search submitted:", value)}
        />
        <Text variant="bodySmall">Current query: {value || "(empty)"}</Text>
      </View>
    </DocsViewer>
  );
};

export default SearchBarDocsScreen;
