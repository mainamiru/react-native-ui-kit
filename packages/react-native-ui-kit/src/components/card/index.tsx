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

Card.Image.displayName = "CardImage";
Card.Title.displayName = "CartTitle";
Card.Content.displayName = "CardContent";
Card.Description.displayName = "CardDescription";

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 3,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
  },
  content: {
    padding: 12,
  },
  description: {
    color: "#555",
    fontSize: 14,
    lineHeight: 20,
  },
  image: {
    height: 160,
    width: "100%",
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 6,
  },
});

export default Card;
