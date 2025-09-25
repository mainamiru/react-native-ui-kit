# Text Component

A versatile, theme-aware Text component for React Native that supports multiple variants such as titles, body, and captions.

## Props

| Name     | Type            | Required | Default | Description                                                 |
| -------- | --------------- | -------- | ------- | ----------------------------------------------------------- |
| variant  | TextVariant     | ❌       | text    | The text style variant to apply.                            |
| style    | TextStyle       | ❌       | -       | Custom style to override the default styles.                |
| children | React.ReactNode | ✅       | -       | The text content to display.                                |
| ...props | TextProps       | ❌       | -       | Any additional props passed to React Native Text component. |

## Variants

- `text` (default)
- `titleLarge`
- `titleMedium`
- `titleSmall`
- `bodyLarge`
- `bodyMedium`
- `bodySmall`
- `body`
- `caption`

## Usage

```tsx
import React from "react";
import { View } from "react-native";
import { Text } from "@mainamiru/react-native-ui-kit";

export default function App() {
  return (
    <View style={{ padding: 16 }}>
      <Text variant="titleLarge">This is a Large Title</Text>
      <Text variant="bodyMedium">This is body text</Text>
      <Text variant="caption">This is a caption</Text>
    </View>
  );
}
```
