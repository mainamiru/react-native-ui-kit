import { DocsViewer } from "@/components";
import { Skeleton } from "@mainamiru/react-native-ui-kit";
import React from "react";
import { View } from "react-native";

const SkeletonDocsScreen = () => (
  <DocsViewer
    title="Skeleton"
    description="A lightweight skeleton placeholder with shimmer animation for loading states."
    usage="Use Skeleton components to provide visual placeholders while data is loading. Customize width, height, and border radius for different content types."
    exampleCode={`import React from "react";
import { Skeleton } from "@mainamiru/react-native-ui-kit";
import { View } from "react-native";

export default function App() {
  return (
    <View style={{ padding: 16 }}>
      <Skeleton width="80%" height={20} borderRadius={12} />
      <Skeleton width="100%" height={150} borderRadius={16} style={{ marginTop: 16 }} />
    </View>
  );
}`}
    props={{
      Skeleton: {
        type: "{ width?: number | string; height?: number; borderRadius?: number; style?: StyleProp<ViewStyle> }",
        required: true,
        description:
          "Displays a loading placeholder with optional shimmer effect.",
      },
    }}
  >
    <View style={{ padding: 16 }}>
      <Skeleton width="80%" height={20} borderRadius={12} />
      <Skeleton
        width="100%"
        height={150}
        borderRadius={16}
        style={{ marginTop: 16 }}
      />
    </View>
  </DocsViewer>
);

export default SkeletonDocsScreen;
