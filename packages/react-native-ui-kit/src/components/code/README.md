# Code Component

A **syntax-highlighted code block** component for React Native with built-in **copy-to-clipboard** support.  
Useful for displaying code snippets in your app (like docs, tutorials, or developer tools).

## Props

| Name            | Type   | Required | Default   | Description                                 |
| --------------- | ------ | -------- | --------- | ------------------------------------------- |
| code            | string | ✅       | -         | The code string to display.                 |
| textColor       | string | ❌       | `#d4d4d4` | The default text color for the code.        |
| backgroundColor | string | ❌       | `#1e1e1e` | The background color of the code container. |

### Features

- Highlights **keywords, strings, numbers, and comments**.
- Horizontal scrolling for long lines of code.
- **Copy button** with visual feedback (`Copied!`).

## Usage

```tsx
import React from "react";
import { Code } from "@mainamiru/react-native-ui-kit";

export default function App() {
  return (
    <Code
      code={`const greet = (name: string) => {
  return "Hello, " + name;
};`}
      textColor="#d4d4d4"
      backgroundColor="#1e1e1e"
    />
  );
}
```
