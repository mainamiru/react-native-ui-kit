import { DocsViewer } from "@/components";
import { Button, useToaster } from "@mainamiru/react-native-ui-kit";
import React from "react";
import { View } from "react-native";

const ToasterDocsScreen = () => {
  const toast = useToaster();
  return (
    <DocsViewer
      title="Toaster"
      description="Toaster is a component that is used to display a toast message."
      usage="Toaster is a component that is used to display a toast message."
      exampleCode={`import React from "react";
import { Button, useToaster } from "@mainamiru/react-native-ui-kit";

const App = () => {
  const toast = useToaster();
  return (
    <View style={{ padding: 15, gap: 15 }}>
        <Button mode="outlined" onPress={() => toast.show("Default")}>
          Default
        </Button>
        <Button
          mode="contained"
          buttonColor="green"
          onPress={() => toast.success("Your payment has been done")}
        >
          Success
        </Button>
        <Button
          mode="contained"
          buttonColor="red"
          onPress={() => toast.error("Your payment has been failed")}
        >
          Error
        </Button>
        <Button
          mode="contained"
          buttonColor="blue"
          onPress={() => toast.info("Thank you for your payment")}
        >
          Info
        </Button>
      </View>
    );
};

export default App;
`}
    >
      <View style={{ padding: 15, gap: 15 }}>
        <Button mode="outlined" onPress={() => toast.show("Default")}>
          Default
        </Button>
        <Button
          mode="contained"
          buttonColor="green"
          onPress={() => toast.success("Your payment has been done")}
        >
          Success
        </Button>
        <Button
          mode="contained"
          buttonColor="red"
          onPress={() => toast.error("Your payment has been failed")}
        >
          Error
        </Button>
        <Button
          mode="contained"
          buttonColor="blue"
          onPress={() =>
            toast.info(
              "A complete design system with TypeScript support, modern aesthetics, and seamless integration",
              { position: "top-center" }
            )
          }
        >
          Info
        </Button>
      </View>
    </DocsViewer>
  );
};

export default ToasterDocsScreen;
