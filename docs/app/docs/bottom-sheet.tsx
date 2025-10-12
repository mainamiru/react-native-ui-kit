import { DocsViewer } from "@/components";
import {
  BottomSheet,
  BottomSheetRef,
  Button,
  Text,
} from "@mainamiru/react-native-ui-kit";
import React from "react";
import { View } from "react-native";

const BottomSheetDocsScreen = () => {
  const sheetRef = React.useRef<BottomSheetRef>(null);

  return (
    <DocsViewer
      title="BottomSheet"
      description="A customizable bottom sheet modal with smooth open and close animations, plus backdrop support."
      usage="Use BottomSheet to present contextual actions or content without leaving the current screen. Control the sheet through refs or props and customize the backdrop for emphasis."
      exampleCode={`import React, { useRef } from "react";
import { View, Text, Button } from "react-native";
import { BottomSheet, BottomSheetRef } from "@mainamiru/react-native-ui-kit";

export default function App() {
  const sheetRef = useRef<BottomSheetRef>(null);

  return (
    <View>
      <Button onPress={() => sheetRef.current?.open()}>Open Bottom Sheet</Button>

      <BottomSheet
        ref={sheetRef}
        onClose={() => console.log("Closed")}
        anchor={({ open }) => (
          <Button mode="outlined" onPress={open}>
            Anchor
          </Button>
        )}
      >
        <View style={{ padding: 20, gap: 12 }}>
          <Text variant="titleMedium">Hello Bottom Sheet!</Text>
          <Button onPress={() => sheetRef.current?.close()}>Close</Button>
        </View>
      </BottomSheet>
    </View>
  );
}`}
      props={{
        anchor: {
          type: "(props: AnchorProps) => React.ReactNode",
          required: false,
          description: "Custom anchor component for the sheet.",
        },
        open: {
          type: "boolean",
          required: false,
          description:
            "Controls the sheet visibility when used as a controlled component.",
        },
        onOpen: {
          type: "() => void",
          required: false,
          description: "Callback fired when the sheet finishes opening.",
        },
        onClose: {
          type: "() => void",
          required: false,
          description: "Callback fired when the sheet finishes closing.",
        },
        backdropOpacity: {
          type: "number",
          required: false,
          default: "0.3",
          description: "Opacity of the backdrop overlay (0 – 1).",
        },
        children: {
          type: "React.ReactNode",
          required: true,
          description: "Content rendered inside the sheet body.",
        },
        statusBarTranslucent: {
          type: "boolean",
          required: false,
          default: "true",
          description:
            "Pass-through prop for Android to render behind the status bar.",
        },
        contentStyle: {
          type: "StyleProp<ViewStyle>",
          required: false,
          description: "Custom styling for the sheet container.",
        },
      }}
    >
      <View style={{ gap: 16, padding: 10 }}>
        <Button mode="contained" onPress={() => sheetRef.current?.open()}>
          Open Bottom Sheet
        </Button>
        <BottomSheet
          ref={sheetRef}
          onClose={() => console.log("Closed")}
          anchor={({ open }) => (
            <Button mode="outlined" onPress={open}>
              Anchor
            </Button>
          )}
        >
          <View style={{ padding: 20, gap: 12 }}>
            <Text variant="titleMedium" style={{ color: "black" }}>
              Hello Bottom Sheet!
            </Text>
            <Text variant="bodyMedium">
              This bottom sheet is controlled with a ref. Tap the button below
              to hide it.
            </Text>
            <Button
              mode="outlined"
              textColor="black"
              onPress={() => sheetRef.current?.close()}
            >
              Close Sheet
            </Button>
          </View>
        </BottomSheet>
      </View>
    </DocsViewer>
  );
};

export default BottomSheetDocsScreen;
