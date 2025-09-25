# Tooltip Component

A customizable Tooltip component for React Native that shows extra information when pressing a wrapped element.

## Props

| Name            | Type                         | Required | Default | Description                                             |
| --------------- | ---------------------------- | -------- | ------- | ------------------------------------------------------- |
| children        | `React.ReactNode`            | ✅       | -       | The element that triggers the tooltip                   |
| text            | `string`                     | ✅       | -       | The text displayed inside the tooltip                   |
| textStyle       | `StyleProp<TextStyle>`       | ❌       | -       | Custom styles for the tooltip text                      |
| tooltipStyle    | `StyleProp<ViewStyle>`       | ❌       | -       | Custom styles for the tooltip container                 |
| placement       | `"top"` \| `"bottom"`        | ❌       | `"top"` | Position of the tooltip relative to the trigger element |
| visible         | `boolean`                    | ❌       | -       | Controls tooltip visibility (for controlled usage)      |
| onVisibleChange | `(visible: boolean) => void` | ❌       | -       | Callback fired when tooltip visibility changes          |

## Usage

```tsx
import React from "react";
import { View, Text } from "react-native";
import { Tooltip } from "@mainamiru/react-native-ui-kit";

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Tooltip text="This is a helpful tooltip!" placement="bottom">
        <Text style={{ fontSize: 18, padding: 10 }}>Press me</Text>
      </Tooltip>
    </View>
  );
}
```
