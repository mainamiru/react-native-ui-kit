# Chip Component

A versatile React Native Chip component that supports **filled**, **outlined**, and **elevated** display modes.  
Useful for filters, tags, and compact action buttons.

---

## Props

| Name        | Type                                   | Required | Default    | Description                                      |
| ----------- | -------------------------------------- | -------- | ---------- | ------------------------------------------------ |
| `label`     | `string`                               | ✅       | —          | The text displayed on the chip.                  |
| `mode`      | `"filled" \| "outlined" \| "elevated"` | ❌       | `"filled"` | Determines the visual style of the chip.         |
| `selected`  | `boolean`                              | ❌       | `false`    | Indicates if the chip is in a selected state.    |
| `disabled`  | `boolean`                              | ❌       | `false`    | Disables user interaction and adjusts the style. |
| `onPress`   | `() => void`                           | ❌       | —          | Callback fired when the chip is pressed.         |
| `style`     | `StyleProp<ViewStyle>`                 | ❌       | —          | Additional style for the chip container.         |
| `textStyle` | `StyleProp<TextStyle>`                 | ❌       | —          | Additional style for the chip label.             |

---

## Usage

```tsx
import React, { useState } from "react";
import { View } from "react-native";
import { Chip } from "@mainamiru/react-native-ui-kit";

export default function App() {
  const [selected, setSelected] = useState(false);

  return (
    <View style={{ flexDirection: "row", flexWrap: "wrap", padding: 16 }}>
      <Chip label="Default" onPress={() => {}} />
      <Chip label="Outlined" mode="outlined" onPress={() => {}} />
      <Chip label="Elevated" mode="elevated" onPress={() => {}} />
      <Chip
        label="Selectable"
        selected={selected}
        onPress={() => setSelected(!selected)}
      />
    </View>
  );
}
```
