import React, { useState } from "react";
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
} from "react-native";
import { assets } from "../../utils";

export interface SmartImageProps {
  source?: string | number | null;
  placeholder?: ImageSourcePropType;
  style?: StyleProp<ImageStyle>;
  resizeMode?: "cover" | "contain" | "stretch" | "repeat" | "center";
  fadeDuration?: number;
}

export const SmartImage: React.FC<SmartImageProps> = ({
  source,
  style,
  placeholder,
  resizeMode = "cover",
  fadeDuration = 300,
}) => {
  const [error, setError] = useState(false);
  const [currentSource, setSource] = useState<ImageSourcePropType>();

  //handle source
  React.useEffect(() => {
    if (typeof source === "number") {
      setSource(source);
    } else if (typeof source === "string") {
      Image.getSize(source)
        .then(() => setSource({ uri: source }))
        .catch(() => setError(true));
    } else if (placeholder) {
      setSource(placeholder);
    } else {
      setError(true);
    }
  }, [source, placeholder]);

  if (error) {
    return (
      <Image
        style={style}
        resizeMode={resizeMode}
        fadeDuration={fadeDuration}
        source={assets.images.placeholder}
      />
    );
  }
  return (
    <Image
      style={style}
      source={currentSource}
      resizeMode={resizeMode}
      fadeDuration={fadeDuration}
      onError={() => setError(true)}
    />
  );
};
export default SmartImage;
