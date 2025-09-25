# Icon Component

A wrapper around **EvilIcons** exposing ~70 mapped subcomponents (e.g., `Icon.ChevronLeft`, `Icon.Heart`).  
This avoids memorizing string names and gives autocompletion.

## Props

| Name  | Type   | Required | Default | Description                 |
| ----- | ------ | -------- | ------- | --------------------------- |
| size  | number | ❌       | 24      | Icon size                   |
| color | string | ❌       | "#000"  | Icon color                  |
| style | object | ❌       | -       | Additional text style props |

## Usage

```tsx
import React from "react";
import { View } from "react-native";
import { Icon } from "@mainamiru/react-native-ui-kit";

export default function App() {
  return (
    <View style={{ flexDirection: "row", gap: 16 }}>
      <Icon.ChevronLeft size={32} color="black" />
      <Icon.Search size={28} color="blue" />
      <Icon.Heart size={28} color="red" />
    </View>
  );
}
```
