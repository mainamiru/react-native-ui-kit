import React, { forwardRef, useState } from "react";
import {
  ColorValue,
  Image,
  StyleProp,
  StyleSheet,
  TextInput,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { assets } from "../../utils";

export interface SearchBarProps {
  value?: string;
  placeholder?: string;
  iconColor?: ColorValue;
  showClearButton?: boolean;
  onSubmitEditing?: () => void;
  style?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  onChangeText?: (text: string) => void;
}

export const SearchBar = forwardRef<TextInput, SearchBarProps>(
  (
    {
      value,
      style,
      iconColor,
      inputStyle,
      onChangeText,
      onSubmitEditing,
      placeholder = "Search...",
      showClearButton = true,
    },
    ref
  ) => {
    const [text, setText] = useState(value || "");

    const handleChangeText = (input: string) => {
      setText(input);
      onChangeText?.(input);
    };

    const handleClear = () => {
      setText("");
      onChangeText?.("");
    };

    return (
      <View style={[styles.container, style]}>
        <Image
          resizeMode="contain"
          source={assets.images.search}
          style={[styles.icon, { tintColor: iconColor }]}
        />
        <TextInput
          ref={ref}
          value={text}
          returnKeyType="search"
          placeholder={placeholder}
          style={[styles.input, inputStyle]}
          onChangeText={handleChangeText}
          onSubmitEditing={onSubmitEditing}
        />
        {showClearButton && text.length > 0 && (
          <TouchableOpacity onPress={handleClear}>
            <Image
              resizeMode="contain"
              source={assets.images.close}
              style={[styles.closeIcon, { tintColor: iconColor }]}
            />
          </TouchableOpacity>
        )}
      </View>
    );
  }
);

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    gap: 10,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    backgroundColor: "#d3eef2",
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#333",
    minHeight: 50,
  },
  icon: {
    width: 20,
    height: 20,
  },
  closeIcon: {
    width: 16,
    height: 16,
  },
});
