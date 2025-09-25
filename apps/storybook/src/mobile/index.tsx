import { MaterialCommunityIcons } from "@expo/vector-icons";
import { format } from "date-fns";
import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";

export interface MobileViewProps {
  width?: number;
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  backgroundColor?: string;
}

export function MobileView({
  style,
  children,
  width = 250,
  backgroundColor = "white",
}: MobileViewProps) {
  return (
    <View style={[styles.frame, { width, backgroundColor }]}>
      <View style={styles.header}>
        <Text style={{ fontSize: 10, fontWeight: "500" }}>
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
          <MaterialCommunityIcons name="wifi" size={14} />
          <MaterialCommunityIcons name="battery-70" size={14} />
          <Text style={{ fontSize: 10 }}>70%</Text>
        </View>
      </View>
      <View style={[styles.container, style]}>{children}</View>
      <View style={styles.bottomTab} />
    </View>
  );
}

const styles = StyleSheet.create({
  frame: {
    alignSelf: "center",
    aspectRatio: 8 / 16,
    borderWidth: 10,
    borderRadius: 30,
    borderColor: "#222426",
    overflow: "hidden",
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  container: {
    flex: 1,
    position: "relative",
  },
  header: {
    gap: 10,
    padding: 10,
    borderBottomWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "#e4eaeb",
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
