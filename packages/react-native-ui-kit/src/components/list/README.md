# ListAccordion Component

A dynamic accordion component for React Native that animates based on **children height**. Uses a non-scrollable `ScrollView` to measure content dynamically, ensuring smooth expand/collapse.

## Props

| Name         | Type                 | Required | Default | Description                                    |
| ------------ | -------------------- | -------- | ------- | ---------------------------------------------- |
| title        | string               | ✅       | -       | The accordion title text                       |
| children     | React.ReactNode      | ✅       | -       | The content displayed when the accordion opens |
| style        | StyleProp<ViewStyle> | ❌       | -       | Style for the main container                   |
| titleStyle   | StyleProp<ViewStyle> | ❌       | -       | Style for the title container                  |
| contentStyle | StyleProp<ViewStyle> | ❌       | -       | Style for the content container                |

## Usage

```tsx
import React from "react";
import { View, Text } from "react-native";
import { ListAccordion } from "@mainamiru/react-native-ui-kit";

export default function App() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <ListAccordion title="Click to Expand">
        <Text>This is the dynamic content of the accordion.</Text>
        <Text>Children height is measured using ScrollView.</Text>
        <View style={{ backgroundColor: "#eee", marginTop: 10, padding: 10 }}>
          <Text>Additional nested content</Text>
        </View>
      </ListAccordion>
    </View>
  );
}
```
