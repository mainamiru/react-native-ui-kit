import { DocsViewer } from "@/components";
import { Picker } from "@mainamiru/react-native-ui-kit";
import React from "react";
import { View } from "react-native";

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

      {/* DateTime Picker */}
      <Picker.DateTime
        label="Date of Birth"
        helperText="This is DateTime Picker"
      />
    </View>
  );
};

export default PickerDocsScreen;
`}
      usage="Use the Picker component to allow users to select a value from a list of options. You can customize the picker by passing props to it. The picker component accepts the following props:"
    >
      <View>
        <Picker.Select label="Gender" helperText="This is BottomSheet Picker">
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
        <Picker.DateTime
          label="Date of Birth"
          helperText="This is DateTime Picker"
        />
      </View>
    </DocsViewer>
  );
};

export default PickerDocsScreen;
