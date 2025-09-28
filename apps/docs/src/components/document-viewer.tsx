import { useTheme } from "@/hooks";
import { MobileView } from "@/mobile";
import {
  Code,
  Container,
  FlexView,
  Row,
  Text,
} from "@mainamiru/react-native-ui-kit";
import { Href, Link } from "expo-router";
import Head from "expo-router/head";
import React from "react";
import {
  ScrollView,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";

export interface DocumentPropOption {
  title: string;
  type: string;
  href?: string;
  default?: string;
  required: boolean;
  description?: string;
  props?: DocumentPropOption[];
}

export interface DocumentViewerProps {
  title: string;
  usage?: string;
  description?: string;
  exampleCode: string;
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  props?: DocumentPropOption[];
}

export const DocumentViewer: React.FC<DocumentViewerProps> = ({
  title,
  usage,
  props,
  style,
  children,
  exampleCode,
  description,
}) => {
  const { theme } = useTheme();

  const renderProps = (props: DocumentPropOption[] = []) => {
    return props.map((details) => (
      <View key={details.title}>
        <Text variant="titleLarge">{details.title}</Text>
        <Row gap={10} flexWrap="wrap" maxWidth="100%" alignItems="center">
          <Text variant="titleMedium" style={styles.propName}>
            {details.title}:
          </Text>
          {details.href ? (
            <Link
              target="_blank"
              href={details.href as Href}
              style={[
                styles.propType,
                {
                  textDecorationLine: "underline",
                  textDecorationColor: theme.colors.primary,
                },
              ]}
            >
              {details.type}
            </Link>
          ) : (
            <Text style={styles.propType}>{details.type}</Text>
          )}
          <Text style={styles.propDetails}>
            {details.required ? "(required)" : "(optional)"}
            {details.default ? ` | default: ${details.default}` : ""}
          </Text>
        </Row>
        <Text style={styles.propDescription}>{details.description}</Text>
        <View style={{ marginTop: 10 }}>
          {details.props && renderProps(details.props)}
        </View>
      </View>
    ));
  };

  return (
    <>
      <Head>
        <title>{`${title} | React Native UI Kit – Ready-Made Components for Fast App Development`}</title>
        <meta name="description" content={description} />
      </Head>
      <Container style={{ flex: 1, backgroundColor: theme.colors.card }}>
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
              <FlexView style={{ minWidth: 300, flex: 2 }}>
                <Code
                  textColor="#000"
                  code={exampleCode}
                  backgroundColor="#f5f5f5"
                />
              </FlexView>
              {children && (
                <FlexView
                  style={{
                    padding: 15,
                    minWidth: 300,
                    alignItems: "center",
                  }}
                >
                  <MobileView style={style} isDarkMode={theme.dark}>
                    {children}
                  </MobileView>
                </FlexView>
              )}
            </Row>
          </View>

          {/* Props Table */}
          {renderProps(props)}
        </ScrollView>
      </Container>
    </>
  );
};

export default DocumentViewer;

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
    padding: 8,
    fontSize: 14,
    color: "#222",
    borderRadius: 6,
    fontFamily: "monospace",
    backgroundColor: "#f5f5f5",
  },
  propName: {
    fontSize: 15,
    fontWeight: "600",
  },
  propDetails: {
    fontSize: 14,
    color: "#666",
  },
  propDescription: {
    fontSize: 14,
    color: "#444",
    marginTop: 4,
  },
  propType: {
    padding: 4,
    fontSize: 14,
    borderWidth: 1,
    color: "black",
    borderRadius: 5,
    paddingHorizontal: 8,
    borderColor: "#98a1a6",
    backgroundColor: "#d9f1ff",
  },
});
