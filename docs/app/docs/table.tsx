import { DocsViewer } from "@/components";
import { Table } from "@mainamiru/react-native-ui-kit";
import React from "react";
import { View } from "react-native";

const TableDocsScreen = () => (
  <DocsViewer
    title="Table"
    description="A lightweight, composable table layout built from subcomponents such as Table.Header, Table.Body, Table.Row, Table.Title, and Table.Cell."
    usage="Use Table and its subcomponents to present structured data like lists, pricing matrices, or comparison charts. Combine header, body, rows, and cells to build accessible layouts."
    exampleCode={`import React from "react";
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
}`}
    props={{
      Table: {
        type: "{ children: React.ReactNode; style?: StyleProp<ViewStyle> }",
        required: true,
        description:
          "Wraps the table layout and renders Header, Body, and Rows.",
      },
      "Table.Header": {
        type: "{ children: React.ReactNode; style?: StyleProp<ViewStyle> }",
        required: true,
        description:
          "Container for header rows, typically using Table.Row and Table.Title.",
      },
      "Table.Body": {
        type: "{ children: React.ReactNode; style?: StyleProp<ViewStyle> }",
        required: true,
        description: "Container for data rows in the table body.",
      },
      "Table.Row": {
        type: "{ children: React.ReactNode; style?: StyleProp<ViewStyle> }",
        required: true,
        description:
          "Wrapper for cells in a single row. Works in header or body.",
      },
      "Table.Title": {
        type: "{ children: React.ReactNode; containerStyle?: StyleProp<ViewStyle>; textStyle?: StyleProp<TextStyle> }",
        required: true,
        description:
          "Header cell component for titles, typically placed inside Table.Header.",
      },
      "Table.Cell": {
        type: "{ children: React.ReactNode; containerStyle?: StyleProp<ViewStyle>; textStyle?: StyleProp<TextStyle> }",
        required: true,
        description: "Cell component for body rows.",
      },
    }}
  >
    <View style={{ width: "100%", maxWidth: 360 }}>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.Title>Name</Table.Title>
            <Table.Title>Role</Table.Title>
            <Table.Title>Location</Table.Title>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Alex Carter</Table.Cell>
            <Table.Cell>Designer</Table.Cell>
            <Table.Cell>Austin</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Maya Singh</Table.Cell>
            <Table.Cell>Engineer</Table.Cell>
            <Table.Cell>Toronto</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </View>
  </DocsViewer>
);

export default TableDocsScreen;
