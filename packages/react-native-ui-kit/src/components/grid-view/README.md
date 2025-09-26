# GridView Component

A responsive grid component for React Native that calculates the number of columns and item width dynamically based on container size. It is built on top of `FlatList` and optimized for flexible layouts.

## ✨ Features

- Auto-calculates number of columns with `onLayout`
- Supports `spacing` between items
- Handles container `padding` correctly
- Exposes only safe `FlatList` props
- Each item receives a calculated `size` prop for adaptive rendering

---

## 🔑 Props

| Prop         | Type                                                  | Required | Default | Description                                                               |
| ------------ | ----------------------------------------------------- | -------- | ------- | ------------------------------------------------------------------------- |
| `data`       | `T[]`                                                 | ✅       | —       | The list of items to render.                                              |
| `itemWidth`  | `number`                                              | ✅       | —       | Desired base item width (used to calculate columns & adjust size).        |
| `spacing`    | `number`                                              | ❌       | `0`     | Gap between items (applies to both horizontal & vertical spacing).        |
| `style`      | `StyleProp<ViewStyle>`                                | ❌       | —       | Style for the outer container. Supports `padding` safely.                 |
| `itemStyle`  | `StyleProp<ViewStyle>`                                | ❌       | —       | Style for each item wrapper.                                              |
| `renderItem` | `(props: GridViewItemProps<T>) => React.ReactElement` | ✅       | —       | Function to render each item. Receives an extra `size` prop (calculated). |
| `...rest`    | Remaining safe `FlatListProps<T>`                     | ❌       | —       | Any additional props supported by `FlatList` (e.g., `onEndReached`).      |

---

## 🚀 Usage

```tsx
import { GridView } from "@mainamiru/react-native-ui-kit";
import { Text, View } from "react-native";

const data = Array.from({ length: 12 }, (_, i) => `Item ${i + 1}`);

export default function App() {
  return (
    <GridView
      data={data}
      itemWidth={100}
      spacing={10}
      style={{ padding: 16 }}
      renderItem={({ item, size }) => (
        <View
          style={{
            width: size,
            height: size,
            backgroundColor: "skyblue",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 8,
          }}
        >
          <Text>{item}</Text>
        </View>
      )}
    />
  );
}
```
