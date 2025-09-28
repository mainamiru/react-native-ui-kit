import { DocsViewer } from "@/components";
import { Button, Dialog } from "@mainamiru/react-native-ui-kit";
import React from "react";
import { Text, View } from "react-native";

const DialogDocsScreen = () => {
  const [open, setIsOpen] = React.useState(false);
  return (
    <DocsViewer
      title="Dialog"
      description="A flexible dialog component with support for trigger, header, content, and action buttons."
      usage="Use the Dialog component to display a modal dialog with a trigger, header, content, and action buttons. Supports controlled and uncontrolled modes, plus custom styles and accessibility."
      exampleCode={`import React from "react";
import { View, Text } from "react-native";
import { Button, Dialog, Divider, Row } from "@mainamiru/react-native-ui-kit";

export default function App() {
  const [open, setIsOpen] = React.useState(false);

  return (
    <View>
      <Dialog
        open={open}
        onValueChange={(status) => setIsOpen(status)}
        anchor={({ open }) => (
          <Button mode="outlined" onPress={open} style={{ margin: 10 }}>
            Anchor
          </Button>
        )}
      >
        <Dialog.Trigger style={{ margin: 10 }} asChild={true}>
          <Button mode="contained">Trigger</Button>
        </Dialog.Trigger>
        <Dialog.Content>
          <Dialog.Header>
            <Dialog.Title>Dialog Title</Dialog.Title>
            <Dialog.Description>Dialog Description</Dialog.Description>
          </Dialog.Header>
          <Divider style={{ marginVertical: 10 }} />
          <View>
            <Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. It has survived for centuries and is still used in
              design and publishing today.
            </Text>
            <Row gap={10} justifyContent="flex-end" marginTop={20}>
              <Button
                mode="outlined"
                style={{ width: 100 }}
                onPress={() => setIsOpen(false)}
              >
                Close
              </Button>
              <Button
                mode="contained"
                style={{ width: 100 }}
                onPress={() => setIsOpen(false)}
              >
                Save
              </Button>
            </Row>
          </View>
        </Dialog.Content>
      </Dialog>
    </View>
  );
}`}
      props={{
        open: {
          type: "boolean",
          description: "Controls the visibility of the dialog.",
          required: false,
        },
        onValueChange: {
          type: "(status: boolean)=> void",
          description:
            "Callback function to be called when the dialog's visibility changes.",
          required: false,
        },
        anchor: {
          type: "(open: AnchorProps)=> React.ReactNode",
          description: "The anchor component that triggers the dialog.",
          required: false,
        },
      }}
    >
      <View>
        <Dialog
          open={open}
          onValueChange={(status) => setIsOpen(status)}
          anchor={({ open }) => (
            <Button mode="outlined" onPress={open} style={{ margin: 10 }}>
              Anchor
            </Button>
          )}
        >
          <Dialog.Trigger style={{ margin: 10 }} asChild={true}>
            <Button mode="contained">Trigger</Button>
          </Dialog.Trigger>
          <Dialog.Content style={{ padding: 20 }}>
            <Dialog.Header>
              <Dialog.Title>Dialog Title</Dialog.Title>
              <Dialog.Description>Dialog Description</Dialog.Description>
            </Dialog.Header>
            <View>
              <Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text for centuries.
              </Text>
            </View>
            <Dialog.Footer>
              <Button
                mode="outlined"
                style={{ width: 100 }}
                onPress={() => setIsOpen(false)}
              >
                Close
              </Button>
              <Button
                mode="contained"
                style={{ width: 100 }}
                onPress={() => setIsOpen(false)}
              >
                Save
              </Button>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog>
      </View>
    </DocsViewer>
  );
};

export default DialogDocsScreen;
