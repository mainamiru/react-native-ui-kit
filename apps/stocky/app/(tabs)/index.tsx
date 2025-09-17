import { Switch } from "@mainamiru/react-native-ui-kit";
import React from "react";
import { Text, View } from "react-native";

const HomeScreen = () => {
  const [switchOn, setSwitchOn] = React.useState(false);
  return (
    <View style={{ padding: 10 }}>
      <Text>Home Screen</Text>
      <Switch
        value={switchOn}
        onValueChange={(value) => setSwitchOn(value)}
        trackColor={{ true: "green", false: "grey" }}
      />
    </View>
  );
};

export default HomeScreen;
