import React from "react";
import { StyleProp, TextStyle, ViewStyle } from "react-native";
import Text from "../text";
import TouchRipple from "../touch-ripple";
import { TabsContext } from "./tabs-base";

export interface TabsTriggerProps {
  value: string;
  children: string;
  style?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
}

const TabsTrigger = ({
  value,
  style,
  children,
  labelStyle,
}: TabsTriggerProps) => {
  const {
    setValue,
    activeTabStyle,
    value: contextValue,
    activeIndicatorColor,
  } = React.useContext(TabsContext);
  const active = value === contextValue;
  return (
    <TouchRipple
      onPress={() => setValue(value)}
      style={[
        style,
        {
          borderRadius: 5,
          overflow: "hidden",
          paddingVertical: 5,
          borderBottomWidth: 2,
          paddingHorizontal: 10,
          justifyContent: "center",
          borderBottomColor: active ? activeIndicatorColor : "transparent",
        },
        active && activeTabStyle,
      ]}
    >
      <Text style={[{ textAlign: "center" }, labelStyle]}>{children}</Text>
    </TouchRipple>
  );
};

export default TabsTrigger;
