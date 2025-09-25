import React from "react";
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
} from "react-native";

export interface AvatarImageProps {
  size?: number;
  source: ImageSourcePropType;
  style?: StyleProp<ImageStyle>;
  placeholderSource?: ImageSourcePropType;
}

const AvatarImage: React.FC<AvatarImageProps> = ({
  style,
  source,
  size = 60,
  placeholderSource,
}) => {
  const [error, setError] = React.useState(false);

  const imageStyle: StyleProp<ImageStyle> = [
    {
      width: size,
      height: size,
      borderRadius: size / 2,
      overflow: "hidden" as const,
    },
    style,
  ];

  return (
    <Image
      source={error && placeholderSource ? placeholderSource : source}
      style={imageStyle}
      onError={() => setError(true)}
    />
  );
};

export default AvatarImage;
