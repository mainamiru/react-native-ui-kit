import * as React from "react";
import { FlatList, StyleProp, TextStyle, View, ViewStyle } from "react-native";
import { isNil } from "../../utils";
import Divider from "../divider";
import Text from "../text";
import PickerBase from "./picker-base";
import PickerContent from "./picker-content";
import PickerItem, { PickerItemProps } from "./picker-item";
import PickerTrigger from "./picker-trigger";
import { PickerMode, PickerSelectContext } from "./utils";

export interface PickerSelectProps<T extends string | number> {
  label?: string;
  selectedValue?: T;
  mode?: PickerMode;
  helperText?: string;
  placeholderText?: string;
  data: PickerItemProps<T>[];
  labelStyle?: StyleProp<TextStyle>;
  contentStyle?: StyleProp<ViewStyle>;
  onValueChange?: (value: T) => void;
  helperTextStyle?: StyleProp<TextStyle>;
  HeaderComponent?: React.ReactElement;
}

const PickerSelect = <T extends string | number>({
  data,
  label,
  helperText,
  labelStyle,
  contentStyle,
  selectedValue,
  onValueChange,
  helperTextStyle,
  HeaderComponent,
  mode = "bottom-sheet",
  placeholderText = "Select",
}: PickerSelectProps<T>) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const scrollRef = React.useRef<FlatList<any>>(null);
  const [internalValue, setInternalValue] = React.useState<T | undefined>(
    selectedValue,
  );

  //set internal value
  const setValue = (value: T) => {
    setInternalValue(value);
    setIsOpen(false);
  };

  //handle change
  React.useEffect(() => {
    if (!isNil(internalValue) && onValueChange) {
      onValueChange(internalValue);
    }
  }, [internalValue]);

  //scroll to selected value
  React.useEffect(() => {
    if (isOpen && scrollRef.current && internalValue) {
      scrollRef.current?.scrollToIndex({
        index: data.findIndex((item) => item.value === internalValue),
        animated: true,
      });
    }
  }, [isOpen, internalValue]);

  return (
    <PickerBase
      mode={mode}
      open={isOpen}
      onOpen={() => setIsOpen(true)}
      onClose={() => setIsOpen(false)}
    >
      <PickerSelectContext.Provider value={{ value: internalValue, setValue }}>
        <PickerTrigger
          label={label}
          helperText={helperText}
          labelStyle={labelStyle}
          helperTextStyle={helperTextStyle}
          selectedValue={internalValue?.toString()}
        />
        <PickerContent style={[{ maxHeight: "100%" }, contentStyle]}>
          {HeaderComponent && HeaderComponent}
          {isNil(HeaderComponent) && (
            <View style={{ padding: 10 }}>
              <Text
                variant="titleMedium"
                style={[{ color: "black" }, labelStyle]}
              >
                {placeholderText}
              </Text>
              <Text
                variant="bodyMedium"
                style={[{ color: "gray" }, helperTextStyle]}
              >
                {helperText}
              </Text>
            </View>
          )}
          <Divider />
          <FlatList
            data={data}
            ref={scrollRef}
            keyExtractor={(_, index) => index.toString()}
            getItemLayout={(_, index) => ({
              index,
              length: 40,
              offset: 40 * index,
            })}
            renderItem={({ item }) => (
              <PickerItem
                value={item.value}
                label={item.label}
                onPress={() => setValue(item.value)}
                selected={internalValue === item.value}
              />
            )}
          />
        </PickerContent>
      </PickerSelectContext.Provider>
    </PickerBase>
  );
};

export default PickerSelect;
