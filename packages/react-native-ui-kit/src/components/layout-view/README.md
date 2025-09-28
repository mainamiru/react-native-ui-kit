# Layout Component

`Layout` is a responsive layout system for React Native that adapts UI content to different screen sizes.  
It uses a **compound component pattern** with subcomponents for small, medium, large, and extra-large layouts.

The system leverages a context provider (`LayoutBaseView`) to detect the container width and automatically set the current `LayoutMode` (`sm | md | lg | xlg`).

---

## Props (`Layout` / `LayoutBaseView`)

| Name     | Type                 | Required | Default | Description                                          |
| -------- | -------------------- | -------- | ------- | ---------------------------------------------------- |
| children | React.ReactNode      | ✅       | -       | Content to render inside the layout                  |
| style    | StyleProp<ViewStyle> | ❌       | -       | Custom style for the base container                  |
| modes    | LayoutMode[]         | ❌       | -       | Restrict this BaseView to render only on these modes |

---

## Subcomponents

| Subcomponent        | Description                                             |
| ------------------- | ------------------------------------------------------- |
| `Layout.View`       | Always visible container or restricted by `modes` prop  |
| `Layout.SmallView`  | Renders content only on **small screens** (`sm`)        |
| `Layout.MediumView` | Renders content only on **medium screens** (`md`)       |
| `Layout.LargeView`  | Renders content only on **large screens** (`lg`)        |
| `Layout.XLargeView` | Renders content only on **extra-large screens** (`xlg`) |

---

## Usage

```tsx
import React from "react";
import { Text } from "react-native";
import { Layout } from "@mainamiru/react-native-ui-kit";

export default function App() {
  return (
    <Layout style={{ flex: 1 }}>
      <Layout.View>
        <Text>Always visible content</Text>
      </Layout.View>

      <Layout.View modes={["sm", "md"]} style={{ padding: 16 }}>
        <Layout.SmallView>
          <Text>Small screen content inside restricted BaseView</Text>
        </Layout.SmallView>
        <Layout.MediumView>
          <Text>Medium screen content inside restricted BaseView</Text>
        </Layout.MediumView>
      </Layout.View>

      <Layout.LargeView>
        <Text>Large screen content outside restricted BaseView</Text>
      </Layout.LargeView>
    </Layout>
  );
}
```
