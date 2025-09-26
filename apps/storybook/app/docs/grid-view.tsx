import { DocsViewer } from "@/components";
import { GridView } from "@mainamiru/react-native-ui-kit";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const GridViewDocsScreen = () => (
  <DocsViewer
    title="GridView"
    description="A responsive GridView that adjusts columns dynamically using container width."
    usage="GridView uses onLayout to measure available space and automatically calculate the number of columns."
    exampleCode={`import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { GridView } from "@mainamiru/react-native-ui-kit";

const data = Array.from({ length: 12 }, (_, i) => \`Box \${i + 1}\`);

export default function App() {
  return (
    <GridView
      data={data}
      itemWidth={90}
      spacing={12}
      renderItem={(item, index, size) => (
        <View style={[styles.item, { width: size, height: size }]}>
          <Text>{item}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#ddd",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
  },
});`}
    props={{
      data: {
        type: "T[]",
        required: true,
        description: "Array of items to render in the grid.",
      },
      renderItem: {
        type: "(item: T, index: number, itemSize: number) => React.ReactNode",
        required: true,
        description: "Function to render each grid item with dynamic width.",
      },
      itemWidth: {
        type: "number",
        required: true,
        description:
          "Base width for each item, used to calculate column count.",
      },
      spacing: {
        type: "number",
        required: false,
        description: "Spacing between grid items. Default is 8.",
      },
      style: {
        type: "StyleProp<ViewStyle>",
        required: false,
        description: "Optional container style.",
      },
    }}
  >
    <GridView
      spacing={12}
      itemWidth={90}
      scrollEnabled={false}
      contentContainerStyle={{ padding: 10 }}
      data={Array.from({ length: 12 }, (_, i) => `Box ${i + 1}`)}
      renderItem={({ item, size }) => (
        <View style={[styles.item, { width: size, height: size }]}>
          <Text>{item}</Text>
        </View>
      )}
    />
  </DocsViewer>
);

export default GridViewDocsScreen;

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#ddd",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
  },
});
