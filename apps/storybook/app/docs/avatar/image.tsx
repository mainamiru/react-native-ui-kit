import { DocsViewer } from "@/components";
import { Avatar } from "@mainamiru/react-native-ui-kit";
import React from "react";
import { View } from "react-native";

const AvatarImageDocsScreen = () => {
  const examples = [
    {
      description: "Default size",
      element: (
        <Avatar.Image source={{ uri: "https://via.placeholder.com/150" }} />
      ),
      code: `<Avatar.Image source={{ uri: "https://via.placeholder.com/150" }} />`,
    },
    {
      description: "Custom size",
      element: (
        <Avatar.Image
          source={{ uri: "https://via.placeholder.com/150" }}
          size={60}
        />
      ),
      code: `<Avatar.Image source={{ uri: "https://via.placeholder.com/150" }} size={60} />`,
    },
    {
      description: "With placeholder fallback",
      element: (
        <Avatar.Image
          source={{ uri: "https://invalid-url.com/image.png" }}
          placeholderSource={{ uri: "https://via.placeholder.com/50" }}
          size={50}
        />
      ),
      code: `
<Avatar.Image
  source={{ uri: "https://invalid-url.com/image.png" }}
  placeholderSource={{ uri: "https://via.placeholder.com/50" }}
  size={50}
/>
      `.trim(),
    },
    {
      description: "Large avatar with custom style",
      element: (
        <Avatar.Image
          source={{ uri: "https://via.placeholder.com/150" }}
          size={80}
          style={{ borderWidth: 2, borderColor: "#000" }}
        />
      ),
      code: `
<Avatar.Image
  source={{ uri: "https://via.placeholder.com/150" }}
  size={80}
  style={{ borderWidth: 2, borderColor: "#000" }}
/>
      `.trim(),
    },
  ];

  return (
    <DocsViewer
      title="Avatar.Image"
      description="Displays an image inside a circular avatar. Supports optional placeholder image if the source fails."
      usage="Use Avatar.Image to display profile images with customizable size, style, and fallback support."
      exampleCode={examples.map((ex) => ex.code).join("\n\n")}
      props={{
        source: {
          type: "ImageSourcePropType",
          required: true,
          description: "Image URL or source for the avatar",
        },
        size: {
          type: "number",
          required: false,
          default: "40",
          description: "Diameter of the avatar",
        },
        style: {
          type: "StyleProp<ImageStyle>",
          required: false,
          description: "Custom styles for the image",
        },
        placeholderSource: {
          type: "ImageSourcePropType",
          required: false,
          description: "Optional fallback image if source fails",
        },
      }}
    >
      <View
        style={{
          gap: 16,
          padding: 20 ,
          flexWrap: "wrap",
          flexDirection: "row", 
        }}
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

export default AvatarImageDocsScreen;
