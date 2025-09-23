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
        <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
          <MaterialCommunityIcons name="wifi" size={14} />
          <MaterialCommunityIcons name="battery-70" size={14} />
          <Text style={{ fontSize: 10 }}>70%</Text>
        </View>
      </View>
      <View style={[styles.container, style]}>{children}</View>
      <View style={styles.bottomTab}>
        <MaterialCommunityIcons
          name="triangle-down-outline"
          style={{ transform: [{ rotate: "90deg" }] }}
        />
        <MaterialCommunityIcons name="circle-outline" />
        <MaterialCommunityIcons name="square-outline" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  frame: {
    alignSelf: "center",
    aspectRatio: 8 / 16,
    borderWidth: 10,
    borderRadius: 30,
    borderColor: "black",
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
    padding: 10,
    borderTopWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    borderTopColor: "#e4eaeb",
    justifyContent: "space-between",
  },
});
