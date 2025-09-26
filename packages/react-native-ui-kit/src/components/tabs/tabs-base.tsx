import React from "react";
import { StyleProp, ViewStyle } from "react-native";

export interface TabsBaseProps<T extends string> {
  children?: React.ReactNode;
  value?: T;
  defaultValue: T;
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

export const TabsContext = React.createContext<TabsContextType<any> | null>(
  null,
);

const TabsBase = <T extends string>({
  value,
  children,
  defaultValue,
  onValueChange,
  activeTabStyle,
  activeIndicatorColor = "orange",
}: TabsBaseProps<T>) => {
  const [internalValue, setInternalValue] = React.useState<T>(defaultValue);

  // Set internal value
  const setValue = (value: T) => {
    setInternalValue(value);
    onValueChange?.(value);
  };

  // Set internal value
  React.useEffect(() => {
    if (value !== undefined) {
      setInternalValue(value);
    }
  }, [value]);

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
