import { DocsViewer } from "@/components";
import { Avatar, Text } from "@mainamiru/react-native-ui-kit";
import React from "react";
import { View } from "react-native";

const AvatarDocsScreen = () => (
  <DocsViewer
    title="Avatar"
    description="A compound Avatar component for React Native. Supports Base, Image, and Text avatars with customizable size, style, and fallback options."
    usage="Use Avatar for displaying user profile images, initials, or custom content. Combine subcomponents like Avatar.Image and Avatar.Text for rich layouts."
    exampleCode={`import React from "react";
import { View } from "react-native";
import { Avatar } from "@mainamiru/react-native-ui-kit";

export default function App() {
  return (
    <View style={{ flexDirection: "row", gap: 16, padding: 20 }}>
      <Avatar size={60} /> {/* Base avatar */}
      <Avatar
        size={60}
        source={{ uri: "https://via.placeholder.com/150" }}
      />
      <Avatar
        size={60}
        source={null}
        fallback="AB"
        backgroundColor="#f0a500"
      />
    </View>
  );
}`}
    props={{
      size: {
        type: "number",
        required: false,
        description: "The size of the avatar in pixels.",
      },
      source: {
        type: "string | number | null | undefined | ImageSourcePropType",
        required: false,
        description: "The source of the image to display.",
      },
      fallback: {
        type: "string",
        required: false,
        description: "The fallback text to display if the image fails to load.",
      },
      backgroundColor: {
        type: "string",
        required: false,
        description: "The background color of the avatar.",
      },
      textColor: {
        type: "string",
        required: false,
        description: "The text color of the avatar.",
      },
      style: {
        type: "StyleProp<ViewStyle>",
        required: false,
        description: "The style of the avatar.",
      },
      textStyle: {
        type: "StyleProp<TextStyle>",
        required: false,
        description: "The style of the text.",
      },
    }}
  >
    <View style={{ gap: 16, padding: 10, flexDirection: "row" }}>
      <View>
        <Avatar source={{ uri: "https://via.placeholder.com/150" }} size={60} />
        <Text>Image</Text>
      </View>
      <View>
        <Avatar
          size={60}
          fallback="AB"
          source={null}
          backgroundColor="#f0a500"
        />
        <Text>Fallback text</Text>
      </View>
    </View>
  </DocsViewer>
);

export default AvatarDocsScreen;
