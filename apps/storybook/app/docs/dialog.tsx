import { Button, Dialog, Divider, Row } from "@mainamiru/react-native-ui-kit";
import React from "react";
import { Text, View } from "react-native";

const DialogDocsScreen = () => {
  return (
    <View>
      <Dialog title="Dialog Title">
        <Dialog.Trigger mode="contained" style={{ margin: 10 }}>
          Hello
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
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Text>
            <Row gap={10} justifyContent="flex-end" marginTop={20}>
              <Button mode="outlined" style={{ width: 100 }}>
                Close
              </Button>
              <Button mode="contained" style={{ width: 100 }}>
                Save
              </Button>
            </Row>
          </View>
        </Dialog.Content>
      </Dialog>
    </View>
  );
};

export default DialogDocsScreen;
