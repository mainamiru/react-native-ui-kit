# Portal Component

A React Native **Portal system** for rendering UI elements outside the normal parent hierarchy. Useful for modals, tooltips, toasts, dropdowns, etc.

## Components

### `PortalHost`

The provider that manages portals. Place it near the root of your app.

### `Portal`

Renders its children into the nearest `PortalHost`.

### `setPortalHost`

Optional helper to set a global portal host for usage outside the React tree.

---

## Props

### `PortalHost`

| Name     | Type              | Required | Default | Description                          |
| -------- | ----------------- | -------- | ------- | ------------------------------------ |
| children | `React.ReactNode` | ✅       | -       | Child components wrapped by provider |

### `Portal`

| Name     | Type              | Required | Default | Description                               |
| -------- | ----------------- | -------- | ------- | ----------------------------------------- |
| children | `React.ReactNode` | ✅       | -       | Content to render inside the `PortalHost` |

---

## Usage

```tsx
import React from "react";
import { View, Text, Button } from "react-native";
import { PortalHost, Portal } from "@mainamiru/react-native-ui-kit";

export default function App() {
  const [show, setShow] = React.useState(false);

  return (
    <PortalHost>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Button title="Toggle Portal" onPress={() => setShow((p) => !p)} />
      </View>

      {show && (
        <Portal>
          <View
            style={{
              position: "absolute",
              bottom: 50,
              left: 20,
              right: 20,
              padding: 16,
              backgroundColor: "black",
              borderRadius: 8,
            }}
          >
            <Text style={{ color: "white" }}>
              This is rendered in a portal!
            </Text>
          </View>
        </Portal>
      )}
    </PortalHost>
  );
}
```
