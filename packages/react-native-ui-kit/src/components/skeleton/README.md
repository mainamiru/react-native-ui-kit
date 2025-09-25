# Skeleton Component

A lightweight React Native Skeleton placeholder component with shimmer effect, used to indicate loading content.

## Props

| Name         | Type                 | Required | Default | Description                                 |
| ------------ | -------------------- | -------- | ------- | ------------------------------------------- |
| width        | number \| string     | ❌       | "100%"  | Width of the skeleton placeholder           |
| height       | number               | ❌       | 16      | Height of the skeleton placeholder          |
| borderRadius | number               | ❌       | 8       | Border radius for rounded corners           |
| style        | StyleProp<ViewStyle> | ❌       | -       | Additional styles to customize the skeleton |

## Usage

```tsx
import React from "react";
import { View, Text } from "react-native";
import { Skeleton } from "@mainamiru/react-native-ui-kit";

export default function App() {
  const loading = true;

  return (
    <View style={{ padding: 16 }}>
      {loading ? (
        <Skeleton width="80%" height={20} borderRadius={12} />
      ) : (
        <Text>Loaded Content</Text>
      )}
      <Skeleton
        width="100%"
        height={150}
        borderRadius={16}
        style={{ marginTop: 16 }}
      />
    </View>
  );
}
```
