import React from "react";
import { StyleSheet, Text, TextStyle, View, ViewStyle } from "react-native";
import { SmartImage } from "./smart-image";

export type AvatarSize = "sm" | "md" | "lg" | number;

export type AvatarProps = {
  testID?: string;
  fallback?: string;
  size?: AvatarSize;
  style?: ViewStyle;
  textStyle?: TextStyle;
  backgroundColor?: string;
  source?: string | null | number;
};

const SIZE_MAP = {
  sm: 32,
  md: 48,
  lg: 64,
};

export const Avatar: React.FC<AvatarProps> = ({
  style,
  source,
  testID,
  textStyle,
  size = "md",
  fallback = "?",
  backgroundColor = "#E0E0E0",
}) => {
  const avatarSize: number = SIZE_MAP[size] ?? size;

  const renderContent = () => {
    if (source) {
      return (
        <SmartImage
          source={source}
          style={{
            width: avatarSize,
            height: avatarSize,
            borderRadius: avatarSize / 2,
          }}
        />
      );
    }
    return (
      <View
        style={[
          styles.fallbackContainer,
          {
            backgroundColor,
            width: avatarSize,
            height: avatarSize,
            borderRadius: avatarSize / 2,
          },
        ]}
      >
        <Text
          style={[
            styles.fallbackText,
            { fontSize: avatarSize * 0.4 },
            textStyle,
          ]}
        >
          {fallback}
        </Text>
      </View>
    );
  };

  return (
    <View
      style={[
        {
          width: avatarSize,
          height: avatarSize,
          borderRadius: avatarSize / 2,
        },
        style,
      ]}
      testID={testID}
    >
      {renderContent()}
    </View>
  );
};

Avatar.displayName = "Avatar";

const styles = StyleSheet.create({
  fallbackContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  fallbackText: {
    color: "#555",
    fontWeight: "600",
  },
});

export default Avatar;
