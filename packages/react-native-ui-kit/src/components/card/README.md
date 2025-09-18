# Card Component

A compound Card component for React Native with subcomponents for structured usage.  
Provides default padding and styles for content areas.

## Subcomponents

### `Card.Image`

Displays an image at the top of the card.

| Prop   | Type                            | Required | Default | Description                         |
| ------ | ------------------------------- | -------- | ------- | ----------------------------------- |
| source | `string \| ImageSourcePropType` | ✅       | -       | Image source (URL or local require) |
| style  | `StyleProp<ImageStyle>`         | ❌       | -       | Custom style for the image          |
| alt    | `string`                        | ❌       | -       | Accessibility label                 |

---

### `Card.Content`

Wrapper with default padding. Place titles, descriptions, or custom children inside.

| Prop     | Type                   | Required | Default | Description            |
| -------- | ---------------------- | -------- | ------- | ---------------------- |
| style    | `StyleProp<ViewStyle>` | ❌       | -       | Custom container style |
| children | `React.ReactNode`      | ✅       | -       | Content to render      |

---

### `Card.Title`

Styled title text.

| Prop     | Type                   | Required | Default | Description         |
| -------- | ---------------------- | -------- | ------- | ------------------- |
| children | `string`               | ✅       | -       | Title text          |
| style    | `StyleProp<TextStyle>` | ❌       | -       | Override text style |

---

### `Card.Description`

Styled description text.

| Prop     | Type                   | Required | Default | Description         |
| -------- | ---------------------- | -------- | ------- | ------------------- |
| children | `string`               | ✅       | -       | Description text    |
| style    | `StyleProp<TextStyle>` | ❌       | -       | Override text style |

---

## Usage

```tsx
import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { Card } from "@mainamiru/react-native-ui-kit";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <Card>
          <Card.Image
            source="https://via.placeholder.com/800x400.png"
            alt="Sample"
          />
          <Card.Content>
            <Card.Title>Mountain Escape</Card.Title>
            <Card.Description>
              Enjoy a quiet weekend in a cozy cabin with breathtaking views.
            </Card.Description>
          </Card.Content>
        </Card>

        <Card>
          <Card.Content>
            <Card.Title>Simple Card</Card.Title>
            <Card.Description>
              You can also use it without an image.
            </Card.Description>
          </Card.Content>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}
```
