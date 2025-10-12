import React, { useMemo, useState } from "react";
import {
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export interface DatePickerProps {
  visible: boolean;
  initialDate?: Date;
  onClose: () => void;
  onConfirm: (date: Date) => void;
}

export const DatePicker: React.FC<DatePickerProps> = ({
  visible,
  initialDate = new Date(),
  onClose,
  onConfirm,
}) => {
  const months = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    [],
  );

  const [day, setDay] = useState(initialDate.getDate());
  const [month, setMonth] = useState(initialDate.getMonth());
  const [year, setYear] = useState(initialDate.getFullYear());

  const daysInMonth = useMemo(() => {
    return new Date(year, month + 1, 0).getDate();
  }, [month, year]);

  const handleConfirm = () => {
    const selected = new Date(year, month, day);
    onConfirm(selected);
    onClose();
  };

  const renderScroll = (
    data: (string | number)[],
    selectedValue: string | number,
    onSelect: (value: number) => void,
  ) => (
    <ScrollView
      showsVerticalScrollIndicator={false}
      snapToInterval={40}
      decelerationRate="fast"
      contentContainerStyle={{ paddingVertical: 100 }}
    >
      {data.map((value, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => onSelect(index)}
          style={[
            styles.item,
            (value === selectedValue ||
              (typeof value === "number" && value === selectedValue)) &&
              styles.selectedItem,
          ]}
        >
          <Text
            style={[
              styles.itemText,
              (value === selectedValue ||
                (typeof value === "number" && value === selectedValue)) &&
                styles.selectedText,
            ]}
          >
            {value}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.title}>Choose date</Text>
          <Text style={styles.subtitle}>
            {new Date(year, month, day).toDateString()}
          </Text>

          <View style={styles.pickerRow}>
            {/* Day picker */}
            <View style={styles.column}>
              {renderScroll(
                Array.from({ length: daysInMonth }, (_, i) => i + 1),
                day,
                (i) => setDay(i + 1),
              )}
            </View>

            {/* Month picker */}
            <View style={styles.column}>
              {renderScroll(months, months[month], (i) => setMonth(i))}
            </View>

            {/* Year picker */}
            <View style={styles.column}>
              {renderScroll(
                Array.from({ length: 50 }, (_, i) => 1980 + i),
                year,
                (i) => setYear(1980 + i),
              )}
            </View>
          </View>

          <View style={styles.actions}>
            <TouchableOpacity onPress={onClose} style={styles.cancelButton}>
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleConfirm} style={styles.okButton}>
              <Text style={styles.okText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default DatePicker;

const styles = StyleSheet.create({
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
  },
  cancelButton: {
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    borderRadius: 8,
    flex: 1,
    marginRight: 6,
    paddingVertical: 10,
  },
  cancelText: {
    color: "#333",
    fontSize: 15,
  },
  column: {
    alignItems: "center",
    flex: 1,
  },
  container: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  item: {
    height: 40,
    justifyContent: "center",
  },
  itemText: {
    color: "#999",
    fontSize: 16,
    textAlign: "center",
  },
  okButton: {
    alignItems: "center",
    backgroundColor: "#007AFF",
    borderRadius: 8,
    flex: 1,
    marginLeft: 6,
    paddingVertical: 10,
  },
  okText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.4)",
    flex: 1,
    justifyContent: "flex-end",
  },
  pickerRow: {
    flexDirection: "row",
    height: 150,
    justifyContent: "space-evenly",
    marginBottom: 12,
  },
  selectedItem: {},
  selectedText: {
    color: "#000",
    fontSize: 18,
    fontWeight: "600",
  },
  subtitle: {
    color: "#666",
    fontSize: 13,
    marginBottom: 10,
    textAlign: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
    textAlign: "center",
  },
});
