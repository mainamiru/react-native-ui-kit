# Typography Component

A flexible text component for React Native that supports different variants like headings, body, and captions.

## Props

| Name     | Type                                        | Required | Default | Description                                |
| -------- | ------------------------------------------- | -------- | ------- | ------------------------------------------ |
| children | React.ReactNode                             | ✅       | -       | The text content to display                |
| variant  | "h1" \| "h2" \| "h3" \| "body" \| "caption" | ❌       | "body"  | The style variant of the text              |
| style    | StyleProp<TextStyle>                        | ❌       | -       | Custom style for overriding default styles |

## Usage

```tsx
import React from "react";
import { View } from "react-native";
import { Typography } from "@mainamiru/react-native-ui-kit";

export default function App() {
  return (
    <View style={{ padding: 20 }}>
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="h3">Heading 3</Typography>
      <Typography variant="body">This is body text.</Typography>
      <Typography variant="caption">This is a caption.</Typography>
    </View>
  );
}
```
