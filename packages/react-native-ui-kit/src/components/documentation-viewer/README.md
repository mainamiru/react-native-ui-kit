# DocumentationViewer Component

A fully customizable component for displaying documentation inside a React Native app.  
It supports title, description, usage, example code, and props table with flexibility.

## Props

| Name             | Type                                                                                        | Required | Default | Description                                 |
| ---------------- | ------------------------------------------------------------------------------------------- | -------- | ------- | ------------------------------------------- |
| title            | string                                                                                      | ✅       | -       | Title of the documentation.                 |
| description      | string                                                                                      | ❌       | -       | Short description of the component.         |
| usage            | string                                                                                      | ❌       | -       | Example usage instructions.                 |
| exampleCode      | string                                                                                      | ❌       | -       | Code example to display.                    |
| props            | Record<string, { type: string; required?: boolean; default?: string; description: string }> | ❌       | -       | Props table with details for each property. |
| style            | StyleProp<ViewStyle>                                                                        | ❌       | -       | Custom style for container.                 |
| titleStyle       | StyleProp<TextStyle>                                                                        | ❌       | -       | Custom style for the title text.            |
| descriptionStyle | StyleProp<TextStyle>                                                                        | ❌       | -       | Custom style for description.               |
| codeStyle        | StyleProp<TextStyle>                                                                        | ❌       | -       | Custom style for code blocks.               |

## Usage

```tsx
import React from "react";
import { DocumentationViewer } from "@mainamiru/react-native-ui-kit";

export default function DocsScreen() {
  return (
    <DocumentationViewer
      title="Button Component"
      description="A customizable button for React Native."
      usage={`import { Button } from "@mainamiru/react-native-ui-kit";`}
      exampleCode={`<Button label="Click Me" onPress={() => alert("Pressed!")} />`}
      props={{
        label: {
          type: "string",
          required: true,
          description: "Text displayed inside the button.",
        },
        onPress: {
          type: "() => void",
          required: true,
          description: "Callback when the button is pressed.",
        },
        disabled: {
          type: "boolean",
          required: false,
          default: "false",
          description: "Disables the button when true.",
        },
      }}
    />
  );
}
```
