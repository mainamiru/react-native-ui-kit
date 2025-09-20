# Divider Component

A simple horizontal divider for React Native apps. Can be customized for thickness, color, and margin.

## Props

| Name      | Type                 | Required | Default   | Description                     |
| --------- | -------------------- | -------- | --------- | ------------------------------- |
| thickness | number               | ❌       | 1         | Height of the divider line      |
| color     | string               | ❌       | "#e0e0e0" | Color of the divider line       |
| margin    | number               | ❌       | 8         | Vertical margin around the line |
| style     | StyleProp<ViewStyle> | ❌       | -         | Additional custom styles        |

## Usage

```tsx
import { Divider } from "@mainamiru/react-native-ui-kit";

export default function App() {
  return (
    <>
      <Text>Section 1</Text>
      <Divider />
      <Text>Section 2</Text>
      <Divider thickness={2} color="#000" margin={16} />
      <Text>Section 3</Text>
    </>
  );
}
```
