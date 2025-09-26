import React from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";

export interface RadioButtonProps {
  label: string;
  selected: boolean;
  onPress: () => void;
  containerStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
}

export const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  selected,
  onPress,
  containerStyle,
  labelStyle,
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={[styles.circle, selected && styles.circleSelected]}>
        {selected && <View style={styles.innerCircle} />}
      </View>
      <Text style={[styles.label, labelStyle]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  circle: {
    alignItems: "center",
    borderColor: "#555",
    borderRadius: 11,
    borderWidth: 2,
    height: 22,
    justifyContent: "center",
    marginRight: 10,
    width: 22,
  },
  circleSelected: {
    borderColor: "#007AFF",
  },
  container: {
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 6,
  },
  innerCircle: {
    backgroundColor: "#007AFF",
    borderRadius: 5,
    height: 10,
    width: 10,
  },
  label: {
    color: "#333",
    fontSize: 16,
  },
});

export default RadioButton;
