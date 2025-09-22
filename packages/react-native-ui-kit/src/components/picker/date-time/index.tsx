import React, { useState } from "react";
import {
  Dimensions,
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
const { width } = Dimensions.get("window");

export interface DateTimePickerProps {
  visible: boolean;
  minDate?: Date;
  maxDate?: Date;
  onClose: () => void;
  onConfirm: (range: { start: Date | null; end: Date | null }) => void;
}

export const DateTimePicker: React.FC<DateTimePickerProps> = ({
  visible,
  onClose,
  minDate,
  maxDate,
  onConfirm,
}) => {
  const [mode, setMode] = useState<"date" | "time">("date");
  const [selecting, setSelecting] = useState<"start" | "end">("start");

  const [startDate, setStartDate] = useState<Date | null>(minDate || null);
  const [endDate, setEndDate] = useState<Date | null>(maxDate || null);

  const [tempDate, setTempDate] = useState<Date>(minDate || new Date());

  const daysInMonth = (month: number, year: number) =>
    new Date(year, month + 1, 0).getDate();

  const handleDatePress = (day: number) => {
    const newDate = new Date(tempDate);
    newDate.setDate(day);

    if (selecting === "start") {
      setStartDate(newDate);
      setSelecting("end");
    } else {
      if (startDate && newDate < startDate) {
        // swap if end < start
        setEndDate(startDate);
        setStartDate(newDate);
      } else {
        setEndDate(newDate);
      }
      setSelecting("start");
    }
    setTempDate(newDate);
  };

  const isInRange = (d: number) => {
    if (!startDate || !endDate) return false;
    const date = new Date(tempDate);
    date.setDate(d);
    return date >= startDate && date <= endDate;
  };

  const renderCalendar = () => {
    const year = tempDate.getFullYear();
    const month = tempDate.getMonth();
    const days = daysInMonth(month, year);

    const firstDay = new Date(year, month, 1).getDay();
    const dates = Array(firstDay)
      .fill(null)
      .concat(Array.from({ length: days }, (_, i) => i + 1));

    return (
      <View style={styles.calendar}>
        <View style={styles.monthHeader}>
          <TouchableOpacity
            onPress={() =>
              setTempDate(new Date(year, month - 1, tempDate.getDate()))
            }
          >
            <Text style={styles.navArrow}>◀</Text>
          </TouchableOpacity>
          <Text style={styles.monthText}>
            {tempDate.toLocaleString("default", {
              month: "long",
              year: "numeric",
            })}
          </Text>
          <TouchableOpacity
            onPress={() =>
              setTempDate(new Date(year, month + 1, tempDate.getDate()))
            }
          >
            <Text style={styles.navArrow}>▶</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.weekRow}>
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
            <Text key={d} style={styles.weekDay}>
              {d}
            </Text>
          ))}
        </View>
        <View style={styles.dateGrid}>
          {dates.map((d, idx) => {
            const isStart =
              d &&
              startDate &&
              d === startDate.getDate() &&
              month === startDate.getMonth();
            const isEnd =
              d &&
              endDate &&
              d === endDate.getDate() &&
              month === endDate.getMonth();
            const selected = isStart || isEnd;
            const inRange = d && isInRange(d);

            return (
              <TouchableOpacity
                key={idx}
                style={[
                  styles.dateCell,
                  selected && styles.activeDate,
                  inRange && styles.rangeDate,
                ]}
                onPress={() => d && handleDatePress(d)}
              >
                {d && (
                  <Text
                    style={[styles.dateText, selected && styles.activeDateText]}
                  >
                    {d}
                  </Text>
                )}
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    );
  };

  const renderTime = () => {
    const hours = Array.from({ length: 12 }, (_, i) => i + 1);
    const minutes = Array.from({ length: 60 }, (_, i) => i);

    const [ampm, setAmPm] = useState<"AM" | "PM">("AM");

    const handleTimeSelect = (hour: number, minute: number) => {
      if (!startDate) return;
      const newDate = new Date(startDate);
      let h = hour % 12;
      if (ampm === "PM") h += 12;
      newDate.setHours(h);
      newDate.setMinutes(minute);
      setStartDate(newDate);
    };

    return (
      <View style={styles.timePicker}>
        <FlatList
          data={hours}
          horizontal
          keyExtractor={(item) => `h-${item}`}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.timeItem}
              onPress={() =>
                handleTimeSelect(item, startDate?.getMinutes() || 0)
              }
            >
              <Text style={styles.timeText}>{item}</Text>
            </TouchableOpacity>
          )}
        />
        <FlatList
          data={minutes}
          horizontal
          keyExtractor={(item) => `m-${item}`}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.timeItem}
              onPress={() => handleTimeSelect(startDate?.getHours() || 0, item)}
            >
              <Text style={styles.timeText}>
                {item.toString().padStart(2, "0")}
              </Text>
            </TouchableOpacity>
          )}
        />
        <View>
          {["AM", "PM"].map((p) => (
            <TouchableOpacity
              key={p}
              style={[
                styles.ampmBtn,
                ampm === p && { backgroundColor: "#3f51b5" },
              ]}
              onPress={() => setAmPm(p as "AM" | "PM")}
            >
              <Text
                style={[
                  styles.ampmText,
                  ampm === p && { color: "#fff", fontWeight: "bold" },
                ]}
              >
                {p}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.backdrop}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>
              {startDate ? startDate.toDateString() : "Start Date"} →{" "}
              {endDate ? endDate.toDateString() : "End Date"}
            </Text>
          </View>

          <View style={styles.modeSwitch}>
            <TouchableOpacity
              onPress={() => setMode("date")}
              style={[styles.switchBtn, mode === "date" && styles.activeTab]}
            >
              <Text
                style={[
                  styles.switchText,
                  mode === "date" && styles.activeText,
                ]}
              >
                Date
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setMode("time")}
              style={[styles.switchBtn, mode === "time" && styles.activeTab]}
            >
              <Text
                style={[
                  styles.switchText,
                  mode === "time" && styles.activeText,
                ]}
              >
                Time
              </Text>
            </TouchableOpacity>
          </View>

          {mode === "date" ? renderCalendar() : renderTime()}

          <View style={styles.footer}>
            <TouchableOpacity onPress={onClose}>
              <Text style={styles.cancel}>CANCEL</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onConfirm({ start: startDate, end: endDate })}
            >
              <Text style={styles.ok}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default DateTimePicker;

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  container: {
    width: width * 0.9,
    backgroundColor: "#fff",
    borderRadius: 12,
    overflow: "hidden",
  },
  header: {
    backgroundColor: "#3f51b5",
    padding: 16,
  },
  headerText: {
    fontSize: 16,
    color: "#fff",
  },
  modeSwitch: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  switchBtn: {
    flex: 1,
    padding: 12,
    alignItems: "center",
  },
  activeTab: {
    borderBottomWidth: 3,
    borderBottomColor: "#f44336",
  },
  switchText: {
    fontSize: 16,
    color: "#777",
  },
  activeText: {
    color: "#000",
    fontWeight: "600",
  },
  calendar: {
    padding: 16,
  },
  monthHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  monthText: {
    fontSize: 16,
    fontWeight: "600",
  },
  navArrow: {
    fontSize: 18,
    color: "#333",
  },
  weekRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 8,
  },
  weekDay: {
    fontSize: 14,
    color: "#999",
  },
  dateGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  dateCell: {
    width: `${100 / 7}%`,
    aspectRatio: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  dateText: {
    fontSize: 16,
    color: "#333",
  },
  activeDate: {
    backgroundColor: "#3f51b5",
    borderRadius: 20,
  },
  activeDateText: {
    color: "#fff",
    fontWeight: "bold",
  },
  rangeDate: {
    backgroundColor: "#c5cae9",
    borderRadius: 20,
  },
  timePicker: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 16,
  },
  timeItem: {
    marginHorizontal: 8,
    padding: 8,
  },
  timeText: {
    fontSize: 18,
    color: "#333",
  },
  ampmBtn: {
    padding: 10,
    borderRadius: 6,
    marginVertical: 4,
    backgroundColor: "#eee",
  },
  ampmText: {
    fontSize: 16,
    color: "#333",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
  },
  cancel: {
    fontSize: 16,
    color: "#3f51b5",
  },
  ok: {
    fontSize: 16,
    color: "#3f51b5",
    fontWeight: "bold",
  },
});
