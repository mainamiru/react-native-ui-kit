# RadioButton Component

A customizable RadioButton component for React Native that displays a label and selection indicator.

## Props

| Name           | Type                 | Required | Default | Description                           |
| -------------- | -------------------- | -------- | ------- | ------------------------------------- |
| label          | string               | ✅       | -       | Text to display next to the radio     |
| selected       | boolean              | ✅       | -       | Whether the radio is selected         |
| onPress        | () => void           | ✅       | -       | Callback when radio button is pressed |
| containerStyle | StyleProp<ViewStyle> | ❌       | -       | Custom style for container            |
| labelStyle     | StyleProp<TextStyle> | ❌       | -       | Custom style for label text           |

## Usage

```tsx
import React, { useState } from "react";
import { View } from "react-native";
import { RadioButton } from "@mainamiru/react-native-ui-kit";

export default function App() {
  const [selected, setSelected] = useState("option1");

  return (
    <View style={{ padding: 20 }}>
      <RadioButton
        label="Option 1"
        selected={selected === "option1"}
        onPress={() => setSelected("option1")}
      />
      <RadioButton
        label="Option 2"
        selected={selected === "option2"}
        onPress={() => setSelected("option2")}
      />
    </View>
  );
}
```
