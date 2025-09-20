# SearchBar Component

A customizable search bar component for React Native with a clear button.

## Props

| Name            | Type                   | Required | Default     | Description                          |
| --------------- | ---------------------- | -------- | ----------- | ------------------------------------ |
| placeholder     | string                 | ❌       | "Search..." | Placeholder text in the search input |
| value           | string                 | ❌       | -           | Controlled value of the search input |
| onChangeText    | (text: string) => void | ❌       | -           | Callback when text changes           |
| onSubmitEditing | () => void             | ❌       | -           | Callback when search is submitted    |
| style           | StyleProp<ViewStyle>   | ❌       | -           | Custom style for the container       |
| inputStyle      | StyleProp<TextStyle>   | ❌       | -           | Custom style for the TextInput       |
| showClearButton | boolean                | ❌       | true        | Show or hide the clear (×) button    |

## Usage

```tsx
import React, { useRef } from "react";
import { View } from "react-native";
import { SearchBar } from "@mainamiru/react-native-ui-kit";

export default function App() {
  const searchRef = useRef(null);

  return (
    <View style={{ padding: 20 }}>
      <SearchBar
        ref={searchRef}
        placeholder="Search items..."
        onChangeText={(text) => console.log(text)}
        onSubmitEditing={() => console.log("Search submitted")}
      />
    </View>
  );
}
```
