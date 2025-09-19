# Spacer Component

A lightweight spacer component for React Native, useful for adding consistent vertical or horizontal spacing between elements.

## Props

| Name       | Type    | Required | Default | Description                             |
| ---------- | ------- | -------- | ------- | --------------------------------------- |
| size       | number  | ❌       | 8       | The spacing size in pixels              |
| horizontal | boolean | ❌       | false   | If `true`, applies spacing horizontally |

## Usage

```tsx
import { Spacer } from "@mainamiru/react-native-ui-kit";

export default function App() {
  return (
    <>
      <Spacer size={16} />
      <Spacer size={12} horizontal />
    </>
  );
}
```
