import React from "react";
import {
  ScrollView,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";

export interface DocumentationViewerProps {
  title: string;
  description?: string;
  usage?: string;
  exampleCode?: string;
  props?: Record<
    string,
    {
      type: string;
      required?: boolean;
      default?: string;
      description: string;
    }
  >;
  style?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  descriptionStyle?: StyleProp<TextStyle>;
  codeStyle?: StyleProp<TextStyle>;
}

export const DocumentationViewer: React.FC<DocumentationViewerProps> = ({
  title,
  description,
  usage,
  exampleCode,
  props,
  style,
  titleStyle,
  descriptionStyle,
  codeStyle,
}) => {
  return (
    <ScrollView style={[styles.container, style]}>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
      {description && (
        <Text style={[styles.description, descriptionStyle]}>
          {description}
        </Text>
      )}

      {usage && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Usage</Text>
          <Text style={[styles.code, codeStyle]}>{usage}</Text>
        </View>
      )}

      {exampleCode && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Example</Text>
          <Text style={[styles.code, codeStyle]}>{exampleCode}</Text>
        </View>
      )}

      {props && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Props</Text>
          {Object.entries(props).map(([name, details]) => (
            <View key={name} style={styles.propRow}>
              <Text style={styles.propName}>{name}</Text>
              <Text style={styles.propDetails}>
                {details.type} {details.required ? "(required)" : "(optional)"}
                {details.default ? ` | default: ${details.default}` : ""}
              </Text>
              <Text style={styles.propDescription}>{details.description}</Text>
            </View>
          ))}
        </View>
      )}
    </ScrollView>
  );
};

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

export default DocumentationViewer;
