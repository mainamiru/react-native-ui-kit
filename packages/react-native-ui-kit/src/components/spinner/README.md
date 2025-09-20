# Spinner Component (iOS-style)

An iOS-like animated spinner using `Animated.View`. It creates a segmented circular loading indicator similar to the iOS `UIActivityIndicator`.

## Props

| Name  | Type   | Required | Default | Description                           |
| ----- | ------ | -------- | ------- | ------------------------------------- |
| size  | number | ❌       | 40      | The diameter of the spinner in pixels |
| color | string | ❌       | "#333"  | The color of the spinner bars         |

## Usage

```tsx
import { Spinner } from "@mainamiru/react-native-ui-kit";

export default function App() {
  return <Spinner size={50} color="#007bff" />;
}
```
