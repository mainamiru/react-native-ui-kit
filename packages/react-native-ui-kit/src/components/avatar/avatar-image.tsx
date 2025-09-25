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

const AvatarImage = ({
  size,
  style,
  source,
  placeholderSource,
}: AvatarImageProps) => {
  const [error, setError] = React.useState(false);

  if (error && placeholderSource !== undefined) {
    return (
      <Image
        style={[
          style,
          {
            width: size,
            height: size,
            overflow: "hidden",
            borderRadius: size / 2,
          },
        ]}
        source={placeholderSource}
      />
    );
  }
  return (
    <Image
      style={[
        style,
        {
          width: size,
          height: size,
          overflow: "hidden",
          borderRadius: size / 2,
        },
      ]}
      source={source}
      onError={() => setError(true)}
    />
  );
};

export default AvatarImage;
