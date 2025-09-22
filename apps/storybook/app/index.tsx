import { Button, Picker, Radio } from "@mainamiru/react-native-ui-kit";
import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  const [visible, setVisible] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState("love");

  return (
    <SafeAreaView>
      <View style={{ padding: 10 }}>
        <Text>Home Screen</Text>
        <Button onPress={() => setVisible(true)}>Open Picker</Button>
        <Picker.DateTime
          visible={visible}
          onConfirm={(value) => {
            console.log(value);
            setVisible(false);
          }}
          onClose={() => setVisible(false)}
        />
        <Radio.Group
          style={{ gap: 5 }}
          selectedValue={selectedValue}
          onValueChange={(value) => setSelectedValue(value)}
        >
          <Radio.Item value="love" label="Love" />
          <Radio.Item value="hate" label="Hate" />
        </Radio.Group>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
