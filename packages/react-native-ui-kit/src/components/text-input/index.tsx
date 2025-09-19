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

export interface LeftProps {
  color: string;
  style: ViewStyle;
}

export interface TextInputProps extends DefaultTextInputProps {
  label?: string | null;
  helperText?: string;
  style?: StyleProp<ViewStyle>;
  focusedOutlineColor?: string;
  mode?: "outlined" | "underline";
  labelStyle?: StyleProp<TextStyle>;
  inputStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  validate?: (text: string) => Error | null;
  left?: (props: LeftProps) => React.ReactElement;
  right?: (props: LeftProps) => React.ReactElement;
}

export const TextInput = forwardRef<DefaultTextInput, TextInputProps>(
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
      focusedOutlineColor = "orange",
      ...props
    },
    ref
  ) => {
    const [error, setError] = useState<Error | null>(null);
    const { text, placeholder } = useThemeColor();
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
      [animatedValue, onFocus]
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
      [animatedValue, onBlur]
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
                fontSize: 12,
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
            mode === "outlined" && { borderWidth: 1 },
            mode === "underline" && { borderBottomWidth: 1.5 },
            {
              borderRadius: 5,
              flexDirection: "row",
              alignItems: "center",
              borderColor: animatedValue.interpolate({
                inputRange: [0, 1],
                outputRange: [mutedColor, focusedOutlineColor],
              }),
            },
          ]}
        >
          {left &&
            left({
              style: { padding: 10 },
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
                height: 45,
                outlineWidth: 0,
                paddingVertical: 10,
                paddingLeft: left ? 0 : 10,
                paddingRight: right ? 0 : 10,
              },
              inputStyle,
            ]}
          />
          {right &&
            right({
              style: { padding: 10 },
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
  }
);

TextInput.displayName = "TextInput";

export default TextInput;
