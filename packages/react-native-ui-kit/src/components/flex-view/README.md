# FlexView Component

A simple React Native wrapper component that always fills available space (`flex: 1`) and accepts standard `View` props and styles.

## Props

| Name     | Type                 | Required | Default | Description                                     |
| -------- | -------------------- | -------- | ------- | ----------------------------------------------- |
| children | React.ReactNode      | ❌       | -       | The content inside the FlexView.                |
| style    | StyleProp<ViewStyle> | ❌       | -       | Optional custom styles, merged with `flex: 1`.  |
| ...props | ViewProps            | ❌       | -       | Any other standard View props (e.g., `testID`). |

## Usage

```tsx
import React from "react";
import { Text } from "react-native";
import { FlexView } from "@mainamiru/react-native-ui-kit";

export default function App() {
  return (
    <FlexView
      style={{
        padding: 16,
        backgroundColor: "#f0f0f0",
      }}
    >
      <Text>Hello, this is inside a FlexView!</Text>
    </FlexView>
  );
}
```
