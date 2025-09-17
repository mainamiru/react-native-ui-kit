import {
  Avatar,
  BottomSheet,
  BottomSheetRef,
  Checkbox,
  Code,
  List,
  Sidebar,
  SidebarRef,
  Switch,
  Touchable,
  useToaster,
} from "@mainamiru/react-native-ui-kit";
import { Button } from "@react-navigation/elements";
import React from "react";
import { Text, View } from "react-native";

const HomeScreen = () => {
  const toast = useToaster();
  const sidebarRef = React.useRef<SidebarRef>(null);
  const bottomSheetRef = React.useRef<BottomSheetRef>(null);
  const [switchOn, setSwitchOn] = React.useState(false);
  return (
    <View style={{ padding: 10 }}>
      <Text>Home Screen</Text>
      <Code
        code={`// Example function
const add = (a: number, b: number): number => {
  return a + b;
};

console.log("Sum:", add(5, 10));`}
      />
      <Switch
        size="lg"
        value={switchOn}
        onValueChange={(value) => setSwitchOn(value)}
      />
      <List.Item
        title="Hello World"
        description="Do you want the drag gesture to behave like iOS (where even a small drag snaps correctly) or like Android (which usually needs a more decisive drag before toggling)"
        style={[
          {
            borderRadius: 10,
            marginVertical: 10,
          },
        ]}
        left={(style) => <Avatar size="lg" fallback="L" />}
      />
      <Touchable
        borderless={false}
        onPress={() => bottomSheetRef.current?.open()}
        style={{ padding: 10 }}
      >
        <Text>Open Bottom Sheet</Text>
      </Touchable>
      <Touchable
        borderless={false}
        onPress={() =>
          toast.success(
            "Do you want the drag gesture to behave like iOS (where even a small drag snaps correctly) or like Android (which usually needs a more decisive drag before toggling)",
            { duration: 5000 }
          )
        }
        style={{ padding: 10 }}
      >
        <Text>Success</Text>
      </Touchable>
      <Touchable
        borderless={false}
        onPress={() =>
          toast.error(
            "Do you want the drag gesture to behave like iOS (where even a small drag snaps correctly) or like Android (which usually needs a more decisive drag before toggling)",
            {
              duration: 5000,
              position: "top-right",
            }
          )
        }
        style={{ padding: 10 }}
      >
        <Text>Error</Text>
      </Touchable>
      <Touchable
        borderless={false}
        onPress={() =>
          toast.warn(
            "Do you want the drag gesture to behave like iOS (where even a small drag snaps correctly) or like Android (which usually needs a more decisive drag before toggling)"
          )
        }
        style={{ padding: 10 }}
      >
        <Text>Warn</Text>
      </Touchable>
      <Checkbox label="Hello" />
      <Sidebar
        ref={sidebarRef}
        open={switchOn}
        onOpenChange={(value) => setSwitchOn(value)}
      >
        <Text>Hello World</Text>
        <Button onPress={() => sidebarRef.current?.close()}>Close</Button>
      </Sidebar>
      <BottomSheet ref={bottomSheetRef}>
        <Text style={{ fontSize: 20, marginBottom: 16 }}>Sheet Content</Text>
        {Array.from({ length: 50 }).map((_, i) => (
          <Text key={i}>Item {i + 1}</Text>
        ))}
      </BottomSheet>
    </View>
  );
};

export default HomeScreen;
