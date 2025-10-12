import React from "react";
import { Pressable, Text } from "react-native";
import { BottomSheet } from "../bottom-sheet";

export interface DateTimePickerProps {
  maxDate?: Date | string | number;
  minDate?: Date | string | number;
  selectedDate?: Date | string | number;
  onChange?: (date: Date) => void;
}

const DateTimePicker = ({
  maxDate,
  minDate,
  onChange,
  selectedDate,
}: DateTimePickerProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  console.log(minDate);
  console.log(maxDate);

  return (
    <>
      <Pressable
        onPress={() => setIsOpen(true)}
        style={{
          height: 50,
          borderWidth: 1,
          borderRadius: 5,
          borderColor: "grey",
        }}
      >
        <Text>
          {selectedDate ? new Date(selectedDate).toDateString() : "Select Date"}
        </Text>
      </Pressable>
      <BottomSheet
        open={isOpen}
        onOpen={() => setIsOpen(true)}
        onClose={() => setIsOpen(false)}
        contentStyle={{ height: 250 }}
      >
        <Text>Hello World</Text>
      </BottomSheet>
    </>
  );
};

export default DateTimePicker;
