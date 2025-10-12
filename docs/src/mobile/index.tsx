import { MaterialCommunityIcons } from "@expo/vector-icons";
import { format } from "date-fns";
import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";

export interface MobileViewProps {
  width?: number;
  isDarkMode?: boolean;
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

export function MobileView({
  style,
  children,
  width = 250,
  isDarkMode = false,
}: MobileViewProps) {
  const textColor = isDarkMode ? "white" : "black";
  const backgroundColor = isDarkMode ? "black" : "white";
  return (
    <View style={[styles.frame, { width, backgroundColor }]}>
      <View style={styles.header}>
        <Text
          style={{
            fontSize: 10,
            fontWeight: "500",
            color: textColor,
          }}
        >
          {format(new Date(), "hh:mm a")}
        </Text>
        <View style={styles.cameraLens}>
          <View
            style={{
              width: 10,
              height: 10,
              borderRadius: 5,
              backgroundColor: "#4c5c75",
            }}
          />
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
          <MaterialCommunityIcons name="wifi" size={14} color={textColor} />
          <MaterialCommunityIcons
            size={14}
            color={textColor}
            name="battery-70"
          />
          <Text style={{ fontSize: 10, color: textColor }}>70%</Text>
        </View>
      </View>
      <View style={[styles.container, style]}>{children}</View>
      <View style={styles.bottomTab} />
    </View>
  );
}

const styles = StyleSheet.create({
  frame: {
    borderWidth: 10,
    borderRadius: 30,
    aspectRatio: 8 / 16,
    borderColor: "#222426",
    overflow: "hidden",
    alignSelf: "center",
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  container: {
    flex: 1,
    overflow: "hidden",
    position: "relative",
  },
  header: {
    gap: 10,
    padding: 10,
    borderBottomWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "lightpink",
    justifyContent: "space-between",
  },
  bottomTab: {
    height: 5,
    bottom: 10,
    zIndex: 10,
    width: 80,
    left: "50%",
    borderRadius: 5,
    position: "absolute",
    backgroundColor: "#222426",
    transform: [{ translateX: -40 }],
  },
  cameraLens: {
    width: 20,
    height: 20,
    left: "50%",
    borderRadius: 10,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#222426",
    // transform: [{ translateX: -10 }],
  },
});
