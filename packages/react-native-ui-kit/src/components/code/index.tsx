import * as Clipboard from "expo-clipboard"; // For Expo projects
import React, { useState } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextStyle,
  View,
} from "react-native";

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

  const parts: { text: string; style?: TextStyle }[] = [];
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
  code: {
    color: "#d4d4d4",
    fontFamily: "monospace",
    fontSize: 14,
  },
  comment: {
    color: "#6A9955",
    fontStyle: "italic",
  },
  container: {
    padding: 15,
  },
  copyButton: {
    backgroundColor: "#2d2d2d",
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 6,
    position: "absolute",
    right: 0,
    top: 0,
    zIndex: 10,
  },
  copyText: {
    color: "#569CD6",
    fontSize: 12,
    fontWeight: "500",
  },
  keyword: {
    color: "#3b388f",
  },
  number: {
    color: "#B5CEA8",
  },
  string: {
    color: "#D69D85",
  },
  wrapper: {
    backgroundColor: "#1e1e1e",
    borderRadius: 8,
    flexDirection: "row",
    overflow: "hidden",
  },
});

export default Code;
