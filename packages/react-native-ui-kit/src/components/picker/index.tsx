import DatePicker from "./date-picker";
import DateTimePicker from "./date-time-picker";
import PickerBase from "./picker-base";
import PickerContent from "./picker-content";
import PickerItem from "./picker-item";
import PickerSelect from "./picker-select";
import PickerTrigger from "./picker-trigger";

export const Picker = Object.assign(PickerBase, {
  Item: PickerItem,
  Select: PickerSelect,
  Content: PickerContent,
  Trigger: PickerTrigger,
  DateTime: DateTimePicker,
  Date: DatePicker,
});
