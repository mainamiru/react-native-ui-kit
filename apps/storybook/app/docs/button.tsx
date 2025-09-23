import { useTheme } from "@/hooks";
import { MobileView } from "@/mobile";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Button,
  Code,
  Container,
  FlexView,
  Row,
  Table,
  Text,
} from "@mainamiru/react-native-ui-kit";
import React from "react";
import { ScrollView, View } from "react-native";

const ButtonDocsScreen = () => {
  const { colors } = useTheme();
  return (
    <Container style={{ flex: 1, backgroundColor: colors.card }}>
      <ScrollView contentContainerStyle={{ padding: 15, gap: 15 }}>
        <Text variant="titleLarge" style={{ fontSize: 40 }}>
          Button
        </Text>
        <Text variant="bodyLarge">
          ● A button is component that the user can press to trigger an action.
        </Text>
        <View style={{ gap: 15 }}>
          <Text variant="titleLarge" style={{ fontSize: 30 }}>
            Usage
          </Text>
          <Text variant="bodyLarge">
            Use the button component when you want users to take an action. You
            can customize the button by passing props to it. The button
            component accepts the following props:
          </Text>
          <Row flexWrap="wrap">
            <FlexView minWidth={300} flex={2}>
              <Code
                textColor="#000"
                backgroundColor="#f5f5f5"
                code={`import * as React from 'react';
import { Button } from '@mainamiru/react-native-ui-kit';

const MyComponent = () => (
  <View
    style={{
      gap: 10,
      flex: 1,
      padding: 20,
      justifyContent: "center",
    }}
  >
    <Button onPress={() => alert("Contained Button")}>Press Me</Button>

    <Button loading={true} variant="text" textColor="black">
      Loading
    </Button>

    <Button variant="outlined" textColor="black">
      Outlined
    </Button>

    <Button
      variant="outlined"
      textColor="black"
      icon={() => <MaterialCommunityIcons name="camera" />}
    >
      Camera Icon
    </Button>
  </View>
);

export default MyComponent;`}
              />
            </FlexView>
            <FlexView padding={15} minWidth={300} alignItems="center">
              <MobileView>
                <View
                  style={{
                    gap: 10,
                    flex: 1,
                    padding: 20,
                    justifyContent: "center",
                  }}
                >
                  <Button
                    textColor="white"
                    variant="contained"
                    onPress={() => alert("Contained Button")}
                  >
                    Press Me
                  </Button>
                  <Button
                    loading={true}
                    variant="text"
                    textColor="black"
                    onPress={() => alert("Text Button with loading")}
                  >
                    Loading
                  </Button>
                  <Button
                    variant="outlined"
                    textColor="black"
                    onPress={() => alert("Outlined Button")}
                  >
                    Outlined
                  </Button>
                  <Button
                    variant="outlined"
                    textColor="black"
                    icon={({ size, color }) => (
                      <MaterialCommunityIcons
                        name="camera"
                        size={size}
                        color={color}
                      />
                    )}
                    onPress={() => alert("Outlined Button with icon")}
                  >
                    Camera Icon
                  </Button>
                </View>
              </MobileView>
            </FlexView>
          </Row>
        </View>
        <View style={{ gap: 15 }}>
          <Text variant="titleLarge" style={{ fontSize: 30 }}>
            Props
          </Text>
          <Text variant="bodyLarge">
            The button component accepts the following props:
          </Text>
          <Table>
            <Table.Header>
              <Table.Title>Prop</Table.Title>
              <Table.Title>Type</Table.Title>
              <Table.Title>Required</Table.Title>
              <Table.Title>Default</Table.Title>
              <Table.Title colsSpan={2}>Description</Table.Title>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>variant</Table.Cell>
                <Table.Cell
                  textStyle={{ textAlign: "center" }}
                >{`'outlined' | 'text' | 'contained'`}</Table.Cell>
                <Table.Cell style={{ alignItems: "center" }}>No</Table.Cell>
                <Table.Cell style={{ alignItems: "center" }}>
                  "contained"
                </Table.Cell>
                <Table.Cell colsSpan={2}>
                  The variant of the button. It can be "outlined", "text", or
                  "contained".
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>onPress</Table.Cell>
                <Table.Cell textStyle={{ textAlign: "center" }}>
                  void
                </Table.Cell>
                <Table.Cell style={{ alignItems: "center" }}>No</Table.Cell>
                <Table.Cell style={{ alignItems: "center" }}>-</Table.Cell>
                <Table.Cell colsSpan={2}>
                  The callback function to be called when the button is pressed.
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>icon</Table.Cell>
                <Table.Cell textStyle={{ textAlign: "center" }}>
                  React.ReactNode
                </Table.Cell>
                <Table.Cell style={{ alignItems: "center" }}>No</Table.Cell>
                <Table.Cell style={{ alignItems: "center" }}>-</Table.Cell>
                <Table.Cell colsSpan={2}>
                  The icon to be displayed on the button.
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>loading</Table.Cell>
                <Table.Cell
                  textStyle={{ textAlign: "center" }}
                >{`boolean`}</Table.Cell>
                <Table.Cell style={{ alignItems: "center" }}>No</Table.Cell>
                <Table.Cell style={{ alignItems: "center" }}>-</Table.Cell>
                <Table.Cell colsSpan={2}>
                  Whether the button is in a loading state.
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>disabled</Table.Cell>
                <Table.Cell
                  textStyle={{ textAlign: "center" }}
                >{`boolean`}</Table.Cell>
                <Table.Cell style={{ alignItems: "center" }}>No</Table.Cell>
                <Table.Cell style={{ alignItems: "center" }}>-</Table.Cell>
                <Table.Cell colsSpan={2}>
                  Whether the button is disabled.
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </View>
      </ScrollView>
    </Container>
  );
};

export default ButtonDocsScreen;
