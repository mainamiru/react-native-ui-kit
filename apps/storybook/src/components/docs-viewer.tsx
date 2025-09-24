import { useTheme } from "@/hooks";
import { MobileView } from "@/mobile";
import {
  Code,
  Container,
  FlexView,
  Row,
  Table,
  Text,
} from "@mainamiru/react-native-ui-kit";
import React from "react";
import { ScrollView, View } from "react-native";

export interface PropOption {
  type: string;
  default?: string;
  required: boolean;
  description?: string;
}

export interface DocsViewerProps {
  title: string;
  usage: string;
  description?: string;
  exampleCode: string;
  children?: React.ReactNode;
  props?: Record<string, PropOption>;
}

export const DocsViewer = ({
  title,
  usage,
  props,
  children,
  exampleCode,
  description,
}: DocsViewerProps) => {
  const { colors } = useTheme();
  return (
    <Container style={{ flex: 1, backgroundColor: colors.card }}>
      <ScrollView contentContainerStyle={{ padding: 15, gap: 15 }}>
        <Text variant="titleLarge" style={{ fontSize: 40 }}>
          {title}
        </Text>
        <Text variant="bodyLarge">{description}</Text>
        <View style={{ gap: 15 }}>
          <Text variant="titleLarge" style={{ fontSize: 30 }}>
            Usage
          </Text>
          <Text variant="bodyLarge">{usage}</Text>
          <Row flexWrap="wrap">
            <FlexView minWidth={300} flex={2}>
              <Code
                textColor="#000"
                code={exampleCode}
                backgroundColor="#f5f5f5"
              />
            </FlexView>
            {children && (
              <FlexView padding={15} minWidth={300} alignItems="center">
                <MobileView style={{ padding: 10 }}>{children}</MobileView>
              </FlexView>
            )}
          </Row>
        </View>

        {props && (
          <View style={{ gap: 15 }}>
            <Text variant="titleLarge" style={{ fontSize: 30 }}>
              Props
            </Text>
            <Text variant="bodyLarge">
              The {title} component accepts the following props:
            </Text>
            <Table>
              <Table.Header>
                <Table.Title>Prop</Table.Title>
                <Table.Title>Type</Table.Title>
                <Table.Title>Required</Table.Title>
                <Table.Title>Default</Table.Title>
                <Table.Title colsSpan={2}>Description</Table.Title>
              </Table.Header>
              <Table.Body>
                {Object.entries(props).map(([name, prop]) => (
                  <Table.Row key={name}>
                    <Table.Cell>{name}</Table.Cell>
                    <Table.Cell style={{ alignItems: "center" }}>
                      {prop.type}
                    </Table.Cell>
                    <Table.Cell style={{ alignItems: "center" }}>
                      {prop.required ? "Yes" : "No"}
                    </Table.Cell>
                    <Table.Cell style={{ alignItems: "center" }}>
                      {prop.default || "-"}
                    </Table.Cell>
                    <Table.Cell colsSpan={2}>
                      {prop.description || "-"}
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </View>
        )}
      </ScrollView>
    </Container>
  );
};
