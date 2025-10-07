# Toaster Component

An elegant and lightweight toast notification system for React Native with swipe-to-dismiss and auto-expire behavior.

## Features

- ✅ Multiple positions (top/bottom, left/center/right)
- ✅ Smooth animations
- ✅ Swipe-to-dismiss gesture
- ✅ Pause/resume timer on touch
- ✅ Context API hook `useToaster()` for easy usage

## Props (via Context)

| Name    | Type                                                                    | Required | Default | Description                                  |
| ------- | ----------------------------------------------------------------------- | -------- | ------- | -------------------------------------------- |
| show    | `(message: string, type?: ToastType, options?: ToasterOptions) => void` | ✅       | -       | Show a toast with optional type and options. |
| success | `(message: string, options?: ToasterOptions) => void`                   | ❌       | -       | Show a success toast.                        |
| error   | `(message: string, options?: ToasterOptions) => void`                   | ❌       | -       | Show an error toast.                         |
| warn    | `(message: string, options?: ToasterOptions) => void`                   | ❌       | -       | Show a warning toast.                        |
| info    | `(message: string, options?: ToasterOptions) => void`                   | ❌       | -       | Show an info toast.                          |

### `ToasterOptions`

| Name     | Type                                                                                              | Default           | Description                    |
| -------- | ------------------------------------------------------------------------------------------------- | ----------------- | ------------------------------ |
| position | `"top-left" \| "top-center" \| "top-right" \| "bottom-left" \| "bottom-center" \| "bottom-right"` | `"bottom-center"` | Where the toast should appear. |
| duration | `number`                                                                                          | `3000`            | Time (ms) before auto-dismiss. |

## Usage

```tsx
import React from "react";
import { View, Button } from "react-native";
import { Toaster, useToaster } from "@mainamiru/react-native-ui-kit";

const ToastExample = () => {
  const toaster = useToaster();

  return (
    <View style={{ padding: 20 }}>
      <Button
        title="Show Success"
        onPress={() => toaster.success("Saved successfully!")}
      />
      <Button
        title="Show Error"
        onPress={() => toaster.error("Something went wrong.")}
      />
      <Button
        title="Show Info"
        onPress={() => toaster.info("New updates available.")}
      />
    </View>
  );
};

export default function App() {
  return (
    <Toaster>
      <ToastExample />
    </Toaster>
  );
}
```
