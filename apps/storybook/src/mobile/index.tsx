import { MaterialCommunityIcons } from "@expo/vector-icons";
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
        <Text style={{ fontSize: 10, fontWeight: "500" }}>04:37 PM</Text>
        <View
          style={{
            gap: 5,
            paddingHorizontal: 10,
            flexDirection: "row",
          }}
        >
          <MaterialCommunityIcons name="signal" />
          <MaterialCommunityIcons name="signal" />
          <MaterialCommunityIcons name="battery-70" />
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
    width: 250,
    aspectRatio: 8 / 15,
    borderWidth: 10,
    borderRadius: 30,
    overflow: "hidden",
    borderColor: "black",
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
