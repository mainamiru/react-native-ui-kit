import React from "react";
import {
  Pressable,
  StyleProp,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import { useThemeColor } from "../../hooks";
import { monthNames } from "../../utils/data.utils";
import { BottomSheet } from "../bottom-sheet";
import { Button } from "../button";
import { Center } from "../center";
import { Row } from "../row";
import { Spinner } from "../spinner";
import { PickerRef } from "./utils";

const months = monthNames.map((month, index) => ({
  value: index,
  label: month.slice(0, 3),
}));

export interface DateTimePickerProps {
  label?: string;
  helperText?: string;
  selectable?: boolean;
  showTrigger?: boolean;
  placeholderText?: string;
  selectedDate?: Date | string;
  style?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  helperTextStyle?: StyleProp<TextStyle>;
  onChange?: (date: string) => void;
}

const DateTimePicker = React.forwardRef<PickerRef, DateTimePickerProps>(
  (
    {
      style,
      label,
      onChange,
      helperText,
      labelStyle,
      contentStyle,
      helperTextStyle,
      containerStyle,
      selectable = true,
      showTrigger = true,
      selectedDate = new Date(),
      placeholderText = "Select Date",
    },
    ref?: React.RefObject<PickerRef>,
  ) => {
    const { border, placeholder } = useThemeColor();
    const _selectedDate = selectedDate ? new Date(selectedDate) : new Date();
    const [date, setDate] = React.useState<number>(_selectedDate.getDate());
    const [year, setYear] = React.useState<number>(_selectedDate.getFullYear());
    const [month, setMonth] = React.useState<number>(_selectedDate.getMonth());
    const [isOpen, setIsOpen] = React.useState(false);

    //variables
    const currenYear = new Date().getFullYear();
    const maxYear = currenYear + 25;
    const minYear = currenYear - 50;
    const dates = Array.from({ length: 31 }).map((_, i) => ({
      value: i + 1,
      label: String(i + 1).padStart(2, "0"),
    }));
    const years = Array.from({ length: maxYear - minYear + 1 }).map((_, i) => ({
      value: i + minYear,
      label: String(i + minYear),
    }));

    const formattedDate = `${year}-${month}-${date}`;

    React.useImperativeHandle(ref, () => ({
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
    }));

    return (
      <>
        {showTrigger && (
          <View style={[{ gap: 5 }, style]}>
            {label && (
              <Text style={[{ fontWeight: "500" }, labelStyle]}>{label}</Text>
            )}
            <Pressable
              disabled={!selectable}
              onPress={() => setIsOpen(true)}
              style={[
                {
                  height: 50,
                  borderWidth: 1,
                  borderRadius: 5,
                  borderColor: border,
                  justifyContent: "center",
                },
                containerStyle,
                !selectable && {
                  borderColor: "#c8cfcd",
                },
              ]}
            >
              <Text style={{ padding: 10, color: placeholder }}>
                {selectedDate
                  ? new Date(selectedDate).toDateString()
                  : placeholderText}
              </Text>
            </Pressable>
            {helperText && (
              <Text
                style={[{ fontSize: 13, color: placeholder }, helperTextStyle]}
              >
                {helperText}
              </Text>
            )}
          </View>
        )}
        <BottomSheet
          open={isOpen}
          contentStyle={contentStyle}
          onOpen={() => setIsOpen(true)}
          onClose={() => setIsOpen(false)}
        >
          <View style={{ gap: 20, padding: 20 }}>
            <Center>
              <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                {placeholderText}
              </Text>
              <Text style={{ fontSize: 18, color: "grey" }}>
                {new Date(formattedDate).toDateString()}
              </Text>
            </Center>
            <Row style={{ gap: 10 }}>
              <Spinner
                data={dates}
                itemHeight={70}
                style={{ flex: 1 }}
                selectedValue={date}
                onChange={({ value }) => setDate(Number(value))}
              />
              <Spinner
                data={months}
                itemHeight={70}
                style={{ flex: 1 }}
                selectedValue={month}
                onChange={({ value }) => setMonth(Number(value))}
              />
              <Spinner
                data={years}
                itemHeight={70}
                style={{ flex: 1 }}
                selectedValue={year}
                onChange={({ value }) => setYear(Number(value))}
              />
            </Row>
            <Row style={{ gap: 15 }}>
              <Button
                mode="contained"
                style={{ flex: 1 }}
                onPress={() => setIsOpen(false)}
                buttonColor="red"
              >
                Cancel
              </Button>
              <Button
                mode="contained"
                style={{ flex: 1 }}
                onPress={() => {
                  setIsOpen(false);
                  onChange?.(formattedDate);
                }}
              >
                OK
              </Button>
            </Row>
          </View>
        </BottomSheet>
      </>
    );
  },
);

DateTimePicker.displayName = "DateTimePicker";
export default DateTimePicker;
