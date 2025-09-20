# Badge Component

A simple badge component for React Native that displays text or custom children inside a pill-shaped container. Useful for status indicators, counts, or tags.

## Props

| Name            | Type                 | Required | Default   | Description                                    |
| --------------- | -------------------- | -------- | --------- | ---------------------------------------------- |
| children        | ReactNode            | ✅       | -         | The content to display inside the badge        |
| color           | string               | ❌       | `#fff`    | The text color                                 |
| backgroundColor | string               | ❌       | `#007AFF` | The background color of the badge              |
| style           | StyleProp<ViewStyle> | ❌       | -         | Custom style overrides for the badge container |

## Usage

```tsx
import { Badge } from "@mainamiru/react-native-ui-kit";

export default function App() {
  return (
    <>
      <Badge>New</Badge>
      <Badge backgroundColor="#34C759">Active</Badge>
      <Badge backgroundColor="#FF3B30" color="#fff">
        99+
      </Badge>
    </>
  );
}
```
