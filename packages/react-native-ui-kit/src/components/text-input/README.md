# TextInput Component

A customizable and accessible text input component for React Native, supporting labels, helper text, validation, animated focus outline, and optional left/right icons.

## Props

| Name                | Type                                                           | Required | Default      | Description                                                   |
| ------------------- | -------------------------------------------------------------- | -------- | ------------ | ------------------------------------------------------------- |
| label               | `string \| null`                                               | ❌       | -            | Label displayed above the input                               |
| helperText          | `string`                                                       | ❌       | -            | Helper text shown below the input                             |
| style               | `StyleProp<ViewStyle>`                                         | ❌       | -            | Wrapper style                                                 |
| containerStyle      | `StyleProp<ViewStyle>`                                         | ❌       | -            | Input container style                                         |
| inputStyle          | `StyleProp<TextStyle>`                                         | ❌       | -            | Style for the input field                                     |
| labelStyle          | `StyleProp<TextStyle>`                                         | ❌       | -            | Style for the label text                                      |
| focusedOutlineColor | `string`                                                       | ❌       | `"orange"`   | Border color when focused                                     |
| mode                | `"outlined"` \| `"underline"`                                  | ❌       | `"outlined"` | Input border style                                            |
| validate            | `(text: string) => Error \| null`                              | ❌       | -            | Function to validate input, returns `Error` object if invalid |
| left                | `(props: { color: string; style: ViewStyle }) => ReactElement` | ❌       | -            | Function to render a left icon/component                      |
| right               | `(props: { color: string; style: ViewStyle }) => ReactElement` | ❌       | -            | Function to render a right icon/component                     |
| ...props            | `TextInputProps (React Native)`                                | ❌       | -            | All native `TextInput` props are supported                    |

## Features

- Animated outline or underline on focus/blur.
- Supports validation with error messages.
- Optional left and right adornments (icons, buttons).
- Works with `ref` (e.g., `focus`, `clear`).

## Usage

```tsx
import React, { useRef } from "react";
import { View, Button } from "react-native";
import { TextInput } from "@mainamiru/react-native-ui-kit";

export default function App() {
  const inputRef = useRef<any>(null);

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        ref={inputRef}
        label="Email"
        placeholder="Enter your email"
        helperText="We'll never share your email."
        validate={(text) =>
          !text.includes("@") ? new Error("Invalid email address") : null
        }
        left={({ color, style }) => (
          <View style={style}>{/* Example left icon */}</View>
        )}
      />

      <Button title="Focus Input" onPress={() => inputRef.current?.focus()} />
    </View>
  );
}
```
