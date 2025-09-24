import { useTheme } from "@/hooks";
import { MobileView } from "@/mobile";
import {
  Code,
  Container,
  FlexView,
  Layout,
  Row,
  Table,
  Text,
} from "@mainamiru/react-native-ui-kit";
import React from "react";
import {
  ScrollView,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";

export interface PropOption {
  type: string;
  default?: string;
  required: boolean;
  description?: string;
}

export interface DocsViewerProps {
  title: string;
  usage?: string;
  description?: string;
  exampleCode: string;
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  props?: Record<string, PropOption>;
}

export const DocsViewer: React.FC<DocsViewerProps> = ({
  title,
  usage,
  props,
  style,
  children,
  exampleCode,
  description,
}) => {
  const { colors } = useTheme();
  return (
    <Container style={{ flex: 1, backgroundColor: colors.card }}>
      <ScrollView
        contentContainerStyle={{ padding: 15, gap: 15 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Title + Description */}
        <Text variant="titleLarge" style={{ fontSize: 40 }}>
          {title}
        </Text>
        {description && <Text variant="bodyLarge">{description}</Text>}

        {/* Usage + Example */}
        <View style={{ gap: 15 }}>
          {(usage || exampleCode) && (
            <Text variant="titleLarge" style={{ fontSize: 30 }}>
              Usage
            </Text>
          )}
          {usage && <Text variant="bodyLarge">{usage}</Text>}
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
                <MobileView style={style}>{children}</MobileView>
              </FlexView>
            )}
          </Row>
        </View>

        {/* Props Table */}
        {props && (
          <Layout>
            <Layout.SmallView>
              <Text style={styles.sectionTitle}>Props</Text>
              {Object.entries(props).map(([name, details]) => (
                <View key={name} style={styles.propRow}>
                  <Text style={styles.propName}>{name}</Text>
                  <Text style={styles.propDetails}>
                    {details.type}{" "}
                    {details.required ? "(required)" : "(optional)"}
                    {details.default ? ` | default: ${details.default}` : ""}
                  </Text>
                  <Text style={styles.propDescription}>
                    {details.description}
                  </Text>
                </View>
              ))}
            </Layout.SmallView>
            <Layout.View
              modes={["md", "lg", "xlg"]}
              style={{ padding: 10, gap: 15 }}
            >
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
                      <Table.Cell style={{ justifyContent: "center" }}>
                        {prop.type}
                      </Table.Cell>
                      <Table.Cell style={{ justifyContent: "center" }}>
                        {prop.required ? "Yes" : "No"}
                      </Table.Cell>
                      <Table.Cell style={{ justifyContent: "center" }}>
                        {prop.default || "-"}
                      </Table.Cell>
                      <Table.Cell colsSpan={2}>
                        {prop.description || "-"}
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
            </Layout.View>
          </Layout>
        )}
      </ScrollView>
    </Container>
  );
};

export default DocsViewer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: "#444",
    marginBottom: 16,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 8,
  },
  code: {
    fontFamily: "monospace",
    backgroundColor: "#f5f5f5",
    padding: 8,
    borderRadius: 6,
    fontSize: 13,
    color: "#222",
  },
  propRow: {
    marginBottom: 12,
  },
  propName: {
    fontSize: 15,
    fontWeight: "600",
  },
  propDetails: {
    fontSize: 13,
    color: "#666",
  },
  propDescription: {
    fontSize: 13,
    color: "#444",
    marginTop: 4,
  },
});
