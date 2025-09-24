# Button Component

A flexible and customizable button for React Native with support for different modes (`contained`, `outlined`, `text`), loading state, and optional icons.

## Props

| Name           | Type                                             | Required | Default   | Description                                                  |
| -------------- | ------------------------------------------------ | -------- | --------- | ------------------------------------------------------------ |
| children       | `string`                                         | ✅       | -         | The button label text.                                       |
| textColor      | `string`                                         | ❌       | Auto      | Custom text color. Defaults based on button `mode`.          |
| loading        | `boolean`                                        | ❌       | `false`   | Shows a loading spinner instead of text/icon.                |
| mode           | `"contained"` \| `"outlined"` \| `"text"`        | ❌       | `"text"`  | Defines the visual style of the button.                      |
| buttonColor    | `string`                                         | ❌       | `#645ff5` | Background color for contained button / border for outlined. |
| style          | `StyleProp<ViewStyle>`                           | ❌       | -         | Custom style for the button container.                       |
| containerStyle | `StyleProp<ViewStyle>`                           | ❌       | -         | Style for the inner content container (text + icon).         |
| textStyle      | `StyleProp<TextStyle>`                           | ❌       | -         | Custom style for the button text.                            |
| icon           | `(props: { size: number; color: string }) => JSX | ❌       | -         | Function that returns an icon to render inside the button.   |
| disabled       | `boolean`                                        | ❌       | `false`   | Disables interaction and reduces opacity.                    |

## Usage

```tsx
import React from "react";
import { Button } from "@mainamiru/react-native-ui-kit";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function App() {
  return (
    <View style={{ padding: 20 }}>
      <Button mode="contained">Contained</Button>

      <Button mode="outlined" buttonColor="#ff6347">
        Outlined
      </Button>

      <Button mode="text" textColor="#008080">
        Text Only
      </Button>

      <Button mode="contained" loading>
        Loading
      </Button>

      <Button
        mode="contained"
        icon={({ size, color }) => (
          <Ionicons name="add" size={size} color={color} />
        )}
      >
        With Icon
      </Button>
    </View>
  );
}
```
