import { DocsViewer } from "@/components";
import { Picker } from "@mainamiru/react-native-ui-kit";
import React from "react";
import { ScrollView, View } from "react-native";

const data = Array.from({ length: 20 }).map((_, i) => ({
  value: `Item ${i + 1}`,
  label: `Item ${i + 1}`,
}));

const PickerDocsScreen = () => {
  return (
    <DocsViewer
      title="Picker"
      description="Picker for DateTime, BottomSheet and Sidebar"
      exampleCode={`import * as React from "react";
import { Picker } from "@mainamiru/react-native-ui-kit";
const PickerDocsScreen = () => {
  return (
    <View style={{ padding: 10 }}>
      <Picker.Select label="Gender" helperText="This is BottomSheetPicker">
        <Picker.Item value="male" label="Male" />
        <Picker.Item value="female" label="Female" />
      </Picker.Select>

      <Picker.Select
        label="Gender"
        position="right"
        helperText="This is Sidebar Picker"
      >
        <Picker.Item value="male" label="Male" />
        <Picker.Item value="female" label="Female" />
      </Picker.Select>
    </View>
  );
};

export default PickerDocsScreen;
`}
      usage="Use the Picker component to allow users to select a value from a list of options. You can customize the picker by passing props to it. The picker component accepts the following props:"
    >
      <View style={{ padding: 10 }}>
        <Picker.Select
          data={data}
          mode="sidebar"
          label="Select City"
          // contentStyle={{ height: "90%" }}
          helperText="This is Sidebar Picker"
        />
        <Picker mode="sidebar">
          <Picker.Trigger label="Select City" helperText="Custom Picker" />
          <Picker.Content style={{ padding: 0 }}>
            <ScrollView>
              {data.map((item) => (
                <Picker.Item
                  key={item.value}
                  label={item.label}
                  value={item.value}
                  style={{
                    paddingVertical: 15,
                    borderBottomWidth: 1,
                    borderBottomColor: "#f5f5f5",
                  }}
                />
              ))}
            </ScrollView>
          </Picker.Content>
        </Picker>
      </View>
    </DocsViewer>
  );
};

export default PickerDocsScreen;
