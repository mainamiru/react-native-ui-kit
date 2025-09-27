import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

import {
  Animated,
  BlurEvent,
  TextInput as DefaultTextInput,
  TextInputProps as DefaultTextInputProps,
  FocusEvent,
  StyleProp,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import { useThemeColor } from "../../hooks";

interface IconProps {
  color: string;
  marginLeft: number;
  marginRight: number;
}

export type TextInputRef = DefaultTextInput;

export interface TextInputProps extends DefaultTextInputProps {
  label?: string | null;
  helperText?: string;
  style?: StyleProp<ViewStyle>;
  mode?: "outlined" | "underline";
  labelStyle?: StyleProp<TextStyle>;
  inputStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  validate?: (text: string) => Error | null;
  left?: (props: IconProps) => React.ReactElement;
  right?: (props: IconProps) => React.ReactElement;
}

export const TextInput = forwardRef<TextInputRef, TextInputProps>(
  (
    {
      label,
      left,
      right,
      style,
      onBlur,
      onFocus,
      inputStyle,
      labelStyle,
      validate,
      helperText,
      onChangeText,
      containerStyle,
      mode = "outlined",
      placeholderTextColor,
      ...props
    },
    ref,
  ) => {
    const [error, setError] = useState<Error | null>(null);
    const { text, border, placeholder, primary } = useThemeColor();
    const animatedValue = useRef(new Animated.Value(0)).current;
    const inputRef = useRef<DefaultTextInput>(null);

    // Expose ref methods
    useImperativeHandle(ref, () => inputRef.current as DefaultTextInput);

    // handle focus event
    const handleFocus = useCallback(
      (event: FocusEvent) => {
        Animated.timing(animatedValue, {
          toValue: 1,
          duration: 200,
          useNativeDriver: false, // borderColor can't use native driver
        }).start();
        onFocus?.(event);
      },
      [animatedValue, onFocus],
    );

    // handle blur event
    const handleBlur = useCallback(
      (event: BlurEvent) => {
        Animated.timing(animatedValue, {
          toValue: 0,
          duration: 200,
          useNativeDriver: false,
        }).start();
        onBlur?.(event);
      },
      [animatedValue, onBlur],
    );

    const mutedColor = (placeholderTextColor || placeholder) as string;

    const handleInputText = (text: string) => {
      onChangeText?.(text);
      setError(validate ? validate(text) : null);
    };

    return (
      <View style={[{ gap: 5 }, style]}>
        {label && (
          <Text
            style={[
              {
                color: text,
                fontSize: 14,
                fontWeight: "500",
              },
              labelStyle,
            ]}
          >
            {label}
          </Text>
        )}
        <Animated.View
          style={[
            containerStyle,
            {
              gap: 10,
              borderWidth: 0,
              borderRadius: 5,
              flexDirection: "row",
              alignItems: "center",
              borderColor: animatedValue.interpolate({
                inputRange: [0, 1],
                outputRange: [border, primary],
              }),
            },
            mode === "outlined" && {
              borderWidth: 1,
              paddingHorizontal: 10,
            },
            mode === "underline" && {
              borderRadius: 0,
              paddingHorizontal: 0,
              borderBottomWidth: 1,
            },
          ]}
        >
          {left &&
            left({
              marginLeft: 10,
              marginRight: 10,
              color: mutedColor,
            })}
          <DefaultTextInput
            ref={inputRef}
            {...props}
            onBlur={handleBlur}
            onFocus={handleFocus}
            onChangeText={handleInputText}
            placeholderTextColor={mutedColor}
            style={[
              {
                flex: 1,
                color: text,
                minHeight: 45,
                outlineWidth: 0,
                paddingVertical: 10,
              },
              inputStyle,
            ]}
          />
          {right &&
            right({
              marginLeft: 10,
              marginRight: 10,
              color: mutedColor,
            })}
        </Animated.View>
        {error ? (
          <Text style={{ color: "red" }}>{error.message}</Text>
        ) : (
          helperText && <Text style={{ color: mutedColor }}>{helperText}</Text>
        )}
      </View>
    );
  },
);

TextInput.displayName = "TextInput";

export default TextInput;
