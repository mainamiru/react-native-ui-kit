# Tabs Component (Base + Context)

A flexible **Tabs** system for React Native.  
The `TabsBase` component provides context for managing active tab state.  
Other components (`Tabs.Header`, `Tabs.Trigger`, `Tabs.Content`) consume this context.

---

## ✨ Features

- Controlled and uncontrolled usage (`value` vs `defaultValue`).
- Context-driven API with `setValue`.
- Configurable active indicator color and tab styles.
- Type-safe tab values with generics (`<T extends string>`).

---

## 📦 Props

### `TabsBase`

| Name                   | Type                   | Required | Default    | Description                                          |
| ---------------------- | ---------------------- | -------- | ---------- | ---------------------------------------------------- |
| `children`             | `React.ReactNode`      | ❌       | -          | Tabs subcomponents (`Header`, `Trigger`, `Content`). |
| `value`                | `T`                    | ❌       | -          | Controlled active tab value.                         |
| `defaultValue`         | `T`                    | ✅       | -          | Initial tab value when uncontrolled.                 |
| `activeIndicatorColor` | `string`               | ❌       | `"orange"` | Color of the active tab indicator.                   |
| `onValueChange`        | `(value: T) => void`   | ❌       | -          | Callback fired when the active tab changes.          |
| `activeTabStyle`       | `StyleProp<ViewStyle>` | ❌       | -          | Custom style applied to the active tab trigger.      |

---

## 📦 Context

The `TabsContext` provides:

| Name                   | Type                   | Description                              |
| ---------------------- | ---------------------- | ---------------------------------------- |
| `value`                | `T`                    | The current active tab.                  |
| `setValue`             | `(value: T) => void`   | Updates the active tab.                  |
| `activeIndicatorColor` | `string`               | Color used for active indicator.         |
| `activeTabStyle`       | `StyleProp<ViewStyle>` | Style applied to the active tab trigger. |

---

## 🚀 Usage

```tsx
import React from "react";
import { View, Text } from "react-native";
import { Tabs } from "@mainamiru/react-native-ui-kit";

export default function App() {
  return (
    <Tabs defaultValue="home" activeIndicatorColor="blue">
      <Tabs.Header>
        <Tabs.Trigger value="home">Home</Tabs.Trigger>
        <Tabs.Trigger value="profile">Profile</Tabs.Trigger>P
      </Tabs.Header>

      <Tabs.Content value="home">
        <Text>Welcome to the home screen</Text>
      </Tabs.Content>
      <Tabs.Content value="profile">
        <Text>This is your profile</Text>
      </Tabs.Content>
    </Tabs>
  );
}
```

---

## 💡 Notes

- If you pass a `value` prop, the component works in **controlled mode**. Make sure to update `value` yourself when `onValueChange` fires.
- If you only pass `defaultValue`, it works in **uncontrolled mode** with internal state.
- `activeIndicatorColor` and `activeTabStyle` can be customized for styling consistency across your app.
