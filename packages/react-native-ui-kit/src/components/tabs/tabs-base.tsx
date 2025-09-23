import React from "react";
import { StyleProp, ViewStyle } from "react-native";

export interface TabsBaseProps<T extends string> {
  children?: React.ReactNode;
  value?: T;
  defaultValue?: T;
  activeIndicatorColor?: string;
  onValueChange?: (value: T) => void;
  activeTabStyle?: StyleProp<ViewStyle>;
}

export interface TabsContextType<T extends string> {
  value: T;
  setValue: (value: T) => void;
  activeIndicatorColor: string;
  activeTabStyle?: StyleProp<ViewStyle>;
}

export const TabsContext = React.createContext<TabsContextType<string> | null>(
  null
);

const TabsBase = <T extends string>({
  value,
  children,
  defaultValue,
  onValueChange,
  activeTabStyle,
  activeIndicatorColor = "orange",
}: TabsBaseProps<T>) => {
  const initalValue = value || defaultValue;
  const [internalValue, setInternalValue] = React.useState<T>(initalValue);

  // Set internal value
  const setValue = (value: T) => {
    setInternalValue(value);
    onValueChange?.(value);
  };

  return (
    <TabsContext.Provider
      value={{
        setValue,
        activeTabStyle,
        activeIndicatorColor,
        value: internalValue,
      }}
    >
      {children}
    </TabsContext.Provider>
  );
};

export default TabsBase;
