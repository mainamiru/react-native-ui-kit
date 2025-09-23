# Container Component

The `Container` component is a flexible layout wrapper for React Native applications.  
It provides three main states:

1. **Default State** – Displays children inside a styled container.
2. **Loading State** – Shows a centered loading indicator, hiding children.
3. **Processing State** – Displays children, while also overlaying a modal with a spinner (useful for API calls, form submissions, etc.).

This ensures consistent UI patterns when handling asynchronous operations.

---

## Props

| Name           | Type                   | Required | Default | Description                                                               |
| -------------- | ---------------------- | -------- | ------- | ------------------------------------------------------------------------- |
| children       | `React.ReactNode`      | ❌       | -       | Elements to render inside the container.                                  |
| isLoading      | `boolean`              | ❌       | `false` | If true, replaces children with a loading indicator.                      |
| isProcessing   | `boolean`              | ❌       | `false` | If true, overlays a modal with a spinner on top of children.              |
| indicatorColor | `string`               | ❌       | -       | Color of the loading spinner.                                             |
| indicatorSize  | `number`               | ❌       | -       | Size of the loading spinner.                                              |
| style          | `StyleProp<ViewStyle>` | ❌       | -       | Custom styles for the container.                                          |
| onRequestClose | `() => void`           | ❌       | -       | Callback triggered when the modal should be closed (Android back button). |

---

## Usage

```tsx
import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import { Container } from "@mainamiru/react-native-ui-kit";

export default function App() {
  const [loading, setLoading] = useState(false);
  const [processing, setProcessing] = useState(false);

  return (
    <Container
      isLoading={loading}
      isProcessing={processing}
      indicatorColor="#007AFF"
      indicatorSize={40}
      onRequestClose={() => setProcessing(false)}
    >
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Hello World</Text>
        <Button title="Toggle Loading" onPress={() => setLoading(!loading)} />
        <Button
          title="Toggle Processing"
          onPress={() => setProcessing(!processing)}
        />
      </View>
    </Container>
  );
}
```
