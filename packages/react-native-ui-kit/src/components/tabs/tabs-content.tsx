import * as React from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import { TabsContext } from "./tabs-base";

export interface TabsContentProps {
  value: string;
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

const TabsContent = ({ value, children, style }: TabsContentProps) => {
  const { value: contextValue } = React.useContext(TabsContext);
  if (value !== contextValue) return null;
  return <View style={style}>{children}</View>;
};

export default TabsContent;
