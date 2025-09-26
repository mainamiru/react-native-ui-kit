import { DocsViewer } from "@/components";
import { GridView } from "@mainamiru/react-native-ui-kit";
import React from "react";
import { Text, View } from "react-native";
const data = Array.from({ length: 5 }, (_, i) => `Item ${i + 1}`);

const GridViewDocsScreen = () => (
  <DocsViewer
    title="GridView"
    description="A responsive grid component that dynamically calculates item width and number of columns."
    usage="Use GridView when you need a flexible, responsive grid layout with automatic column calculation."
    exampleCode={`import React from "react";
import { Text, View } from "react-native";
import { GridView } from "@mainamiru/react-native-ui-kit";

const data = Array.from({ length: 5 }, (_, i) => \`Item \${i + 1}\`);

export default function App() {
  return (
    <GridView
      data={data}
      itemWidth={100}
      itemSpacing={10}
      style={{ padding: 16 }}
      renderItem={({ item, width }) => (
        <View
          style={{
            width,
            height: width,
            borderRadius: 8,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "skyblue",
          }}
        >
          <Text>{item}</Text>
        </View>
      )}
    />
  );
}`}
    props={{
      data: {
        type: "T[]",
        required: true,
        description: "The list of items to render.",
      },
      itemWidth: {
        type: "number",
        required: true,
        description:
          "Desired base item width (used to calculate columns & adjust size).",
      },
      itemSpacing: {
        type: "number",
        required: false,
        default: "0",
        description:
          "Gap between items (applies to both horizontal & vertical spacing).",
      },
      style: {
        type: "StyleProp<ViewStyle>",
        required: false,
        description: "Style for the outer container. Supports padding safely.",
      },
      itemStyle: {
        type: "StyleProp<ViewStyle>",
        required: false,
        description: "Style for each item wrapper.",
      },
      renderItem: {
        type: "(props: GridViewItemProps<T>) => React.ReactElement",
        required: true,
        description:
          "Function to render each item. Receives an extra `width` prop (calculated).",
      },
    }}
  >
    <GridView
      data={data}
      itemWidth={90}
      itemSpacing={10}
      scrollEnabled={false}
      style={{ padding: 10 }}
      renderItem={({ item, width }) => (
        <View
          style={{
            width,
            height: width,
            borderRadius: 8,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "skyblue",
          }}
        >
          <Text>{item}</Text>
        </View>
      )}
    />
  </DocsViewer>
);

export default GridViewDocsScreen;
