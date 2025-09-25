# Switch Component

A customizable and animated toggle switch for React Native with support for controlled/uncontrolled usage, sizes, colors, and accessibility.

## Props

| Name               | Type                       | Required | Default   | Description                     |
| ------------------ | -------------------------- | -------- | --------- | ------------------------------- |
| value              | boolean                    | ❌       | -         | Controlled state for the switch |
| defaultValue       | boolean                    | ❌       | false     | Initial state when uncontrolled |
| onValueChange      | (next: boolean) => void    | ❌       | -         | Callback when value changes     |
| disabled           | boolean                    | ❌       | false     | Disables interaction            |
| size               | `"sm"` \| `"md"` \| `"lg"` | ❌       | "md"      | Size variant for the switch     |
| thumbColor         | string                     | ❌       | "#FFFFFF" | Color of the thumb              |
| style              | ViewStyle                  | ❌       | -         | Additional container styles     |
| accessibilityLabel | string                     | ❌       | "Toggle"  | Accessibility label             |
| testID             | string                     | ❌       | -         | Test identifier                 |
| activeTrackColor   | string                     | ❌       | "green"   | Track color when active         |
| inactiveTrackColor | string                     | ❌       | "grey"    | Track color when inactive       |

## Ref Methods

| Method   | Description                             |
| -------- | --------------------------------------- |
| toggle   | Programmatically toggles the switch     |
| setValue | Sets the value programmatically         |
| getValue | Returns the current value of the switch |

## Usage

```tsx
import React, { useRef } from "react";
import { Switch, SwitchRef } from "@mainamiru/react-native-ui-kit";
import { View, Text } from "react-native";

export default function App() {
  const switchRef = useRef<SwitchRef>(null);

  return (
    <View style={{ padding: 20 }}>
      <Text>Notifications</Text>
      <Switch
        ref={switchRef}
        defaultValue={true}
        onValueChange={(val) => console.log("Toggled:", val)}
        size="md"
        activeTrackColor="#4ade80"
        inactiveTrackColor="#d1d5db"
      />
    </View>
  );
}
```
