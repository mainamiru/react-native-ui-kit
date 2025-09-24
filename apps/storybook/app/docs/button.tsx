import { DocsViewer } from "@/components";
import { MaterialIcons } from "@expo/vector-icons";
import { Button, FlexView } from "@mainamiru/react-native-ui-kit";
import React from "react";

const ButtonDocsScreen = () => (
  <DocsViewer
    title="Button"
    usage="Use the button component when you want users to take an action. You can customize the button by passing props to it. The button component accepts the following props:"
    description="A button is component that the user can press to trigger an action."
    exampleCode={`import * as React from "react";
import { Button, Center, FlexView } from "@mainamiru/react-native-ui-kit";

const MyComponent = () => (
  <FlexView flex={1} gap={15} justifyContent="center" padding={15}>
    <Button
      textColor="white"
      mode="contained"
      icon={({ size, color }) => (
        <MaterialIcons name="camera" size={size} color={color} />
      )}
      onPress={() => alert("Button pressed")}
    >
      Contained
    </Button>
    <Button
      loading={true}
      mode="text"
      icon={({ size, color }) => (
        <MaterialIcons name="camera" size={size} color={color} />
      )}
      onPress={() => alert("Button pressed")}
    >
      Loading
    </Button>
    <Button
      mode="outlined"
      icon={({ size, color }) => (
        <MaterialIcons name="camera" size={size} color={color} />
      )}
      onPress={() => alert("Button pressed")}
    >
      Outlined
    </Button>
  </FlexView>
);

export default MyComponent;
`}
    props={{
      mode: {
        type: "text | contained | outlined",
        default: "contained",
        required: false,
        description:
          "The mode of the button. Can be 'contained', 'outlined', or 'text'.",
      },
      textColor: {
        type: "ColorValue",
        default: "white",
        required: false,
        description:
          "The text color of the button. Can be 'white', 'black', or 'primary'.",
      },
      icon: {
        type: "function",
        default: "white",
        required: false,
        description:
          "The icon of the button. Can be 'white', 'black', or 'primary'.",
      },
    }}
  >
    <FlexView flex={1} gap={15} justifyContent="center">
      <Button
        mode="contained"
        textColor="white"
        icon={({ size, color }) => (
          <MaterialIcons name="camera" size={size} color={color} />
        )}
        onPress={() => alert("Button pressed")}
      >
        Contained
      </Button>
      <Button
        mode="text"
        loading={true}
        icon={({ size, color }) => (
          <MaterialIcons name="camera" size={size} color={color} />
        )}
        onPress={() => alert("Button pressed")}
      >
        Loading
      </Button>
      <Button
        mode="outlined"
        textColor="black"
        icon={({ size, color }) => (
          <MaterialIcons name="camera" size={size} color={color} />
        )}
        onPress={() => alert("Button pressed")}
      >
        Outlined
      </Button>
    </FlexView>
  </DocsViewer>
);

export default ButtonDocsScreen;
