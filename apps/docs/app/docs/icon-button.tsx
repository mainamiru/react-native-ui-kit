import { DocsViewer } from "@/components";
import { IconButton } from "@mainamiru/react-native-ui-kit";
import React from "react";
import { View } from "react-native";

const IconButtonDocsScreen = () => {
  return (
    <DocsViewer
      title="IconButton"
      description="IconButton component"
      exampleCode={`import React from "react";
import { IconButton } from "@mainamiru/react-native-ui-kit";

export default function App(){
return (
    <View style={{ gap: 10, padding: 10, flexDirection: "row" }}>
        <IconButton icon="archive" onPress={() => console.log("pressed")} />
        <IconButton icon="arrow-left" onPress={() => console.log("pressed")} />
        <IconButton icon="arrow-right" onPress={() => console.log("pressed")} />
        <IconButton icon="arrow-up" onPress={() => console.log("pressed")} />
        <IconButton
          size={30}
          icon="arrow-down"
          onPress={() => console.log("pressed")}
        />
    </View>
  )
}`}
      props={{
        icon: {
          type: "string",
          required: true,
          description: "Icon name",
        },
        size: {
          type: "number",
          required: false,
          default: "30",
          description: "Icon size",
        },
        onPress: {
          type: "function",
          required: false,
          description: "Icon press handler",
        },
        style: {
          type: "StyleProp<ViewStyle>",
          required: false,
          description:
            "Style for the IconButton. See https://reactnative.dev/docs/view-style-props for available props.",
          href: "https://reactnative.dev/docs/view-style-props",
        },
      }}
    >
      <View style={{ gap: 10, padding: 10, flexDirection: "row" }}>
        <IconButton icon="archive" onPress={() => console.log("pressed")} />
        <IconButton icon="arrow-left" onPress={() => console.log("pressed")} />
        <IconButton icon="arrow-right" onPress={() => console.log("pressed")} />
        <IconButton icon="arrow-up" onPress={() => console.log("pressed")} />
        <IconButton
          size={30}
          icon="arrow-down"
          onPress={() => console.log("pressed")}
        />
      </View>
    </DocsViewer>
  );
};

export default IconButtonDocsScreen;
