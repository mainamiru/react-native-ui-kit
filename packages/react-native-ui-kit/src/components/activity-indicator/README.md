# ActivityIndicator Component

A lightweight, customizable loading indicator for React Native.  
It animates 12 bars in a circular pattern with a smooth fade effect, providing a modern alternative to the default `ActivityIndicator`.

---

## ✨ Features

- 🎡 Smooth animated looping using `Animated.loop`.
- 🎨 Fully customizable size and color.
- ⚡ Optimized with `useNativeDriver` for high performance.
- 📦 Pure React Native — no external dependencies.

---

## 📐 Props

| Name    | Type     | Required | Default   | Description                                                                                |
| ------- | -------- | -------- | --------- | ------------------------------------------------------------------------------------------ |
| `size`  | `number` | ❌       | `40`      | Sets the overall width and height of the spinner. Affects both bar length and spacing.     |
| `color` | `string` | ❌       | `#007bff` | Defines the color of the bars in the spinner. Accepts any valid React Native color string. |

---

## 🚀 Usage

### Basic Example

```tsx
import React from "react";
import { View } from "react-native";
import { ActivityIndicator } from "@mainamiru/react-native-ui-kit";

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator />
    </View>
  );
}
```
