import React from "react";
import { Pressable, View } from "react-native";
import BottomSheet, { BottomSheetRef } from "../bottom-sheet";
import { Text } from "../text";

export interface PickerSelectProps {
  children: React.ReactNode;
  position?: "left" | "right" | "bottom";
}

const PickerSelect = ({ position = "bottom", children }: PickerSelectProps) => {
  const bottomSheetRef = React.useRef<BottomSheetRef>(null);
  return (
    <>
      <Pressable
        onPress={() => bottomSheetRef.current?.open()}
        style={{
          height: 50,
          padding: 10,
          borderWidth: 1,
          borderRadius: 5,
          borderColor: "#ccc",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text>Select</Text>
        <Text>⌵</Text>
      </Pressable>
      <BottomSheet ref={bottomSheetRef}>
        <View style={{ padding: 10 }}>{children}</View>
      </BottomSheet>
    </>
  );
};

export default PickerSelect;
