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
      Avatar: {
        type: "{ size?: number; style?: StyleProp<ViewStyle>; children?: React.ReactNode }",
        required: false,
        description:
          "Base Avatar container. Can be used to wrap custom content.",
      },
      "Avatar.Image": {
        type: "{ source: ImageSourcePropType; size?: number; style?: StyleProp<ImageStyle>; placeholderSource?: ImageSourcePropType }",
        required: true,
        description:
          "Displays an image inside a circular avatar. Supports optional placeholder image.",
      },
      "Avatar.Text": {
        type: "{ text: string; size?: number; backgroundColor?: string; textColor?: string; style?: StyleProp<ViewStyle>; textStyle?: StyleProp<TextStyle> }",
        required: true,
        description:
          "Displays initials or text inside a circular avatar with customizable background and text color.",
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
