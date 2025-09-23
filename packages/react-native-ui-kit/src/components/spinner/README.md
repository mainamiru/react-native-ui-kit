# Spinner Component

A reusable scrollable spinner for React Native.  
It can be used for **dates, months, time, or any list of items** with snapping and ripple effect.

## Props

| Name         | Type                                | Required   | Default | Description                                     |
| ------------ | ----------------------------------- | ---------- | ------- | ----------------------------------------------- | -------------------------- |
| data         | `(string                            | number)[]` | ✅      | -                                               | Array of items to display. |
| initialIndex | `number`                            | ❌         | `0`     | The initially selected index.                   |
| onChange     | `(value: string \| number) => void` | ❌         | -       | Callback when the selected value changes.       |
| style        | `StyleProp<ViewStyle>`              | ❌         | -       | Custom container styles.                        |
| itemHeight   | `number`                            | ❌         | `50`    | Height of each item.                            |
| visibleItems | `number`                            | ❌         | `3`     | Number of items visible in the spinner at once. |

## Usage

### Single Spinner (Years)

```tsx
import React, { useState } from "react";
import { View, Text } from "react-native";
import { Spinner } from "@mainamiru/react-native-ui-kit";

export default function App() {
  const [year, setYear] = useState<number | null>(null);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Spinner
        data={Array.from({ length: 21 }, (_, i) => 2010 + i)}
        initialIndex={5}
        onChange={(val) => setYear(val)}
      />
      <Text style={{ marginTop: 20 }}>Selected Year: {year}</Text>
    </View>
  );
}
```
