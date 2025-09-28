import { DocsViewer } from "@/components";
import React from "react";

const CodeDocsScreen = () => (
  <DocsViewer
    title="Code"
    description="A syntax-highlighted code block component with copy-to-clipboard functionality."
    usage="Use the Code component to display snippets in tutorials, developer docs, or in-app editors."
    exampleCode={`import React from "react";
import { Code } from "@mainamiru/react-native-ui-kit";

export default function App() {
  return (
    <Code
      code={\`function sum(a: number, b: number) {
  return a + b;
}\`}
    />
  );
}`}
    props={{
      code: {
        type: "string",
        required: true,
        description: "The code snippet to display with syntax highlighting.",
      },
      textColor: {
        type: "string",
        required: false,
        default: "#d4d4d4",
        description: "The text color for non-highlighted code.",
      },
      backgroundColor: {
        type: "string",
        required: false,
        default: "#1e1e1e",
        description: "The background color of the code block.",
      },
    }}
  />
);

export default CodeDocsScreen;
