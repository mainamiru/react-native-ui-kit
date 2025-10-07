# ProgressBar Component

An animated progress bar for React Native that smoothly transitions between progress states.

## Props

| Name              | Type                 | Required | Default   | Description                                |
| ----------------- | -------------------- | -------- | --------- | ------------------------------------------ |
| progress          | number (0–1)         | ✅       | -         | The current progress value between 0 and 1 |
| height            | number               | ❌       | 10        | Height of the progress bar                 |
| backgroundColor   | string               | ❌       | "#e0e0e0" | Background color of the track              |
| fillColor         | string               | ❌       | "#3b82f6" | Color of the filled bar                    |
| borderRadius      | number               | ❌       | 8         | Rounded corners for bar                    |
| style             | StyleProp<ViewStyle> | ❌       | -         | Custom container style                     |
| animated          | boolean              | ❌       | true      | Enable or disable animation                |
| animationDuration | number               | ❌       | 500       | Duration of animation in milliseconds      |

## Usage

```tsx
import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { ProgressBar } from "@mainamiru/react-native-ui-kit";

export default function App() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 1 ? prev + 0.1 : 0));
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={{ padding: 20 }}>
      <ProgressBar progress={progress} height={12} fillColor="#22c55e" />
    </View>
  );
}
```
