# Checkbox Component

A customizable and animated checkbox component for React Native with support for three states: `checked`, `unchecked`, and `indeterminate`.

## Props

| Name           | Type                                          | Required | Default       | Description                                            |
| -------------- | --------------------------------------------- | -------- | ------------- | ------------------------------------------------------ |
| status         | `"checked" \| "unchecked" \| "indeterminate"` | ❌       | -             | Controlled state of the checkbox.                      |
| defaultStatus  | `"checked" \| "unchecked" \| "indeterminate"` | ❌       | `"unchecked"` | Initial state for uncontrolled mode.                   |
| onChange       | `(next: CheckboxStatus) => void`              | ❌       | -             | Callback fired when the status changes.                |
| disabled       | `boolean`                                     | ❌       | `false`       | Disables interaction when `true`.                      |
| size           | `number`                                      | ❌       | `24`          | Size of the checkbox box.                              |
| color          | `string`                                      | ❌       | `#2563eb`     | Active (checked/indeterminate) color.                  |
| uncheckedColor | `string`                                      | ❌       | `#9ca3af`     | Border color when unchecked.                           |
| style          | `ViewStyle`                                   | ❌       | -             | Custom style for the container.                        |
| label          | `string`                                      | ❌       | -             | Optional label displayed to the right of the checkbox. |
| testID         | `string`                                      | ❌       | -             | Test identifier for end-to-end or unit testing.        |

## Ref Methods

| Method         | Description                                           |
| -------------- | ----------------------------------------------------- |
| `toggle()`     | Cycles between `unchecked → checked → indeterminate`. |
| `setStatus(v)` | Sets the checkbox status programmatically.            |
| `getStatus()`  | Returns the current checkbox status.                  |

## Usage

```tsx
import React, { useRef } from "react";
import { Checkbox, CheckboxRef } from "@mainamiru/react-native-ui-kit";
import { View } from "react-native";

export default function App() {
  const checkboxRef = useRef<CheckboxRef>(null);

  return (
    <View style={{ padding: 20 }}>
      <Checkbox
        label="Accept Terms"
        defaultStatus="unchecked"
        onChange={(status) => console.log("Changed to:", status)}
      />

      <Checkbox
        ref={checkboxRef}
        label="Controlled Example"
        status="checked"
        onChange={(status) => console.log("Controlled status:", status)}
      />
    </View>
  );
}
```
