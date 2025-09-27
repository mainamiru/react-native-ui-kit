import React from "react";
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
} from "react-native";
import AvatarText from "./avatar-text";

export interface AvatarImageProps {
  alt: string;
  size?: number;
  source: ImageSourcePropType;
  style?: StyleProp<ImageStyle>;
  placeholder?: ImageSourcePropType;
}

const AvatarImage: React.FC<AvatarImageProps> = ({
  alt,
  style,
  source,
  size = 60,
  placeholder,
}) => {
  const [error, setError] = React.useState(false);
  const [fallbackError, setFallbackError] = React.useState(false);

  const defaultStyle = [
    {
      width: size,
      height: size,
      borderRadius: size / 2,
      overflow: "hidden" as const,
    },
    style,
  ];

  if (fallbackError) {
    return <AvatarText size={size} text={alt.charAt(0)} style={defaultStyle} />;
  }
  if (error) {
    return (
      <Image
        style={defaultStyle}
        source={placeholder}
        accessibilityLabel={alt}
        onError={() => setFallbackError(true)}
      />
    );
  } else {
    return (
      <Image
        source={source}
        style={defaultStyle}
        accessibilityLabel={alt}
        onError={() => setError(true)}
      />
    );
  }
};

export default AvatarImage;
