# Surface Component

A flexible React Native component that provides both **flat** and **elevated** surfaces — ideal for creating Material Design–like containers and cards.

## Props

| Name            | Type                   | Required | Default  | Description                                       |
| --------------- | ---------------------- | -------- | -------- | ------------------------------------------------- |
| mode            | `"flat" \| "elevated"` | ❌       | `"flat"` | Determines whether the surface is flat or raised. |
| backgroundColor | `ColorValue`           | ❌       | `"#fff"` | Background color of the surface.                  |
| style           | `StyleProp<ViewStyle>` | ❌       | -        | Custom style overrides.                           |
| children        | `React.ReactNode`      | ❌       | -        | Elements to render inside the surface.            |

## Usage

```tsx
import React from "react";
import { View, Text } from "react-native";
import { Surface, Row } from "@mainamiru/react-native-ui-kit";

export default function App() {
  return (
    <Row style={{ padding: 10, gap: 10 }}>
      <Surface mode="flat" style={{ height: 100, aspectRatio: 1 }}>
        <Text>Flat Surface</Text>
      </Surface>

      <Surface
        mode="elevated"
        style={{
          height: 100,
          aspectRatio: 1,
        }}
      >
        <Text>Elevated Surface</Text>
      </Surface>
    </Row>
  );
}
```
