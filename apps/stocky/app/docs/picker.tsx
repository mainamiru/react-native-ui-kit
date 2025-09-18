import { Picker } from "@mainamiru/react-native-ui-kit";
import React from "react";
import { View } from "react-native";

const PickerDocs = () => {
  return (
    <View style={{ padding: 10 }}>
      <Picker.Select>
        <Picker.Item value="1" label="Option 1" />
        <Picker.Item value="2" label="Option 2" />
        <Picker.Item value="3" label="Option 3" />
      </Picker.Select>
    </View>
  );
};

export default PickerDocs;
