# Table Component

A lightweight, flexible Table component for React Native with nested subcomponents:
`Table.Header`, `Table.Body`, `Table.Row`, `Table.Title`, and `Table.Cell`.

Use these building blocks to compose accessible table-like layouts in your app.

---

## Props

### Table

| Name     | Type                 | Required | Default | Description                        |
| -------- | -------------------- | -------- | ------- | ---------------------------------- |
| children | ReactNode            | ✅       | -       | Table content (Header, Body, etc.) |
| style    | StyleProp<ViewStyle> | ❌       | -       | Custom container style for table   |

### Table.Header

| Name     | Type                 | Required | Default | Description                   |
| -------- | -------------------- | -------- | ------- | ----------------------------- |
| children | ReactNode            | ✅       | -       | Header rows/content           |
| style    | StyleProp<ViewStyle> | ❌       | -       | Custom header container style |

### Table.Body

| Name     | Type                 | Required | Default | Description                 |
| -------- | -------------------- | -------- | ------- | --------------------------- |
| children | ReactNode            | ✅       | -       | Body rows/content           |
| style    | StyleProp<ViewStyle> | ❌       | -       | Custom body container style |

### Table.Row

| Name     | Type                 | Required | Default | Description                                 |
| -------- | -------------------- | -------- | ------- | ------------------------------------------- |
| children | ReactNode            | ✅       | -       | Row content (Table.Cell or Table.Title)     |
| style    | StyleProp<ViewStyle> | ❌       | -       | Custom row wrapper style (spacing, borders) |

### Table.Title

| Name           | Type                 | Required | Default | Description                        |
| -------------- | -------------------- | -------- | ------- | ---------------------------------- |
| children       | ReactNode            | ✅       | -       | Header cell content (text)         |
| containerStyle | StyleProp<ViewStyle> | ❌       | -       | Style applied to the title wrapper |
| textStyle      | StyleProp<TextStyle> | ❌       | -       | Text style for the title text      |

### Table.Cell

| Name           | Type                 | Required | Default | Description                       |
| -------------- | -------------------- | -------- | ------- | --------------------------------- |
| children       | ReactNode            | ✅       | -       | Cell content (text or components) |
| containerStyle | StyleProp<ViewStyle> | ❌       | -       | Style applied to the cell wrapper |
| textStyle      | StyleProp<TextStyle> | ❌       | -       | Text style for the cell text      |

---

## Usage

```tsx
import React from "react";
import { Table } from "@mainamiru/react-native-ui-kit";

export default function App() {
  return (
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.Title>Name</Table.Title>
          <Table.Title>Age</Table.Title>
          <Table.Title>City</Table.Title>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>John Doe</Table.Cell>
          <Table.Cell>28</Table.Cell>
          <Table.Cell>New York</Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.Cell>Jane Smith</Table.Cell>
          <Table.Cell>34</Table.Cell>
          <Table.Cell>Los Angeles</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
}
```
