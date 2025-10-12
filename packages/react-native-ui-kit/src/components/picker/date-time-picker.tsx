import React from "react";
import { Pressable, Text } from "react-native";
import { useThemeColor } from "../../hooks";
import { monthNames } from "../../utils/data.utils";
import { BottomSheet } from "../bottom-sheet";
import { Button } from "../button";
import { Center } from "../center";
import { Row } from "../row";
import { Spinner } from "../spinner";

const months = monthNames;

export interface DateTimePickerProps {
  maxDate: Date | string | number;
  minDate: Date | string | number;
  onChange?: (date: string) => void;
  selectedDate?: Date | string | number;
  placeholderText?: string;
}

const DateTimePicker = ({
  maxDate,
  minDate,
  onChange,
  selectedDate,
  placeholderText = "Select Date",
}: DateTimePickerProps) => {
  const { border, placeholder } = useThemeColor();
  const _selectedDate = selectedDate ? new Date(selectedDate) : new Date();
  const [date, setDate] = React.useState<string>(
    _selectedDate.getDate().toString(),
  );
  const [year, setYear] = React.useState<number>(_selectedDate.getFullYear());
  const [month, setMonth] = React.useState<string>(
    monthNames[_selectedDate.getMonth()],
  );
  const [isOpen, setIsOpen] = React.useState(false);

  //variables
  const minYear = new Date(minDate).getFullYear();
  const maxYear = new Date(maxDate).getFullYear();
  const dates = Array.from({ length: 31 }).map((_, i) => {
    return String(i + 1).padStart(2, "0");
  });
  const years = Array.from({
    length: maxYear - minYear + 1,
  }).map((_, i) => i + minYear);

  return (
    <>
      <Pressable
        onPress={() => setIsOpen(true)}
        style={{
          height: 50,
          borderWidth: 1,
          borderRadius: 5,
          borderColor: border,
          justifyContent: "center",
        }}
      >
        <Text style={{ padding: 10, color: placeholder }}>
          {selectedDate
            ? new Date(selectedDate).toDateString()
            : placeholderText}
        </Text>
      </Pressable>
      <BottomSheet
        open={isOpen}
        onOpen={() => setIsOpen(true)}
        onClose={() => setIsOpen(false)}
        contentStyle={{
          gap: 20,
          padding: 20,
          justifyContent: "space-between",
        }}
      >
        <Center>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>
            {placeholderText}
          </Text>
          <Text style={{ fontSize: 18, color: placeholder }}>
            {date}-{month}-{year}
          </Text>
        </Center>
        <Row style={{ gap: 10 }}>
          <Spinner
            data={dates}
            itemHeight={70}
            style={{ flex: 1 }}
            onChange={(value) => setDate(value)}
          />
          <Spinner
            data={months}
            itemHeight={70}
            style={{ flex: 1 }}
            onChange={(value) => setMonth(value)}
          />
          <Spinner
            data={years}
            itemHeight={70}
            style={{ flex: 1 }}
            onChange={(value) => setYear(value)}
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
              const monthIndex = months.findIndex((m) => m === month);
              onChange?.(`${year}-${monthIndex}-${date}`);
            }}
          >
            OK
          </Button>
        </Row>
      </BottomSheet>
    </>
  );
};

export default DateTimePicker;
