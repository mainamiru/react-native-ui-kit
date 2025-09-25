# TouchRipple Component

A `Pressable` wrapper with a ripple-like hover/press feedback effect using React Native’s `Animated` API.

## Props

| Name              | Type                                                                                                | Required | Default | Description                                                           |
| ----------------- | --------------------------------------------------------------------------------------------------- | -------- | ------- | --------------------------------------------------------------------- |
| children          | `React.ReactNode`                                                                                   | ❌       | -       | The content to render inside the pressable.                           |
| useNativeDriver   | `boolean`                                                                                           | ❌       | `false` | Whether to use native driver for animations.                          |
| hoverStyle        | `(animatedValue: Animated.Value) => Animated.WithAnimatedObject<ViewStyle> \| StyleProp<ViewStyle>` | ❌       | -       | Custom hover/press style function, receives animated value.           |
| ...PressableProps | Inherits all `Pressable` props                                                                      | ❌       | -       | Supports all standard `Pressable` props like `onPress`, `style`, etc. |

## Usage

```tsx
import React from "react";
import { Text } from "react-native";
import { TouchRipple } from "@mainamiru/react-native-ui-kit";

export default function App() {
  return (
    <TouchRipple
      style={{
        padding: 16,
        borderRadius: 8,
        backgroundColor: "#f5f5f5",
        alignItems: "center",
      }}
      onPress={() => console.log("Pressed!")}
    >
      <Text>Click Me</Text>
    </TouchRipple>
  );
}
```
