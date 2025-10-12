import { DocsViewer } from "@/components";
import { TouchRipple } from "@mainamiru/react-native-ui-kit";
import React from "react";
import { Text } from "react-native";

const TouchRippleDocsScreen = () => (
  <DocsViewer
    title="TouchRipple"
    description="A Pressable wrapper that provides a smooth ripple-like feedback using Animated API."
    usage="Use TouchRipple to provide animated press/hover feedback for interactive UI elements."
    exampleCode={`import React from "react";
import { Text } from "react-native";
import { TouchRipple } from "@mainamiru/react-native-ui-kit";

export default function App() {
  return (
    <TouchRipple
      style={{
        padding: 16,
        borderRadius: 8,
        backgroundColor: "#f5f5f5",
        alignItems: "center",
      }}
      onPress={() => console.log("Pressed!")}
    >
      <Text>Click Me</Text>
    </TouchRipple>
  );
}`}
    props={{
      children: {
        type: "React.ReactNode",
        required: false,
        description: "Content inside the pressable element.",
      },
      useNativeDriver: {
        type: "boolean",
        required: false,
        default: "false",
        description: "Whether to use native driver for animations.",
      },
      hoverStyle: {
        type: "(animatedValue: Animated.Value) => Animated.WithAnimatedObject<ViewStyle> | StyleProp<ViewStyle>",
        required: false,
        description:
          "Custom style function that allows full control of hover/press feedback.",
      },
    }}
  >
    <TouchRipple
      style={{
        padding: 16,
        borderRadius: 8,
        backgroundColor: "#f5f5f5",
        alignItems: "center",
      }}
    >
      <Text>Hover or Press Me</Text>
    </TouchRipple>
  </DocsViewer>
);

export default TouchRippleDocsScreen;
