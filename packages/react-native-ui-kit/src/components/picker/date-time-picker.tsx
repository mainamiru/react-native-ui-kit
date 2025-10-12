import { formatDate } from "date-fns";
import React from "react";
import { Pressable, Text } from "react-native";
import { useThemeColor } from "../../hooks";
import { monthNames } from "../../utils/data.utils";
import { BottomSheet } from "../bottom-sheet";
import { Button } from "../button";
import { Center } from "../center";
import { Row } from "../row";
import { Spinner } from "../spinner";

const months = monthNames.map((month, index) => ({
  value: index,
  label: month.slice(0, 3),
}));

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
  selectedDate = new Date(),
  placeholderText = "Select Date",
}: DateTimePickerProps) => {
  const { border, placeholder } = useThemeColor();
  const _selectedDate = selectedDate ? new Date(selectedDate) : new Date();
  const [date, setDate] = React.useState<number>(_selectedDate.getDate());
  const [year, setYear] = React.useState<number>(_selectedDate.getFullYear());
  const [month, setMonth] = React.useState<number>(_selectedDate.getMonth());
  const [isOpen, setIsOpen] = React.useState(false);

  //variables
  const minYear = new Date(minDate).getFullYear();
  const maxYear = new Date(maxDate).getFullYear();
  const dates = Array.from({ length: 31 }).map((_, i) => ({
    value: i + 1,
    label: String(i + 1).padStart(2, "0"),
  }));
  const years = Array.from({
    length: maxYear - minYear + 1,
  }).map((_, i) => ({
    value: i + minYear,
    label: String(i + minYear),
  }));

  const formattedDate = `${year}-${month}-${date}`;

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
            ? formatDate(selectedDate, "dd MMM yyyy")
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
            {formatDate(formattedDate, "dd-MM-yyyy")}
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
      </BottomSheet>
    </>
  );
};

export default DateTimePicker;
