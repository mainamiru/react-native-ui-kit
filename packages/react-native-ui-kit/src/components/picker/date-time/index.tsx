import * as React from "react";
import { Platform, StyleProp, TextStyle, View, ViewStyle } from "react-native";
import { useThemeColor } from "../../../hooks";
import { BottomSheet, BottomSheetRef } from "../../bottom-sheet";
import Button from "../../button";
import { FlexView } from "../../flex-view";
import { PickerSelectContext } from "../../picker/picker-context";
import Row from "../../row";
import { SidebarRef } from "../../sidebar";
import { Tabs } from "../../tabs";
import { Text } from "../../text";
import TouchRipple from "../../touch-ripple";
import DatePicker from "./date-picker";
import TimePicker from "./time-picker";

export interface DateTimePickerProps {
  label?: string;
  selectedValue?: string;
  autoClose?: boolean;
  helperText?: string;
  placeholderText?: string;
  style?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  onValueChange?: (value: string) => void;
  helperTextStyle?: StyleProp<TextStyle>;
}

const DateTimePicker = ({
  label,
  style,
  helperText,
  labelStyle,
  inputStyle,
  selectedValue,
  onValueChange,
  autoClose = true,
  helperTextStyle,
  placeholderText = "Select",
}: DateTimePickerProps) => {
  const { border, placeholder } = useThemeColor();
  const sidebarRef = React.useRef<SidebarRef>(null);
  const bottomSheetRef = React.useRef<BottomSheetRef>(null);
  const [value, setValue] = React.useState<string>(selectedValue);

  //handle change
  React.useEffect(() => {
    if (value && onValueChange) {
      onValueChange(value);
    }
    if (autoClose) {
      sidebarRef.current?.close();
      bottomSheetRef.current?.close();
    }
  }, [value, autoClose, onValueChange]);

  return (
    <PickerSelectContext.Provider value={{ value, setValue }}>
      <View style={[{ gap: 5 }, style]}>
        {label && (
          <Text
            style={[
              {
                fontSize: 14,
                fontWeight: "500",
              },
              labelStyle,
            ]}
          >
            {label}
          </Text>
        )}
        <TouchRipple
          onPress={() => {
            bottomSheetRef.current?.open();
          }}
          style={[
            {
              padding: 10,
              borderWidth: 1,
              borderRadius: 5,
              borderColor: border,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              height: Platform.OS === "web" ? 40 : 50,
            },
            inputStyle,
          ]}
        >
          <FlexView style={{ justifyContent: "center" }}>
            {value ? (
              <Text
                numberOfLines={1}
                style={{
                  fontWeight: "500",
                  textTransform: "capitalize",
                }}
              >
                {value}
              </Text>
            ) : (
              <Text style={{ color: placeholder }}>{placeholderText}</Text>
            )}
          </FlexView>
          <Text style={{ color: placeholder }}>⌵</Text>
        </TouchRipple>
        {helperText && (
          <Text style={[{ color: "grey" }, helperTextStyle]}>{helperText}</Text>
        )}
      </View>
      <BottomSheet
        ref={bottomSheetRef}
        closeOnPressBack={false}
        closeOnPressBackdrop={false}
        contentStyle={{ height: "50%" }}
      >
        <FlexView>
          <Tabs defaultValue="date">
            <Tabs.Header>
              <Tabs.Trigger value="date" style={{ flex: 1 }}>
                Date
              </Tabs.Trigger>
              <Tabs.Trigger value="time" style={{ flex: 1 }}>
                Time
              </Tabs.Trigger>
            </Tabs.Header>
            <Tabs.Content value="date">
              <DatePicker />
            </Tabs.Content>
            <Tabs.Content value="time">
              <TimePicker />
            </Tabs.Content>
          </Tabs>
        </FlexView>
        <Row alignItems="center" width="100%" padding={10} gap={10}>
          <Button
            style={{ flex: 1 }}
            mode="contained"
            buttonColor="red"
            textColor="white"
            onPress={() => bottomSheetRef.current?.close()}
          >
            Cancel
          </Button>
          <Button
            style={{ flex: 1 }}
            mode="contained"
            textColor="white"
            onPress={() => bottomSheetRef.current?.close()}
          >
            Done
          </Button>
        </Row>
      </BottomSheet>
    </PickerSelectContext.Provider>
  );
};

export default DateTimePicker;
