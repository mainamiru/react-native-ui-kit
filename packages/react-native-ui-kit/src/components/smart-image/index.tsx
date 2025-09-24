import React, { useState } from "react";
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
} from "react-native";
import { assets } from "../../utils";

export interface SmartImageProps {
  style?: StyleProp<ImageStyle>;
  placeholder?: ImageSourcePropType;
  source: string | null | undefined | ImageSourcePropType;
  resizeMode?: "cover" | "contain" | "stretch" | "repeat" | "center";
  fadeDuration?: number;
}

export const SmartImage: React.FC<SmartImageProps> = ({
  style,
  source,
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
      setSource({ uri: source });
    } else if (source) {
      setSource(source);
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
