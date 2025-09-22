import React, { useState } from "react";
import {
  Dimensions,
  Modal,
  PanResponder,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width } = Dimensions.get("window");
const CLOCK_SIZE = width * 0.7;

export interface DateTimePickerProps {
  visible: boolean;
  minDate?: Date;
  maxDate?: Date;
  onClose: () => void;
  onConfirm: (date: Date | null) => void;
}

export const DateTimePicker: React.FC<DateTimePickerProps> = ({
  visible,
  onClose,
  minDate,
  maxDate,
  onConfirm,
}) => {
  const [mode, setMode] = useState<"date" | "time">("date");
  const [selectedDate, setSelectedDate] = useState<Date>(minDate || new Date());
  const [tempDate, setTempDate] = useState<Date>(minDate || new Date());
  const [ampm, setAmPm] = useState<"AM" | "PM">(
    selectedDate.getHours() >= 12 ? "PM" : "AM"
  );
  const [clockHour, setClockHour] = useState(
    selectedDate.getHours() % 12 || 12
  );
  const [clockMinute, setClockMinute] = useState(selectedDate.getMinutes());

  const daysInMonth = (month: number, year: number) =>
    new Date(year, month + 1, 0).getDate();

  const handleDatePress = (day: number) => {
    const newDate = new Date(tempDate);
    newDate.setDate(day);
    setSelectedDate(newDate);
    setTempDate(newDate);
  };

  // --- Clock logic ---
  const handleClockTouch = (x: number, y: number) => {
    const cx = CLOCK_SIZE / 2;
    const cy = CLOCK_SIZE / 2;
    const dx = x - cx;
    const dy = y - cy;
    let angle = Math.atan2(dy, dx) * (180 / Math.PI) + 90;
    if (angle < 0) angle += 360;

    if (mode === "time") {
      if (selectingMinute) {
        const minute = Math.round(angle / 6) % 60;
        setClockMinute(minute);
        const newDate = new Date(selectedDate);
        newDate.setMinutes(minute);
        setSelectedDate(newDate);
      } else {
        let hour = Math.round(angle / 30) % 12;
        if (hour === 0) hour = 12;
        setClockHour(hour);
        let h = hour % 12;
        if (ampm === "PM") h += 12;
        const newDate = new Date(selectedDate);
        newDate.setHours(h);
        setSelectedDate(newDate);
      }
    }
  };

  const [selectingMinute, setSelectingMinute] = useState(false);

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderGrant: (e, g) => {
      handleClockTouch(g.x0 - width * 0.15, g.y0 - 150); // offset from clock container
    },
    onPanResponderMove: (e, g) => {
      handleClockTouch(g.moveX - width * 0.15, g.moveY - 150);
    },
  });

  const renderClock = () => {
    const hourAngles = Array.from({ length: 12 }, (_, i) => i + 1);
    const minuteAngles = Array.from({ length: 12 }, (_, i) => i * 5);

    return (
      <View style={styles.clockContainer}>
        <View style={styles.clock} {...panResponder.panHandlers}>
          {[...hourAngles, ...minuteAngles].map((num, idx) => {
            const angle = (num / 12) * 2 * Math.PI - Math.PI / 2;
            const radius = idx < 12 ? CLOCK_SIZE / 2 - 40 : CLOCK_SIZE / 2 - 20;
            const x = CLOCK_SIZE / 2 + radius * Math.cos(angle) - 10;
            const y = CLOCK_SIZE / 2 + radius * Math.sin(angle) - 10;
            return (
              <View key={idx} style={[styles.clockNumber, { left: x, top: y }]}>
                <Text style={styles.clockNumberText}>{num}</Text>
              </View>
            );
          })}
          <View
            style={[
              styles.clockHand,
              {
                transform: [
                  { translateX: -1 }, // half of hand width
                  { translateY: -CLOCK_SIZE / 4 },
                  { rotate: `${(clockHour % 12) * 30}deg` },
                  { translateY: CLOCK_SIZE / 4 }, // pivot back
                ],
              },
            ]}
          />
          <View
            style={[
              styles.minuteHand,
              {
                transform: [
                  { translateX: -1 }, // half of hand width
                  { translateY: -CLOCK_SIZE / 4 },
                  { rotate: `${clockMinute * 6}deg` },
                  { translateY: CLOCK_SIZE / 4 }, // pivot back
                ],
              },
            ]}
          />
          <View style={styles.clockCenter} />
        </View>
        <View style={styles.ampmContainer}>
          {["AM", "PM"].map((p) => (
            <TouchableOpacity
              key={p}
              style={[
                styles.ampmBtn,
                ampm === p && { backgroundColor: "#3f51b5" },
              ]}
              onPress={() => {
                setAmPm(p as "AM" | "PM");
                const newDate = new Date(selectedDate);
                let h = newDate.getHours();
                if (p === "PM" && h < 12) h += 12;
                if (p === "AM" && h >= 12) h -= 12;
                newDate.setHours(h);
                setSelectedDate(newDate);
              }}
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
            const isSelected =
              d &&
              selectedDate &&
              d === selectedDate.getDate() &&
              month === selectedDate.getMonth();
            return (
              <TouchableOpacity
                key={idx}
                style={[styles.dateCell, isSelected && styles.activeDate]}
                onPress={() => d && handleDatePress(d)}
              >
                {d && (
                  <Text
                    style={[
                      styles.dateText,
                      isSelected && styles.activeDateText,
                    ]}
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

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.backdrop}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>
              {selectedDate.toDateString()}{" "}
              {selectedDate.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
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

          {mode === "date" ? renderCalendar() : renderClock()}

          <View style={styles.footer}>
            <TouchableOpacity onPress={onClose}>
              <Text style={styles.cancel}>CANCEL</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onConfirm(selectedDate)}>
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
  header: { backgroundColor: "#3f51b5", padding: 16 },
  headerText: { fontSize: 16, color: "#fff" },
  modeSwitch: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  switchBtn: { flex: 1, padding: 12, alignItems: "center" },
  activeTab: { borderBottomWidth: 3, borderBottomColor: "#f44336" },
  switchText: { fontSize: 16, color: "#777" },
  activeText: { color: "#000", fontWeight: "600" },
  calendar: { padding: 16 },
  monthHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  monthText: { fontSize: 16, fontWeight: "600" },
  navArrow: { fontSize: 18, color: "#333" },
  weekRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 8,
  },
  weekDay: { fontSize: 14, color: "#999" },
  dateGrid: { flexDirection: "row", flexWrap: "wrap" },
  dateCell: {
    width: `${100 / 7}%`,
    aspectRatio: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  dateText: { fontSize: 16, color: "#333" },
  activeDate: { backgroundColor: "#3f51b5", borderRadius: 20 },
  activeDateText: { color: "#fff", fontWeight: "bold" },
  clockContainer: { alignItems: "center", paddingVertical: 16 },
  clock: {
    width: CLOCK_SIZE,
    height: CLOCK_SIZE,
    borderRadius: CLOCK_SIZE / 2,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
  },
  clockNumber: {
    position: "absolute",
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  clockNumberText: { fontSize: 14, color: "#333" },
  clockHand: {
    position: "absolute",
    width: 2,
    height: CLOCK_SIZE / 2,
    backgroundColor: "#3f51b5",
    top: CLOCK_SIZE / 2,
    left: CLOCK_SIZE / 2,
    borderRadius: 1,
  },
  minuteHand: {
    position: "absolute",
    width: 2,
    height: CLOCK_SIZE / 2,
    backgroundColor: "#f44336",
    top: CLOCK_SIZE / 2,
    left: CLOCK_SIZE / 2,
    borderRadius: 1,
  },

  clockCenter: {
    position: "absolute",
    width: 12,
    height: 12,
    backgroundColor: "#000",
    borderRadius: 6,
    top: CLOCK_SIZE / 2 - 6,
    left: CLOCK_SIZE / 2 - 6,
  },
  ampmContainer: { flexDirection: "row", marginTop: 12 },
  ampmBtn: {
    padding: 10,
    borderRadius: 6,
    marginHorizontal: 8,
    backgroundColor: "#eee",
  },
  ampmText: { fontSize: 16, color: "#333" },
  switchButton: {
    marginTop: 12,
    padding: 8,
    backgroundColor: "#3f51b5",
    borderRadius: 6,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
  },
  cancel: { fontSize: 16, color: "#3f51b5" },
  ok: { fontSize: 16, color: "#3f51b5", fontWeight: "bold" },
});
