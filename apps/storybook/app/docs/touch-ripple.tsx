import { DocsViewer } from "@/components";
import { Text, TouchRipple } from "@mainamiru/react-native-ui-kit";
import React from "react";
const TouchRippleDocsScreen = () => {
  return (
    <DocsViewer
      title="TouchRipple"
      description="A component that provides a touch ripple effect on touchable elements."
      usage="Use TouchRipple to add a touch ripple effect to any touchable element."
      exampleCode={`import React from "react";
import { TouchRipple } from "@mainamiru/react-native-ui-kit";

export default function App() {
  return (
    <TouchRipple>
      <Text>Touch me</Text>
    </TouchRipple>
  );
}`}
    >
      <TouchRipple onPress={() => alert("Pressed")}>
        <Text style={{ textAlign: "center", padding: 10 }}>Touch me</Text>
      </TouchRipple>
    </DocsViewer>
  );
};

export default TouchRippleDocsScreen;
