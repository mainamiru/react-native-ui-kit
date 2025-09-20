# BottomSheet Component

A customizable bottom sheet modal for React Native with smooth open/close animations and backdrop support.

## Props

| Name                   | Type                   | Required | Default | Description                                  |
| ---------------------- | ---------------------- | -------- | ------- | -------------------------------------------- |
| `open`                 | `boolean`              | ❌       | -       | Control sheet visibility externally.         |
| `onOpen`               | `() => void`           | ❌       | -       | Callback when sheet is opened.               |
| `onClose`              | `() => void`           | ❌       | -       | Callback when sheet is closed.               |
| `backdropOpacity`      | `number`               | ❌       | `0.3`   | Backdrop dim opacity (0–1).                  |
| `children`             | `React.ReactNode`      | ✅       | -       | Content inside the sheet.                    |
| `statusBarTranslucent` | `boolean`              | ❌       | `true`  | Pass through to `Modal` for Android.         |
| `contentStyle`         | `StyleProp<ViewStyle>` | ❌       | -       | Custom style for the bottom sheet container. |

## Ref Methods

You can control the sheet using a ref:

- `open()`: Opens the bottom sheet.
- `close()`: Closes the bottom sheet.

## Usage

```tsx
import React, { useRef } from "react";
import { View, Text, Button } from "react-native";
import { BottomSheet, BottomSheetRef } from "@mainamiru/react-native-ui-kit";

export default function App() {
  const sheetRef = useRef<BottomSheetRef>(null);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button
        title="Open Bottom Sheet"
        onPress={() => sheetRef.current?.open()}
      />

      <BottomSheet ref={sheetRef} onClose={() => console.log("Closed!")}>
        <View style={{ padding: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: "600" }}>
            Hello Bottom Sheet!
          </Text>
          <Button title="Close" onPress={() => sheetRef.current?.close()} />
        </View>
      </BottomSheet>
    </View>
  );
}
```
