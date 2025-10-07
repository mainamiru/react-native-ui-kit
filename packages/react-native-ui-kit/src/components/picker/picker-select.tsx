import * as React from "react";
import {
  FlatList,
  StyleProp,
  TextInput,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
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
  HeaderComponent?: React.ReactElement | null;
  /** Enable inline search filtering */
  searchable?: boolean;
  /** Placeholder text for the search input */
  searchPlaceholder?: string;
}

const ITEM_HEIGHT = 40;

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
  searchable = false,
  searchPlaceholder = "Search...",
}: PickerSelectProps<T>) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [searchQuery, setSearchQuery] = React.useState<string>("");
  const scrollRef = React.useRef<FlatList<PickerItemProps<T>>>(null);
  const [internalValue, setInternalValue] = React.useState<T | undefined>(
    selectedValue,
  );

  // Sync internal state with external prop
  React.useEffect(() => {
    setInternalValue(selectedValue);
  }, [selectedValue]);

  // Handle value change
  React.useEffect(() => {
    if (!isNil(internalValue) && onValueChange) {
      onValueChange(internalValue);
    }
  }, [internalValue, onValueChange]);

  // Scroll to selected item when open
  React.useEffect(() => {
    if (isOpen && scrollRef.current && internalValue != null) {
      const index = data.findIndex((item) => item.value === internalValue);
      if (index >= 0) {
        scrollRef.current.scrollToIndex({ index, animated: true });
      }
    }
  }, [isOpen, internalValue, data]);

  // Set value and close picker
  const setValue = React.useCallback((value: T) => {
    setIsOpen(false);
    setInternalValue(value);
  }, []);

  // Filter data based on search query
  const filteredData = React.useMemo(() => {
    if (!searchable || !searchQuery.trim()) return data;
    const lower = searchQuery.toLowerCase();
    return data.filter((item) => item.label.toLowerCase().includes(lower));
  }, [data, searchQuery, searchable]);

  // Render item
  const renderItem = React.useCallback(
    ({ item }: { item: PickerItemProps<T> }) => (
      <PickerItem
        value={item.value}
        label={item.label}
        onPress={() => setValue(item.value)}
        selected={internalValue === item.value}
      />
    ),
    [internalValue, setValue],
  );

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
          style={{ height: 50 }}
          helperText={helperText}
          labelStyle={labelStyle}
          helperTextStyle={helperTextStyle}
          selectedValue={internalValue?.toString() || placeholderText}
        />

        <PickerContent style={[{ maxHeight: "100%" }, contentStyle]}>
          {HeaderComponent ?? (
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
                {helperText || placeholderText}
              </Text>
            </View>
          )}

          {searchable && (
            <>
              <Divider />
              <View style={{ padding: 10 }}>
                <TextInput
                  value={searchQuery}
                  onChangeText={setSearchQuery}
                  placeholder={searchPlaceholder}
                  style={{
                    height: 50,
                    borderWidth: 1,
                    borderColor: "#ccc",
                    borderRadius: 8,
                    paddingHorizontal: 10,
                  }}
                  placeholderTextColor="#999"
                />
              </View>
            </>
          )}

          <Divider />
          <FlatList
            ref={scrollRef}
            data={filteredData}
            keyExtractor={(item) => item.value.toString()}
            getItemLayout={(_, index) => ({
              index,
              length: ITEM_HEIGHT,
              offset: ITEM_HEIGHT * index,
            })}
            renderItem={renderItem}
            ListEmptyComponent={
              <Text
                style={{
                  textAlign: "center",
                  padding: 20,
                  color: "#888",
                }}
              >
                No results found
              </Text>
            }
            showsVerticalScrollIndicator={false}
          />
        </PickerContent>
      </PickerSelectContext.Provider>
    </PickerBase>
  );
};

export default PickerSelect;
