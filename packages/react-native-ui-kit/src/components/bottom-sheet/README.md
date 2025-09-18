# BottomSheet Component

A customizable bottom sheet component for React Native with **dynamic height**, **ref control**, and swipe-to-close support.

## Props

| Name            | Type                 | Required | Default       | Description                                     |
| --------------- | -------------------- | -------- | ------------- | ----------------------------------------------- |
| visible         | boolean              | ❌       | `false`       | Controls initial visibility of the bottom sheet |
| onClose         | () => void           | ❌       | -             | Callback when the sheet is closed               |
| height          | number               | ❌       | 50% of screen | Custom height for the bottom sheet              |
| style           | StyleProp<ViewStyle> | ❌       | -             | Additional custom styles for the sheet          |
| backgroundColor | string               | ❌       | `"#fff"`      | Background color of the sheet                   |
| children        | React.ReactNode      | ✅       | -             | Content inside the bottom sheet                 |

## Ref Methods

The component supports ref with the following methods:

| Method   | Description                  |
| -------- | ---------------------------- |
| open()   | Opens the bottom sheet       |
| close()  | Closes the bottom sheet      |
| toggle() | Toggles the sheet open/close |

## Usage

```tsx
import React, { useRef } from "react";
import { View, Button, Text } from "react-native";
import { BottomSheet, BottomSheetRef } from "@mainamiru/react-native-ui-kit";

export default function App() {
  const sheetRef = useRef<BottomSheetRef>(null);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button title="Open via Ref" onPress={() => sheetRef.current?.open()} />
      <Button title="Close via Ref" onPress={() => sheetRef.current?.close()} />
      <Button
        title="Toggle via Ref"
        onPress={() => sheetRef.current?.toggle()}
      />

      <BottomSheet ref={sheetRef} height={300}>
        <Text style={{ fontSize: 18, fontWeight: "600" }}>Hello 👋</Text>
        <Text>This BottomSheet supports ref methods.</Text>
      </BottomSheet>
    </View>
  );
}
```
