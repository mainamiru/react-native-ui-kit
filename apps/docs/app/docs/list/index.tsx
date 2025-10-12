import { DocsViewer } from "@/components";
import React from "react";

const ListDocsScreen = () => (
  <DocsViewer
    title="List"
    description="A dynamic accordion that measures content height for smooth expand and collapse animations."
    usage="Use List.Accordion to reveal additional information without navigating away or cluttering the screen. Great for FAQs, settings, and grouped content."
    exampleCode={`import React from "react";
import { List } from "@mainamiru/react-native-ui-kit";

export default function App() {
  return (
    <List.Accordion title="Click to Expand">
      <Text>This is the dynamic content of the accordion.</Text>
      <Text>Children height is measured automatically.</Text>
    </List.Accordion>
  );
}`}
    props={{
      Item: {
        type: "List.Item",
        required: true,
        description: "Content rendered inside the accordion when expanded.",
      },
      Accordion: {
        type: "List.Accordion",
        required: true,
        description: "Content rendered inside the accordion when expanded.",
        props: {
          title: {
            type: "string",
            required: true,
            description: "Title text displayed in the accordion header.",
          },
        },
      },
    }}
  />
);

export default ListDocsScreen;
