import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Button } from "@mainamiru/react-native-ui-kit";
import React from "react";
import { View } from "react-native";

const ButtonScreen = () => {
  return (
    <View style={{ padding: 10 }}>
      <Button
        loading={false}
        variant="contained"
        textColor="white"
        onPress={() => console.log("Hello")}
        icon={({ size, color }) => (
          <MaterialIcons name="add-circle" size={size} color={color} />
        )}
      >
        Hello
      </Button>
    </View>
  );
};

export default ButtonScreen;
