# Sidebar Component

A customizable sidebar (drawer) component for React Native. Supports left/right positioning, controlled or uncontrolled state, permanent or modal type, and animated transitions.

## Props

| Name                | Type                       | Required | Default             | Description                                                              |
| ------------------- | -------------------------- | -------- | ------------------- | ------------------------------------------------------------------------ |
| `open`              | `boolean`                  | ❌       | -                   | Controlled state of sidebar open/closed.                                 |
| `defaultOpen`       | `boolean`                  | ❌       | `false`             | Initial open state (when uncontrolled).                                  |
| `width`             | `number`                   | ❌       | `80% of screen`     | Width of sidebar.                                                        |
| `backdropColor`     | `string`                   | ❌       | `"rgba(0,0,0,0.4)"` | Backdrop overlay color when sidebar is open.                             |
| `children`          | `React.ReactNode`          | ❌       | -                   | Content inside the sidebar.                                              |
| `animationDuration` | `number`                   | ❌       | `250`               | Animation duration in ms.                                                |
| `position`          | `"left" \| "right"`        | ❌       | `"left"`            | Which side of the screen the sidebar appears from.                       |
| `style`             | `StyleProp<ViewStyle>`     | ❌       | -                   | Custom styles for the sidebar container.                                 |
| `type`              | `"default" \| "permanent"` | ❌       | `"default"`         | Display mode: modal overlay (`default`) or always visible (`permanent`). |
| `onOpenChange`      | `(next: boolean) => void`  | ❌       | -                   | Callback when open state changes.                                        |

## Ref Methods (`SidebarRef`)

| Method     | Description                                  |
| ---------- | -------------------------------------------- |
| `open()`   | Opens the sidebar.                           |
| `close()`  | Closes the sidebar.                          |
| `toggle()` | Toggles the sidebar state.                   |
| `isOpen()` | Returns `true` if sidebar is currently open. |

## Usage

```tsx
import React, { useRef } from "react";
import { Button, Text, View } from "react-native";
import { Sidebar, SidebarRef } from "@mainamiru/react-native-ui-kit";

export default function App() {
  const sidebarRef = useRef<SidebarRef>(null);

  return (
    <View style={{ flex: 1 }}>
      <Button title="Open Sidebar" onPress={() => sidebarRef.current?.open()} />
      <Sidebar ref={sidebarRef} position="left">
        <View style={{ flex: 1, padding: 16 }}>
          <Text style={{ fontSize: 18, marginBottom: 12 }}>Sidebar Menu</Text>
          <Button title="Close" onPress={() => sidebarRef.current?.close()} />
        </View>
      </Sidebar>
    </View>
  );
}
```
