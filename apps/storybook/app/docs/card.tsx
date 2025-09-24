import { DocsViewer } from "@/components";
import { Card } from "@mainamiru/react-native-ui-kit";
import React from "react";

const CardDocsScreen = () => (
  <DocsViewer
    title="Card"
    description="A compound Card component with handy subcomponents for building structured content blocks."
    usage="Use Card to group related content such as imagery, titles, and descriptions. Combine subcomponents like Card.Image and Card.Content to create rich layouts."
    exampleCode={`import React from "react";
import { Card, Text } from "@mainamiru/react-native-ui-kit";

export default function App() {
  return (
    <Card>
      <Card.Image source="https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg" alt="Sample" />
      <Card.Content>
        <Card.Title>Mountain Escape</Card.Title>
        <Card.Description>
          Enjoy a quiet weekend in a cozy cabin with breathtaking views.
        </Card.Description>
      </Card.Content>
    </Card>
  );
}`}
    props={{
      "Card.Image": {
        type: "{ source: string | ImageSourcePropType; style?: StyleProp<ImageStyle>; alt?: string }",
        required: true,
        description:
          "Renders an image at the top of the card with optional styling and accessibility label.",
      },
      "Card.Content": {
        type: "{ children: React.ReactNode; style?: StyleProp<ViewStyle> }",
        required: true,
        description:
          "Provides padded content region for text or custom elements.",
      },
      "Card.Title": {
        type: "{ children: string; style?: StyleProp<TextStyle> }",
        required: true,
        description: "Displays prominent title text for the card.",
      },
      "Card.Description": {
        type: "{ children: string; style?: StyleProp<TextStyle> }",
        required: false,
        description: "Displays supporting description text under the title.",
      },
    }}
  >
    <Card>
      <Card.Image
        source="https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg"
        alt="Mountain"
        style={{ height: 160, width: "100%" }}
      />
      <Card.Content>
        <Card.Title>Mountain Escape</Card.Title>
        <Card.Description>
          Enjoy a quiet weekend in a cozy cabin with breathtaking views.
        </Card.Description>
      </Card.Content>
    </Card>
  </DocsViewer>
);

export default CardDocsScreen;
