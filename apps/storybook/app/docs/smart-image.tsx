import { DocsViewer } from "@/components";
import { SmartImage, Text } from "@mainamiru/react-native-ui-kit";
import React from "react";
import { View } from "react-native";

const SmartImageDocsScreen = () => (
  <DocsViewer
    title="SmartImage"
    description="An enhanced image component that supports placeholders, fallback sources, and fade-in animations."
    usage="Use SmartImage whenever you need resilient image loading with graceful degradation. Provide both primary and fallback sources and optionally customize the placeholder content."
    exampleCode={`import React from "react";
import { View, Text } from "react-native";
import { SmartImage } from "@mainamiru/react-native-ui-kit";

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <SmartImage
        source={{ uri: "https://example.com/main-image.jpg" }}
        fallbackSource={{ uri: "https://via.placeholder.com/150" }}
        placeholder={<Text>Loading...</Text>}
        style={{ width: 200, height: 200, borderRadius: 12 }}
        resizeMode="cover"
        fadeDuration={500}
      />
    </View>
  );
}`}
      props={{
        source: {
          type: "ImageSourcePropType",
          required: false,
          description: "Primary image source to display.",
        },
        fallbackSource: {
          type: "ImageSourcePropType",
          required: false,
          description: "Image source used if loading the primary source fails.",
        },
        placeholder: {
          type: "React.ReactNode",
          required: false,
          default: "Spinner",
          description: "Element rendered while the image is loading.",
        },
        style: {
          type: "StyleProp<ImageStyle>",
          required: false,
          description: "Styles applied to the underlying image component.",
        },
        resizeMode: {
          type: '"cover" | "contain" | "stretch" | "repeat" | "center"',
          required: false,
          default: '"cover"',
          description: "Determines how the image should be resized to fit its container.",
        },
        fadeDuration: {
          type: "number",
          required: false,
          default: "300",
          description: "Duration in milliseconds for the fade-in animation once loaded.",
        },
      }}
    >
      <SmartImage
        source={{ uri: "https://picsum.photos/seed/ui-kit/200" }}
        fallbackSource={{ uri: "https://via.placeholder.com/200" }}
        placeholder={<Text variant="bodySmall">Loading...</Text>}
        style={{ width: 200, height: 200, borderRadius: 16 }}
      />
    </DocsViewer>
  );

export default SmartImageDocsScreen;
