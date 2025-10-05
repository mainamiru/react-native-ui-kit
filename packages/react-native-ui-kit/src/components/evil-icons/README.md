# EvilIcons Component

A cross-compatible **EvilIcons** component for React Native that automatically detects and loads the available icon module (Expo, React Native Vector Icons, etc.).  
If no icon library is installed, it falls back to a placeholder symbol and logs a warning.

---

## ✨ Features

- ✅ Auto-detects icon library (`@expo/vector-icons`, `@react-native-vector-icons`, or `react-native-vector-icons`)
- ♿ Includes accessibility support for both Web and Native
- ⚙️ Fully typed with TypeScript
- 🧩 Provides fallback UI when no library is installed

---

## 🔧 Props

| Name               | Type                                                                            | Required | Default  | Description                                          |
| ------------------ | ------------------------------------------------------------------------------- | -------- | -------- | ---------------------------------------------------- |
| `name`             | `ComponentProps<typeof import("@expo/vector-icons/EvilIcons").default>["name"]` | ✅       | —        | Name of the icon from the EvilIcons set              |
| `size`             | `number`                                                                        | ✅       | —        | Size of the icon in pixels                           |
| `color`            | `string`                                                                        | ❌       | `"#000"` | Icon color                                           |
| `testID`           | `string`                                                                        | ❌       | —        | Test identifier for testing purposes                 |
| `direction`        | `"rtl" \| "ltr"`                                                                | ❌       | —        | Direction for icon layout                            |
| `allowFontScaling` | `boolean`                                                                       | ❌       | —        | Allows text/icon scaling based on user font settings |
| `style`            | `StyleProp<TextStyle>`                                                          | ❌       | —        | Custom text style for the icon                       |

---

## 🚀 Usage

```tsx
import React from "react";
import { EvilIcons } from "@mainamiru/react-native-ui-kit";

export default function App() {
  return (
    <>
      <EvilIcons name="heart" size={48} color="red" />
      <EvilIcons name="user" size={32} color="#333" />
    </>
  );
}
```

If no compatible library is installed, a placeholder square (□) will render, and a console warning will guide you to install one.

---

## 📦 Installation (for full functionality)

```bash
# Using Expo
npm install @expo/vector-icons

# Or for bare React Native
npm install react-native-vector-icons
npx react-native link react-native-vector-icons
```
