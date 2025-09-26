import * as Clipboard from "expo-clipboard"; // For Expo projects
import React, { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

export interface CodeProps {
  code: string;
  textColor?: string;
  backgroundColor?: string;
}

const keywords = [
  "const",
  "let",
  "var",
  "function",
  "return",
  "if",
  "else",
  "for",
  "while",
  "switch",
  "case",
  "break",
  "continue",
  "import",
  "export",
  "class",
  "extends",
  "implements",
  "interface",
  "type",
  "new",
  "try",
  "catch",
  "finally",
  "throw",
  "async",
  "await",
];

const highlight = (code: string) => {
  const regex =
    /(\/\/.*$)|("(?:[^"\\]|\\.)*")|('(?:[^'\\]|\\.)*')|(`(?:[^`\\]|\\.)*`)|\b(\d+)\b|\b([a-zA-Z_]\w*)\b/gm;

  const parts: { text: string; style?: any }[] = [];
  let lastIndex = 0;

  code.replace(
    regex,
    (match, comment, dquote, squote, template, number, word, offset) => {
      if (offset > lastIndex) {
        parts.push({ text: code.slice(lastIndex, offset) });
      }

      if (comment) {
        parts.push({ text: comment, style: styles.comment });
      } else if (dquote || squote || template) {
        parts.push({ text: match, style: styles.string });
      } else if (number) {
        parts.push({ text: match, style: styles.number });
      } else if (word && keywords.includes(word)) {
        parts.push({ text: match, style: styles.keyword });
      } else {
        parts.push({ text: match });
      }

      lastIndex = offset + match.length;
      return match;
    },
  );

  if (lastIndex < code.length) {
    parts.push({ text: code.slice(lastIndex) });
  }

  return parts;
};

export const Code: React.FC<CodeProps> = ({
  code,
  textColor = "#d4d4d4",
  backgroundColor = "#1e1e1e",
}) => {
  const highlighted = highlight(code);
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <View style={[styles.wrapper, { backgroundColor }]}>
      <View style={{ flex: 1 }}>
        <ScrollView horizontal style={styles.container}>
          <Text style={[styles.code, { color: textColor }]}>
            {highlighted.map((part, i) => (
              <Text key={i} style={part.style}>
                {part.text}
              </Text>
            ))}
          </Text>
        </ScrollView>
      </View>
      <View>
        <Pressable style={styles.copyButton} onPress={copyToClipboard}>
          <Text style={styles.copyText}>{copied ? "Copied!" : "Copy"}</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 8,
    overflow: "hidden",
    flexDirection: "row",
    backgroundColor: "#1e1e1e",
  },
  container: {
    padding: 15,
  },
  code: {
    fontSize: 14,
    color: "#d4d4d4",
    fontFamily: "monospace",
  },
  keyword: {
    color: "#3b388f",
  },
  string: {
    color: "#D69D85",
  },
  number: {
    color: "#B5CEA8",
  },
  comment: {
    color: "#6A9955",
    fontStyle: "italic",
  },
  copyButton: {
    borderRadius: 10,
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: "#2d2d2d",
    position: "absolute",
    top: 0,
    right: 0,
    zIndex: 10,
  },
  copyText: {
    fontSize: 12,
    color: "#569CD6",
    fontWeight: "500",
  },
});

export default Code;
