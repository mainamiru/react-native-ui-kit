import { DocsViewer } from "@/components";
import { Spinner, Text } from "@mainamiru/react-native-ui-kit";
import React from "react";
import { View } from "react-native";

const SpinnerDocsScreen = () => {
  const years = React.useMemo(
    () => Array.from({ length: 21 }, (_, i) => 2010 + i),
    []
  );
  const [selectedYear, setSelectedYear] = React.useState<number | null>(null);

  return (
    <DocsViewer
      title="Spinner"
      description="A scrollable picker with snapping and ripple effects for selecting from a list of values."
      usage="Use Spinner to let users pick numeric or textual values with a tactile scrolling experience. Combine multiple spinners to build composite pickers (e.g., date/time)."
      exampleCode={`import React, { useState } from "react";
import { View, Text } from "react-native";
import { Spinner } from "@mainamiru/react-native-ui-kit";

export default function App() {
  const [year, setYear] = useState<number | null>(null);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Spinner
        data={Array.from({ length: 21 }, (_, i) => 2010 + i)}
        initialIndex={5}
        onChange={(val) => setYear(val)}
      />
      <Text style={{ marginTop: 20 }}>Selected Year: {year}</Text>
    </View>
  );
}`}
      props={{
        data: {
          type: "(string | number)[]",
          required: true,
          description: "Array of items to display in the spinner.",
        },
        initialIndex: {
          type: "number",
          required: false,
          default: "0",
          description: "Index that should be selected on mount.",
        },
        onChange: {
          type: "(value: string | number) => void",
          required: false,
          description: "Callback fired when the selected value changes.",
        },
        style: {
          type: "StyleProp<ViewStyle>",
          required: false,
          description: "Custom container styles for the spinner shell.",
        },
        itemHeight: {
          type: "number",
          required: false,
          default: "50",
          description: "Height of each row inside the spinner.",
        },
        visibleItems: {
          type: "number",
          required: false,
          default: "3",
          description: "Number of list items visible at once.",
        },
      }}
    >
      <View style={{ gap: 20, alignItems: "center" }}>
        <Spinner
          data={years}
          initialIndex={5}
          onChange={(value) => setSelectedYear(Number(value))}
          style={{ width: 120 }}
        />
        <Text variant="bodyMedium">
          Selected Year: {selectedYear ?? "Choose a year"}
        </Text>
      </View>
    </DocsViewer>
  );
};

export default SpinnerDocsScreen;
