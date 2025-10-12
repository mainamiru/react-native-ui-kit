import { DocsViewer } from "@/components";
import { Portal, PortalHost } from "@mainamiru/react-native-ui-kit";
import React, { useState } from "react";
import { Button, Text, View } from "react-native";

const PortalDocsScreen = () => {
  const [visible, setVisible] = useState(false);

  return (
    <DocsViewer
      title="Portal"
      description="Render components outside of their parent hierarchy using Portal and PortalHost."
      usage="Use Portal for overlays like modals, tooltips, or toasts. Place a PortalHost at the root of your app."
      exampleCode={`import { PortalHost, Portal } from "@mainamiru/react-native-ui-kit";
import { View, Button, Text } from "react-native";

export default function App() {
  const [visible, setVisible] = React.useState(false);

  return (
    <PortalHost>
      <Button title="Show Toast" onPress={() => setVisible(true)} />
      {visible && (
        <Portal>
          <View style={{
            position: "absolute",
            bottom: 40,
            left: 20,
            right: 20,
            backgroundColor: "black",
            padding: 12,
            borderRadius: 8
          }}>
            <Text style={{ color: "white" }}>Hello from Portal!</Text>
          </View>
        </Portal>
      )}
    </PortalHost>
  );
}`}
      props={{
        PortalHost: {
          type: "{ children: React.ReactNode }",
          required: true,
          description: "Provider that manages portals. Place at app root.",
        },
        Portal: {
          type: "{ children: React.ReactNode }",
          required: true,
          description: "Renders children into the nearest PortalHost.",
        },
      }}
    >
      <PortalHost>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {visible ? (
            <Button title="Hide Portal" onPress={() => setVisible(false)} />
          ) : (
            <Button title="Show Portal" onPress={() => setVisible(true)} />
          )}
        </View>
        {visible && (
          <Portal>
            <View
              style={{
                position: "absolute",
                bottom: 50,
                left: 20,
                right: 20,
                backgroundColor: "black",
                padding: 12,
                borderRadius: 8,
              }}
            >
              <Text style={{ color: "white" }}>This is a Portal element!</Text>
            </View>
          </Portal>
        )}
      </PortalHost>
    </DocsViewer>
  );
};

export default PortalDocsScreen;
