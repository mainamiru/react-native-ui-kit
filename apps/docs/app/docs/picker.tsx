import { DocsViewer } from "@/components";
import { Picker } from "@mainamiru/react-native-ui-kit";
import React from "react";
import { ScrollView, View } from "react-native";

const data = Array.from({ length: 30 }).map((_, i) => ({
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
const data = Array.from({ length: 30 }).map((_, index) => ({
  value: Item +index,
  label: Item + index,
}));


const PickerDocsScreen = () => {
  return (
      <View style={{ padding: 10 }}>
        <Picker.Select
          data={data}
          mode="dialog"
          label="Select City"
          helperText="Dialog Picker"
          contentStyle={{ maxHeight: "70%" }}
        />
        <Picker.Select
          data={data}
          mode="sidebar"
          label="Select City"
          helperText="Sidebar Picker"
        />
        <Picker.Select
          data={data}
          mode="bottom-sheet"
          label="Select City"
          helperText="BottomSheet Picker"
          contentStyle={{ maxHeight: "70%" }}
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
  );
};

export default PickerDocsScreen;
`}
      usage="Use the Picker component to allow users to select a value from a list of options. You can customize the picker by passing props to it. The picker component accepts the following props:"
      props={{
        Select: {
          required: false,
          type: "PickerSelect",
          description: "Select picker",
          props: {
            data: {
              type: "T[]",
              required: true,
              description: "Data of the picker",
            },
            mode: {
              type: "'bottom-sheet' | 'sidebar' | 'dialog'",
              default: "bottom-sheet",
              required: false,
            },
            contentStyle: {
              type: "StyleProps<ViewStyle>",
              required: false,
              description: "Style of the content box",
            },
          },
        },
      }}
    >
      <View style={{ padding: 10 }}>
        <Picker.Select
          data={data}
          mode="dialog"
          label="Select City"
          helperText="Dialog Picker"
          contentStyle={{ maxHeight: "70%" }}
        />
        <Picker.Select
          data={data}
          mode="sidebar"
          label="Select City"
          helperText="Sidebar Picker"
        />
        <Picker.Select
          data={data}
          mode="bottom-sheet"
          label="Select City"
          helperText="BottomSheet Picker"
          contentStyle={{ maxHeight: "70%" }}
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
