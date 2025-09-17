import * as Clipboard from "expo-clipboard"; // For Expo projects
import React, { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

type CodeProps = {
  code: string;
};

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
    }
  );

  if (lastIndex < code.length) {
    parts.push({ text: code.slice(lastIndex) });
  }

  return parts;
};

export const Code: React.FC<CodeProps> = ({ code }) => {
  const highlighted = highlight(code);
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <View style={styles.wrapper}>
      <Pressable style={styles.copyButton} onPress={copyToClipboard}>
        <Text style={styles.copyText}>{copied ? "Copied!" : "Copy"}</Text>
      </Pressable>

      <ScrollView horizontal style={styles.container}>
        <Text style={styles.code}>
          {highlighted.map((part, i) => (
            <Text key={i} style={part.style}>
              {part.text}
            </Text>
          ))}
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 8,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#1e1e1e",
  },
  container: {
    padding: 12,
  },
  code: {
    fontFamily: "monospace",
    fontSize: 14,
    color: "#d4d4d4",
  },
  keyword: {
    color: "#569CD6",
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
    alignSelf: "flex-end",
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: "#2d2d2d",
  },
  copyText: {
    color: "#569CD6",
    fontSize: 12,
    fontWeight: "500",
  },
});

export default Code;
