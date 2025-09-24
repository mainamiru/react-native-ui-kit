import React from "react";
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import { useThemeColor } from "../../hooks";

export interface CardProps {
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
}

export interface CardImageProps {
  source: string | ImageSourcePropType;
  style?: StyleProp<ImageStyle>;
  alt?: string;
}

export interface CardContentProps {
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
}

export interface CardTitleProps {
  children: string;
  style?: StyleProp<TextStyle>;
}

export interface CardDescriptionProps {
  children: string;
  style?: StyleProp<TextStyle>;
}

export const Card: React.FC<CardProps> & {
  Image: React.FC<CardImageProps>;
  Content: React.FC<CardContentProps>;
  Title: React.FC<CardTitleProps>;
  Description: React.FC<CardDescriptionProps>;
} = ({ style, children }) => {
  const { card: backgroundColor } = useThemeColor();
  return (
    <View style={[styles.card, { backgroundColor }, style]}>{children}</View>
  );
};

Card.Image = ({ source, style, alt }) => {
  const imageSource =
    typeof source === "string"
      ? { uri: source }
      : (source as ImageSourcePropType);

  return (
    <Image
      resizeMode="cover"
      source={imageSource}
      accessibilityLabel={alt}
      style={[styles.image, style]}
    />
  );
};

Card.Content = ({ style, children }) => {
  return <View style={[styles.content, style]}>{children}</View>;
};

Card.Title = ({ children, style }) => {
  return <Text style={[styles.title, style]}>{children}</Text>;
};

Card.Description = ({ children, style }) => {
  return <Text style={[styles.description, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  card: {
    elevation: 3,
    shadowRadius: 6,
    borderRadius: 10,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 160,
  },
  content: {
    padding: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 6,
  },
  description: {
    fontSize: 14,
    color: "#555",
    lineHeight: 20,
  },
});

export default Card;
