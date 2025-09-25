# Avatar Component

A compound Avatar component for React Native, supporting base container, image avatars, and text/initial avatars.

## Props

### Avatar (Base)

| Name     | Type                 | Required | Default | Description                      |
| -------- | -------------------- | -------- | ------- | -------------------------------- |
| size     | number               | ❌       | 40      | Diameter of the avatar           |
| style    | StyleProp<ViewStyle> | ❌       | -       | Custom styling for the avatar    |
| children | React.ReactNode      | ❌       | -       | Nested content inside the avatar |

### Avatar.Image

| Name   | Type                  | Required | Default | Description                  |
| ------ | --------------------- | -------- | ------- | ---------------------------- |
| source | string                | ✅       | -       | Image URL for avatar         |
| size   | number                | ❌       | 40      | Diameter of the avatar       |
| style  | StyleProp<ImageStyle> | ❌       | -       | Custom styling for the image |

### Avatar.Text

| Name  | Type                 | Required | Default | Description                 |
| ----- | -------------------- | -------- | ------- | --------------------------- |
| text  | string               | ✅       | -       | Text or initials to display |
| size  | number               | ❌       | 40      | Diameter of the avatar      |
| style | StyleProp<TextStyle> | ❌       | -       | Custom styling for the text |

## Usage

```tsx
import React from "react";
import { View } from "react-native";
import { Avatar } from "@mainamiru/react-native-ui-kit";

export default function App() {
  return (
    <View style={{ flexDirection: "row", gap: 16, padding: 20 }}>
      <Avatar size={60} /> {/* Base avatar */}
      <Avatar.Image source="https://via.placeholder.com/150" size={60} />
      <Avatar.Text text="JS" size={60} />
    </View>
  );
}
```
