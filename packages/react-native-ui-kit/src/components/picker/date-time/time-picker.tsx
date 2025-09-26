import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  GestureResponderEvent,
  PanResponder,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";

export interface TimePickerProps {
  clockSize?: number; // diameter of the clock
  style?: StyleProp<ViewStyle>; // custom container style
  showNumbers?: boolean; // show clock numbers
  hour?: number; // initial hour (0-23)
  minute?: number; // initial minute (0-59)
  onChange?: (hour: number, minute: number) => void; // callback when time changes
  showAMPM?: boolean; // show AM/PM toggle
  clockType?: "12h" | "24h"; // 12-hour or 24-hour format
  handColor?: string; // color of the clock hands
  numberColor?: string; // color of the clock numbers
  selectedColor?: string; // color of the selected time indicator
}

export const TimePicker: React.FC<TimePickerProps> = ({
  clockSize = 150,
  style,
  showNumbers = true,
  hour = 10,
  minute = 15,
  onChange,
  showAMPM = true,
  clockType = "12h",
  handColor = "#007AFF",
  numberColor = "#333",
  selectedColor = "#007AFF",
}) => {
  const [selectedHour, setSelectedHour] = useState(hour);
  const [selectedMinute, setSelectedMinute] = useState(minute);
  const [isHourSelection, setIsHourSelection] = useState(true);
  const [isAM, setIsAM] = useState(hour < 12);

  const radius = clockSize / 2;
  const numbers = useMemo(
    () =>
      isHourSelection
        ? Array.from({ length: clockType === "12h" ? 12 : 24 }, (_, i) => i + 1)
        : Array.from({ length: 12 }, (_, i) => i * 5),
    [isHourSelection, clockType],
  );

  // Update internal state when props change
  useEffect(() => {
    setSelectedHour(hour);
    setSelectedMinute(minute);
    if (clockType === "12h") {
      setIsAM(hour < 12);
    }
  }, [hour, minute, clockType]);

  // Calculate angles
  const displayHour =
    clockType === "12h" ? selectedHour % 12 || 12 : selectedHour;
  const hourAngle = useMemo(
    () =>
      isHourSelection ? 0 : (displayHour % 12) * 30 + selectedMinute * 0.5,
    [displayHour, selectedMinute, isHourSelection],
  );

  const minuteAngle = useMemo(
    () => (isHourSelection ? 0 : selectedMinute * 6),
    [selectedMinute, isHourSelection],
  );

  // Handle touch events
  const handleTouch = useCallback(
    (event: GestureResponderEvent) => {
      const { locationX, locationY } = event.nativeEvent;
      const x = locationX - radius;
      const y = locationY - radius;
      let angle = Math.atan2(y, x) * (180 / Math.PI) + 90;
      if (angle < 0) angle += 360;

      if (isHourSelection) {
        // Handle hour selection
        let newHour = Math.round(angle / 30) % 12 || 12;
        if (clockType === "24h") {
          // For 24h clock, outer ring is 13-24, inner is 1-12
          const distance = Math.sqrt(x * x + y * y);
          if (distance > radius * 0.5) {
            newHour = (newHour % 12) + 12;
          }
        } else if (clockType === "12h" && !isAM) {
          // For 12h PM time
          newHour = (newHour % 12) + 12;
        }
        setSelectedHour(newHour);
        onChange?.(newHour, selectedMinute);
      } else {
        // Handle minute selection
        const newMinute = Math.round(angle / 6) % 60;
        setSelectedMinute(newMinute);
        onChange?.(selectedHour, newMinute);
      }
    },
    [
      radius,
      isHourSelection,
      clockType,
      isAM,
      selectedHour,
      selectedMinute,
      onChange,
    ],
  );

  // Toggle between hour and minute selection
  const toggleSelectionMode = useCallback(() => {
    setIsHourSelection(!isHourSelection);
  }, [isHourSelection]);

  // Toggle AM/PM
  const toggleAMPM = useCallback(() => {
    if (clockType === "12h") {
      const newIsAM = !isAM;
      setIsAM(newIsAM);
      const newHour = newIsAM ? selectedHour - 12 : selectedHour + 12;
      setSelectedHour(newHour);
      onChange?.(newHour, selectedMinute);
    }
  }, [isAM, selectedHour, selectedMinute, clockType, onChange]);

  // Create pan responder for better touch handling
  const panResponder = useMemo(
    () =>
      PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponder: () => true,
        onPanResponderGrant: handleTouch,
        onPanResponderMove: handleTouch,
      }),
    [handleTouch],
  );

  return (
    <View style={[styles.container, style]}>
      <View
        style={[
          styles.clockContainer,
          {
            width: clockSize,
            height: clockSize,
            borderRadius: radius,
            backgroundColor: "#fff",
            elevation: 4,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
          },
        ]}
        {...panResponder.panHandlers}
      >
        {/* Clock face */}
        <View style={[StyleSheet.absoluteFill, styles.clockFace]}>
          {showNumbers &&
            numbers.map((num) => {
              const isSelected =
                (isHourSelection &&
                  ((clockType === "12h" && num === (selectedHour % 12 || 12)) ||
                    (clockType === "24h" && num === selectedHour))) ||
                (!isHourSelection && num === selectedMinute);

              const angle = isHourSelection
                ? ((num - 1) * (clockType === "12h" ? 30 : 15) - 60) *
                  (Math.PI / 180)
                : ((num / 5) * 30 - 60) * (Math.PI / 180);

              const distance =
                isHourSelection && clockType === "24h" && num > 12 ? 0.6 : 0.75;
              const x = radius + radius * distance * Math.cos(angle) - 15;
              const y = radius + radius * distance * Math.sin(angle) - 15;

              return (
                <View
                  key={`${isHourSelection ? "hour" : "min"}-${num}`}
                  style={[
                    styles.numberContainer,
                    {
                      left: x,
                      top: y,
                      backgroundColor: isSelected
                        ? selectedColor
                        : "transparent",
                      width: 30,
                      height: 30,
                      borderRadius: 15,
                      justifyContent: "center",
                      alignItems: "center",
                    },
                  ]}
                >
                  <Text
                    style={[
                      styles.number,
                      {
                        fontSize: clockSize * 0.08,
                        color: isSelected ? "#fff" : numberColor,
                        fontWeight: isSelected ? "bold" : "normal",
                      },
                    ]}
                  >
                    {num}
                  </Text>
                </View>
              );
            })}
        </View>

        {/* Minute hand */}
        <View
          style={[
            styles.hand,
            {
              height: radius * 0.7,
              backgroundColor: handColor,
              width: 4,
              transform: [
                { translateX: -2 },
                { translateY: -radius * 0.7 },
                { rotate: `${minuteAngle}deg` },
              ],
              left: radius,
              top: radius,
              opacity: isHourSelection ? 0.5 : 1,
            },
          ]}
        />

        {/* Hour hand */}
        <View
          style={[
            styles.hand,
            {
              height: radius * 0.5,
              backgroundColor: handColor,
              width: 6,
              transform: [
                { translateX: -3 },
                { translateY: -radius * 0.5 },
                { rotate: `${hourAngle}deg` },
              ],
              left: radius,
              top: radius,
              opacity: isHourSelection ? 1 : 0.5,
            },
          ]}
        />

        {/* Clock center dot */}
        <View
          style={[
            styles.centerDot,
            {
              left: radius - 8,
              top: radius - 8,
              backgroundColor: handColor,
            },
          ]}
        />
      </View>

      {/* Time display and mode toggle */}
      <View style={styles.timeDisplayContainer}>
        <TouchableOpacity
          style={[
            styles.timeDisplayButton,
            isHourSelection && styles.activeTimeDisplayButton,
          ]}
          onPress={toggleSelectionMode}
        >
          <Text
            style={[
              styles.timeDisplayText,
              isHourSelection && styles.activeTimeDisplayText,
            ]}
          >
            {String(selectedHour).padStart(2, "0")}
          </Text>
        </TouchableOpacity>

        <Text style={styles.timeSeparator}>:</Text>

        <TouchableOpacity
          style={[
            styles.timeDisplayButton,
            !isHourSelection && styles.activeTimeDisplayButton,
          ]}
          onPress={toggleSelectionMode}
        >
          <Text
            style={[
              styles.timeDisplayText,
              !isHourSelection && styles.activeTimeDisplayText,
            ]}
          >
            {String(selectedMinute).padStart(2, "0")}
          </Text>
        </TouchableOpacity>

        {showAMPM && clockType === "12h" && (
          <TouchableOpacity
            style={[
              styles.ampmButton,
              { backgroundColor: isAM ? "#f0f0f0" : "#e0e0e0" },
            ]}
            onPress={toggleAMPM}
          >
            <Text
              style={[
                styles.ampmText,
                { color: isAM ? selectedColor : "#666" },
              ]}
            >
              AM
            </Text>
            <Text
              style={[
                styles.ampmText,
                { color: !isAM ? selectedColor : "#666" },
              ]}
            >
              PM
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  activeTimeDisplayButton: {
    backgroundColor: "#e0e0e0",
  },
  activeTimeDisplayText: {
    color: "#000",
    fontWeight: "bold",
  },
  ampmButton: {
    backgroundColor: "#f0f0f0",
    borderRadius: 6,
    flexDirection: "row",
    marginLeft: 12,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  ampmText: {
    fontSize: 16,
    fontWeight: "500",
    marginHorizontal: 4,
    opacity: 0.7,
  },
  centerDot: {
    borderRadius: 8,
    height: 16,
    position: "absolute",
    width: 16,
    zIndex: 10,
  },
  clockContainer: {
    alignItems: "center",
    borderColor: "#eee",
    borderWidth: 1,
    justifyContent: "center",
    overflow: "hidden",
    position: "relative",
  },
  clockFace: {
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    alignItems: "center",
    padding: 16,
  },
  hand: {
    borderRadius: 4,
    position: "absolute",
  },
  number: {
    textAlign: "center",
    textAlignVertical: "center",
  },
  numberContainer: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  timeDisplayButton: {
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  timeDisplayContainer: {
    alignItems: "center",
    backgroundColor: "#f8f8f8",
    borderRadius: 8,
    flexDirection: "row",
    marginTop: 20,
    padding: 10,
  },
  timeDisplayText: {
    color: "#666",
    fontSize: 24,
    fontWeight: "500",
  },
  timeSeparator: {
    fontSize: 24,
    fontWeight: "bold",
    marginHorizontal: 4,
  },
});

export default TimePicker;
