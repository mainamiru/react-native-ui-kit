import { DocsViewer } from "@/components";
import { Avatar } from "@mainamiru/react-native-ui-kit";
import React from "react";
import { View } from "react-native";

const AvatarTextDocsScreen = () => {
  const examples = [
    {
      description: "Default size with default background",
      element: <Avatar.Text text="JS" />,
      code: `<Avatar.Text text="JS" />`,
    },
    {
      description: "Custom size and background color",
      element: <Avatar.Text text="AB" size={60} backgroundColor="#f0a500" />,
      code: `<Avatar.Text text="AB" size={60} backgroundColor="#f0a500" />`,
    },
    {
      description: "Custom text color and style",
      element: (
        <Avatar.Text
          text="CD"
          size={50}
          backgroundColor="#62bd6e"
          textColor="#fff"
          textStyle={{ fontSize: 24 }}
        />
      ),
      code: `
<Avatar.Text
  text="CD"
  size={50}
  backgroundColor="#62bd6e"
  textColor="#fff"
  textStyle={{ fontSize: 24 }}
/>
      `.trim(),
    },
    {
      description: "Small avatar",
      element: <Avatar.Text text="EF" size={30} />,
      code: `<Avatar.Text text="EF" size={30} />`,
    },
    {
      description: "Large avatar with custom style",
      element: (
        <Avatar.Text
          text="GH"
          size={80}
          style={{ borderWidth: 2, borderColor: "#000" }}
        />
      ),
      code: `<Avatar.Text text="GH" size={80} style={{ borderWidth: 2, borderColor: "#000" }} />`,
    },
  ];

  return (
    <DocsViewer
      title="Avatar.Text"
      description="Displays initials or text inside a circular avatar with customizable background, text color, and size."
      usage="Use Avatar.Text to show user initials or any text content inside a circle. You can customize size, colors, and styles."
      exampleCode={examples.map((ex) => ex.code).join("\n\n")}
      props={{
        text: {
          type: "string",
          required: true,
          description: "Text or initials to display",
        },
        size: {
          type: "number",
          required: false,
          default: "40",
          description: "Diameter of the avatar",
        },
        backgroundColor: {
          type: "string",
          required: false,
          default: "#62bd6e",
          description: "Background color",
        },
        textColor: {
          type: "string",
          required: false,
          description: "Text color, auto-adjusts for contrast",
        },
        style: {
          type: "StyleProp<ViewStyle>",
          required: false,
          description: "Custom styles for the container",
        },
        textStyle: {
          type: "StyleProp<TextStyle>",
          required: false,
          description: "Custom styles for the text",
        },
      }}
    >
      <View
        style={{ flexDirection: "row", flexWrap: "wrap", gap: 16, padding: 20 }}
      >
        {examples.map((ex, idx) => (
          <View key={idx} style={{ marginBottom: 16 }}>
            {ex.element}
          </View>
        ))}
      </View>
    </DocsViewer>
  );
};

export default AvatarTextDocsScreen;
